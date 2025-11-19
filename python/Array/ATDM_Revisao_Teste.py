import pandas as pd
import numpy as np

import matplotlib.pyplot as plt

import seaborn as sns

from scipy import stats
from scipy.stats import pearsonr, spearmanr
from sklearn.decomposition import PCA

# ====================
# Importando o dataset
# ====================
data = pd.read_csv("5.dados_sinteticos.csv")
# data = pd.read_excel("dados.xlsx")

# ===================================
# Acessando as informaçoes do dataset
# ===================================
# 1. Sem saber o nome das colunas
# -------------------------------
print(
    data.iloc[:, 0], # Todas as linhas da 1a coluna
    data.iloc[:, 4], # Todas as linhas da 5a coluna
    data.iloc[:, len(data.columns)-1] # Todas as linhas da última coluna
)

# Acessando a 5a linha da 3a coluna ? ? ?
print(data.iloc[4, 2])

# 2. Com o nome das colunas
# -------------------------
# Descobrindo o nome das colunas do dataset
colunas = data.columns

print(f"Colunas do dataset: {colunas.values}")

# Acessando os valores pelo nome das colunas
print(
    data.loc[:, "Renda Anual"], # Todas as linhas da coluna "Renda Anual"
    data.loc[:, "Poupança"]
)

# ========================
# Análise com condicionais
# ========================
# Quantas rendas anuais são maiores do que 50000 ? ? ?
condicao = data["Renda Anual"] > 50000
print(data.loc[condicao, "Renda Anual"]) # Quais!
print(data.loc[condicao, "Renda Anual"].size) # Quantas!

# Quantas pessoas possuem entre 30 e 35 anos ? ? ?
condicao = (data["Idade"] > 30) & (data["Idade"] < 35)
print(data.loc[condicao, "Idade"]) # Quais!
print(data.loc[condicao, "Idade"].size) # Quantas!

# Quantas pessoas possuem menos de 23 ou mais de 65 ? ? ?
condicao = (data["Idade"] < 23) | (data["Idade"] > 65)
print(data.loc[condicao, "Idade"]) # Quais!
print(data.loc[condicao, "Idade"].size) # Quantas!

# =======================
# Análise com estatística
# =======================
# Qual a moda das idades das pessoas com menos de 23 ou mais de 65 ? ? ?
condicao = (data["Idade"] < 23) | (data["Idade"] > 65)
moda = data.loc[condicao, "Idade"].mode().values
print(f"A moda é: {moda}") # Moda!

# Quantas pessoas possuem 67 anos? ? ?
condicao = data["Idade"] == 67
print(data.loc[condicao, "Idade"].size)

# Qual a média da renda anual das pessoas entre 30 e 35 anos de idade ? ? ?
condicao = (data["Idade"] > 30) & (data["Idade"] < 35)
mediaRendaAnual = data.loc[condicao, "Renda Anual"].mean()
print(f"A meédia da renda anual nesta faixa etaria é de {mediaRendaAnual:.2f} euros")

# Calcule o desvio padrao dos Anos de Educação de todas as pessoa com renda
# anual maior que a media da renda anual da faixa etaria entre 30 e 35 anos
condicao = (data["Idade"] > 30) & (data["Idade"] < 35)
mediaRendaAnual = data.loc[condicao, "Renda Anual"].mean()
condicao2 = data["Renda Anual"] > mediaRendaAnual
desvioPadrao = data.loc[condicao2, "Anos de Educação"].std()
print(f"Os desvio padrao é de: {desvioPadrao:.2f}")

# Calcule os quartis da variável "Despesas Mensais"
quartis = data["Despesas Mensais"].quantile([0.25, 0.5, 0.75])
print(quartis)

# ============
# Visualização
# ============
# Exiba, em um gráfico scatter, os valores da variável idade
plt.scatter(data.index, data["Idade"])
plt.xlabel("Index")
plt.ylabel("Idade")
#plt.show()

# Exiba o grafico Idade x Renda Anual
plt.scatter(data["Idade"], data["Renda Anual"])
plt.xlabel("Idade")
plt.ylabel("Renda Anual")
#plt.show()

# Agora, exibindo ambos os graficos lado a lado
_, ax = plt.subplots(1, 2)

plt.sca(ax[0])
plt.scatter(data.index, data["Idade"])

plt.sca(ax[1])
plt.scatter(data["Idade"], data["Renda Anual"])

#plt.show()

# ==========
# Correlação (Pandas ou Pearson)
# ==========# Gerando a matrix de correlação
correlacao = data.corr()
print(correlacao)

_, ax = plt.subplots(1)
sns.heatmap(correlacao, annot=True, cmap="coolwarm")
#plt.show()

# ======================
# Correlação de Spearman
# ======================
spearman = data.corr(method="spearman")
print(spearman)

_,ax = plt.subplots(1)
sns.heatmap(spearman, annot=True, cmap="coolwarm")
#plt.show()

# ===================
# Deteção de Outliers
# ===================
# Via boxplot
# -----------
plt.close("all")
for col in data.columns:
    plt.figure()
    sns.boxplot(data=data[col])
    plt.title(col)
#plt.show()

# Via z-score
# -----------
## Calcunado o zscore em valor absoluto 
for col in data.columns:
    z_scores = np.abs(
        stats.zscore(data[col])
    )
    outliers = z_scores[z_scores >= 1.5]
    print(f"Outliers em {col}: {outliers.size}")


# ===========================
# Redução de Dimensionalidade
# ===========================
## PCA
### Padronizar os dados
# Reduzindo valores muito altos
data["Despesas Mensais (x 10^2)"] = data["Despesas Mensais"] / 100
data["Renda Anual (x 10^3)"]      = data["Renda Anual"] / 1000
data["Poupança (x 10^4)"]         = data["Poupança"] / 10000

# Removendo os valores originais
data.drop(columns=["Renda Anual", "Despesas Mensais", "Poupança"], inplace=True)

### Calcular as componentes
pca = PCA(n_components=None) # None para calcular todas as componentes

# Aplicando as componentes principais aos dados escalados
dataPCA = pca.fit_transform(data)

# Nomeando cada coluna dos novos dados pela respetiva componente

# Transformando em pandas Data Frame
dataPCA = pd.DataFrame(dataPCA, columns=col_names, index=data.index)

### Verificar a variância explicada acumulada (Para escolha das componentes)
varianciaExplicada = pd.DataFrame({
    'Componente': dataPCA.columns,
    'Variância Explicada': pca.explained_variance_ratio_,
    'Variância Acumulada': np.cumsum(pca.explained_variance_ratio_)
})

print(varianciaExplicada)

# Quantas componentes são indicadas para representação fiel dos dados ? ? ?
"Neste caso será apenas 1 componente, pois Variancia acumulada já passa dos 80%!"
