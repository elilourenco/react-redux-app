import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
import unidecode  # Para remover acentos

# 1. Carregar os dados
caminho = r"base_empresas(Sheet1).csv"
df = pd.read_csv(caminho, sep=';', encoding='latin1')
print(df.head())

# 2. Padronizar colunas
df.columns = [col.strip().lower().replace(" ", "_") for col in df.columns]
df.columns = [unidecode.unidecode(col) for col in df.columns]  # Remove acentos

# 3. Corrigir nomes
df = df.rename(columns={
    'abertura': 'abertura',
    'maximo': 'maxima',
    'minimo': 'minima',
    'fecho': 'fechamento',
    'numero_de_accoes': 'volume'
})

# 4. Converter vírgulas para pontos
for col in ['abertura', 'maxima', 'minima', 'fechamento']:
    df[col] = df[col].astype(str).str.replace(',', '.').str.replace(' ', '')
    df[col] = pd.to_numeric(df[col], errors='coerce')

# 5. Datas e trimestre
df['data'] = pd.to_datetime(df['data'], dayfirst=True, errors='coerce')
df['trimestre'] = df['data'].dt.to_period('Q')

# 6. Estatísticas por grupo
def calcular_estatisticas(grupo):
    estatisticas = {}
    for coluna in ['abertura', 'maxima', 'minima', 'fechamento', 'volume']:
        dados = grupo[coluna].dropna()
        n = dados.count()
        media = dados.mean()
        moda = dados.mode().iloc[0] if not dados.mode().empty else np.nan
        mediana = dados.median()
        std = dados.std()
        var = dados.var()
        erro_padrao = std / np.sqrt(n) if n > 0 else np.nan
        ic95 = (media - 1.96 * erro_padrao, media + 1.96 * erro_padrao) if n > 1 else (np.nan, np.nan)
        q1 = dados.quantile(0.25)
        q2 = dados.quantile(0.5)
        q3 = dados.quantile(0.75)
        iqr = q3 - q1
        minimo = dados.min()
        maximo = dados.max()
        skew = dados.skew()
        kurt = dados.kurt()
        faltantes = grupo[coluna].isna().sum()

        estatisticas[coluna] = {
            'N': n,
            'Valores em falta': faltantes,
            'Média': media,
            'Moda': moda,
            'Mediana': mediana,
            'Desvio Padrão': std,
            'Variância': var,
            'IC 95%': ic95,
            'IQR': iqr,
            'Q1': q1,
            'Q2': q2,
            'Q3': q3,
            'Mínimo': minimo,
            'Máximo': maximo,
            'Skewness': skew,
            'Kurtose': kurt
        }

    return pd.DataFrame(estatisticas).T

estatisticas_por_trimestre = {
    (nome, trimestre): calcular_estatisticas(grupo)
    for (nome, trimestre), grupo in df.groupby(['simbolo', 'trimestre'])
}

# Corrigir a coluna de volume (ex: '4,22M' → 4220000.0)
df['volume'] = (
    df['volume']
    .astype(str)
    .str.replace(' ', '')
    .str.upper()
    .str.replace('M', '', regex=False)
    .str.replace(',', '.')
)
df['volume'] = pd.to_numeric(df['volume'], errors='coerce') * 1_000_000

# 7. Gráfico com linha de tendência
for simbolo, grupo in df.groupby('simbolo'):
    plt.figure(figsize=(10, 5))
    grupo = grupo.sort_values('data')

    # Gráfico principal
    sns.lineplot(x='data', y='fechamento', data=grupo, marker='o', label='Fechamento')

    # Adicionar linha de tendência
    if len(grupo) >= 2:
        x_ord = grupo['data'].map(pd.Timestamp.toordinal)
        z = np.polyfit(x_ord, grupo['fechamento'], 1)
        p = np.poly1d(z)
        plt.plot(grupo['data'], p(x_ord), linestyle='--', color='red', label='Tendência Linear')

    plt.title(f'Evolução do preço de fechamento - {simbolo}')
    plt.xlabel('Data')
    plt.ylabel('Fechamento (€)')
    plt.legend()
    plt.grid(True)
    plt.tight_layout()
    plt.show()