import pandas as pd
import numpy as np

import matplotlib.pyplot as plt

import seaborn as sns

from scipy import stats
from sklearn.decomposition import PCA

# ==================
# Funções auxiliares
# ==================
def desenharGrafico(x, y):
    plt.scatter(x, y)
    plt.xlabel("x")
    plt.ylabel("y")
    plt.title("Gráfico")
    plt.show()
    # plt.savefig("graficoScatter1.png", dpi=150)
    return None

def graficoCorrelacao(matrizCorrelacao):
    sns.heatmap(matrizCorrelacao, annot=True, cmap="coolwarm")
    plt.show()
    # plt.savefig("graficoCorrelacao.png", dpi=150)
    return None

def caculaZScore(data):
    for col in data.columns:
        z_scores = np.abs(
            stats.zscore(data[col])
        )
        print(
            f"Na coluna \"{col}\", temos:",
            f"Z_Sscore amior que 3: {z_scores[z_scores >= 3].size}",
            f"Z_Sscore entre 2.5 e 3: {z_scores[(z_scores >= 2.5) & (z_scores < 3)].size}",
            f"Z_Sscore entre 2 e 2.5: {z_scores[(z_scores >= 2) & (z_scores < 2.5)].size}",
            f"Z_Sscore entre 1.5 e 2: {z_scores[(z_scores >= 1.5) & (z_scores < 2)].size}",
            f"Z_Sscore entre 1 e 1.5: {z_scores[(z_scores >= 1) & (z_scores < 1.5)].size}",
            f"Z_Sscore menor que 1: {z_scores[z_scores < 1].size}",
            sep="\n\t"
        )
    return None



def identificarPosicaoOutliers(data, col):
    return data[(np.abs(stats.zscore(data[col])) > 1.5)].index

def graficoBoxplot(data, col=None):
    if col == None:
        columns = data.columns
    else:
        columns = [col]

    for col in columns:
        plt.figure()
        sns.boxplot(data=data[col])
        plt.title(f"Boxplot para \"{col}\"")
        plt.show()
        # plt.savefig(f"graficoBoxplot_{col}.png", dpi=150)

    return None
#outliers via box plot 


# ==================
# Programa Principal
# ==================
if __name__ == "__main__":
    # ====================
    # Importando o dataset
    # ====================
    # Complete #
    
    data = pd.read_csv("dataset_expandido_1000.csv")
    
    
    print(f"quantas informações" ,data["Idade"].dropna()),

    print(f"quantas informações" ,data["Renda_Mensal"].dropna())
    print(f"quantas informações" ,data["Num_Compras"].dropna()) 
    print(f"quantas informações" ,data["Gasto_Total"].dropna())
    print(f"quantas informações" ,data["Satisfacao"].dropna()) 
    print(f"quantas informações" ,data["Regiao"].dropna())
    
    
    #outliers via box ploC
    print(graficoBoxplot(data,"Idade" ))
    print(graficoBoxplot(data,"Renda_Mensal" ))
    print(graficoBoxplot(data,"Num_Compras" ))
    print(graficoBoxplot(data,"Gasto_Total" ))
    print(graficoBoxplot(data,"Satisfacao" )) 
    #metodo z-score
    
    
    
    
    
    #A media da variavel Gasto_Total
    media= (data["Gasto_Total"].mean())
    print(f" A media é", media)
    
    
    media=(data["Gasto_Total"].drop(index=identificarPosicaoOutliers(data,"Gasto_Total")).mean())
    print( F"a medias da variavel sem outliers" ,media)
    
    
    #Retirar outliers
    
    
    print(graficoCorrelacao)


    # ===========================
    # Redução de Dimensionalidade
    # ===========================
    ## PCA
    ### Padronizar os dados
    
   
    
    
    
    
    
    # Reduzindo valores muito altos
    
    data["Renda_Mensal(x 10^2)"] = data["Renda_Mensal"] / 100

    
    data.drop(columns=["Renda_Mensal", "Satisfacao","Regiao"], inplace=True)
    #Calculo de z_scores

    print(caculaZScore (data))

    ### Calcular as componentes
    pca = PCA(n_components=None)

    # Aplicando as componentes principais aos dados escalados
    dataPCA = pca.fit_transform(data)

    # Nomeando cada coluna dos novos dados pela respetiva componente
    col_names = [f'PC{i+1}' for i in range(dataPCA.shape[1])]

    # Transformando em pandas Data Frame
    dataPCA = pd.DataFrame(dataPCA, columns=col_names, index=data.index)

    ### Verificar a variância explicada acumulada (Para escolha das componentes)
    varianciaExplicada = pd.DataFrame({
        'Componente': dataPCA.columns,
        'Variância Explicada': pca.explained_variance_ratio_,
        'Variância Acumulada': np.cumsum(pca.explained_variance_ratio_)
    })

    # Exibindo as variancias explicadas
    # Complete #
    
    print(varianciaExplicada)
    
    #Colunas do dataset
    
    colunas = data.columns

print(f"Colunas do dataset: {colunas.values}")

#informaçes do da set


print(f" o numero de linhas informações", data.shape)


#data["Renda_Mensal(x 10^3)"] = data["Renda_Mensal"] / 100
# data["Gasto_Total (x 10^4)"]      = data["Gasto_Total"] / 1000




    
    
    
