
import pandas as pd
import numpy as np

from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler

"""
Redução da dimensionalidade

Passos:
1. Escalar os dados, normalizar;
2. Calcular PCAs (Componentes principais/autovetores);

NOTA: Para ter os recursos necessários para o cálculo dos PCAs, é necessário que o módulo scikit-learn esteja instalado. Uma forma de instalar é via comando no terminal:

pip install scikit-learn
OU
python3 -m pip install scikit-learn
"""

# Lendo o ficheiro de dados
data = pd.read_csv("dados_sinteticos.csv")

# Exibindo os dados que temos
input(data)

# 1. Escalando valores muito altos
data["Despesas Mensais (x 10^2)"] = data["Despesas Mensais"] / 100
data["Renda Anual (x 10^3)"]      = data["Renda Anual"] / 1000
data["Poupança (x 10^4)"]         = data["Poupança"] / 10000

# Removendo os valores originais
data.drop(columns=["Renda Anual", "Despesas Mensais", "Poupança"], inplace=True)
# O parâmtetro "inplace" faz o mesmo que o comando abaixo:
#   data = data.drop(columns=["Renda Anual", "Despesas Mensais", "Poupança"])

input(data)

# Exibindo um pouco dos valores de cada variável
# para perceber a escala
for c in data.columns:
    print(
        f"{c:>25}",
        data[c].unique()[:5],
        sep=" -> "
    )
    
    
 #Calculando as componentes principais (CAs)
 
pca=PCA(n_components=None)  # Definindo o número de componentes principais que queremos 
 
 
dataPCA=pca.fit_transform(data)
 
col_names=[f"PCA{i+1}" for i in range(dataPCA.shape[1])]
 
dataPCA=pd.DataFrame(dataPCA, columns=col_names,index=data.index)
 
input(dataPCA)

varianciaExplicada=pd.DataFrame({
    "Componente":dataPCA.columns,
    "Variância Explicada": pca.explained_variance_ratio_,
    "Variância Acumulada": np.cumsum(pca.explained_variance_ratio_)
})

input(varianciaExplicada)

print("Podemos escolher apenas 1  componente principal , pois já atinge  o  objectivo de 80% de variância acumulada")


#Graficamente 
import matplotlib.pyplot as plt
fig, (ax1,ax2)=plt.subplots(1,2, figsize=(15,5))

#Grafico de barras -variancia por componente
ax1.bar(range(1, len(varianciaExplicada)+1),
varianciaExplicada["Variancia Explicada"],
alpa=0.7, color="steelblue")
ax1.set_xlabel("Componente Principal")
ax1.set_ylabel("Variância Explicada")
ax1.set_title("Variância Explicada por Componente Principal")
ax1.set_xticks(range(1, len(varianciaExplicada)+1))


#Grafico de linha - variancia acumulada
ax2.plot(range(1, len(varianciaExplicada)+1),
varianciaExplicada["Variância Acumulada"],
marker="o", linewidth=2, color="darkred")

ax2.axhline(y=0.95, color="green", linestyle="--", label="95% Variância Acumulada")

ax2.set_xlabel("Numero de Componentes Principais")
ax2.set_ylabel("Variância Acumulada")
ax2.set_title("Variância Acumulada ")
ax2.set_xticks(range(1, len(varianciaExplicada)+1))
ax2.legend()    
ax2.grid(True, aplha=0.3)
plt.tight_layout()
plt.show()


    
    


