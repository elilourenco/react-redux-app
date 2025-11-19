import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

from scipy.stats import pearsonr, spearmanr, kendalltau

data = pd.DataFrame(
    {
    "Aluno":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"],
    "Horas de Estudo":[2,4,6,8,10,12,14,16,18,20],
    "Nota no Exame":[10,12,15,17,19,20,20, 18,19,15],
    "satisfacao Ordinal ":[5,6,7,8,9,10,10,9,8,7],
}
    )

correlacao =data.corr(numeric_only=True)


print("Matriz de correlação das variaveis  numericas", correlacao)

sns.heatmap(correlacao,cmap="Reds", annot=True)


horasEstudo= data.loc[:,"Horas de Estudo"]
notaExame= data.loc[:,"Nota no Exame"]
satisfacao= data.loc[:,"satisfacao Ordinal "]



#====================
#Aplicação Pearson
#===================

spearmanr1,p_value= spearmanr(horasEstudo,horasEstudo)
spearmanr4,p_value= spearmanr(horasEstudo,notaExame)
spearmanr5,p_value= spearmanr(horasEstudo,satisfacao)
spearmanr6,p_value=spearmanr(notaExame,horasEstudo)
spearmanr7,p_value=spearmanr(notaExame,notaExame)
spearmanr8,p_value=spearmanr(notaExame,satisfacao)
spearmanr9,p_value=spearmanr(satisfacao,horasEstudo)
spearmanr10,p_value=spearmanr(satisfacao,notaExame)
spearmanr11,p_value=spearmanr(satisfacao,satisfacao)


correlacaoSpearman=[ [spearmanr11,spearmanr4,spearmanr5 ], [spearmanr6,spearmanr7,spearmanr8],[spearmanr9,spearmanr10,spearmanr11 ]]

import numpy as np
correlacaoSpearman=np.array(correlacaoSpearman)
print(correlacaoSpearman)




print("Matriz de correlação das variaveis  numericas", correlacaoSpearman)




horasEstudo= data.loc[:8,"Horas de Estudo"]
notaExame= data.loc[:8,"Nota no Exame"]
satisfacao= data.loc[:8,"satisfacao Ordinal "]

pearson1,p_value1 = pearsonr(horasEstudo,horasEstudo)
pearson4,p_value2= pearsonr(horasEstudo,notaExame)
pearson5,p_value5= pearsonr(horasEstudo,satisfacao)
pearson6,p_value6=pearsonr(notaExame,horasEstudo)
pearson7,p_value7=pearsonr(notaExame,notaExame)
pearson8,p_value8=pearsonr(notaExame,satisfacao)
pearson9,p_value9=pearsonr(satisfacao,horasEstudo)
pearson10,p_value10=pearsonr(satisfacao,notaExame)
pearson11,p_value11=pearsonr(satisfacao,satisfacao)

correlacaoPearson=[ [pearson11,pearson4,pearson5 ], [pearson6,pearson7,pearson8],[pearson9,pearson10,pearson11 ]]


spearmanr1,p_value1= spearmanr(horasEstudo,horasEstudo)
spearmanr4,p_value4= spearmanr(horasEstudo,notaExame)
spearmanr5,p_value5= spearmanr(horasEstudo,satisfacao)
spearmanr6,p_value6=spearmanr(notaExame,horasEstudo)
spearmanr7,p_value7=spearmanr(notaExame,notaExame)
spearmanr8,p_value8=spearmanr(notaExame,satisfacao)
spearmanr9,p_value9=spearmanr(satisfacao,horasEstudo)
spearmanr10,p_value10=spearmanr(satisfacao,notaExame)
spearmanr11,p_value11=spearmanr(satisfacao,satisfacao)

correlacaoSpearman=[ [spearmanr11,spearmanr4,spearmanr5 ], [spearmanr6,spearmanr7,spearmanr8],[spearmanr9,spearmanr10,spearmanr11 ]]


sns.heatmap(correlacaoPearson,cmap="Reds", annot=True)
plt.show()
sns.heatmap(correlacaoSpearman,cmap="Reds", annot=True)
plt.show()


import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

from scipy.stats import pearsonr, spearmanr, kendalltau

data = pd.DataFrame(
    {
    "Aluno":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"],
    "Horas de Estudo":[2,4,6,8,10,12,14,16,18,20],
    "Nota no Exame":[10,12,15,17,19,20,20, 18,19,15],
    "satisfacao Ordinal ":[5,6,7,8,9,10,10,9,8,7],
}
    )

correlacao =data.corr(numeric_only=True)


print("Matriz de correlação das variaveis  numericas", correlacao)

sns.heatmap(correlacao,cmap="Reds", annot=True)







horasEstudo= data.loc[:8,"Horas de Estudo"]
notaExame= data.loc[:8,"Nota no Exame"]
satisfacao= data.loc[:8,"satisfacao Ordinal "]

pearson1,p_value1 = pearsonr(horasEstudo,horasEstudo)
pearson4,p_value2= pearsonr(horasEstudo,notaExame)
pearson5,p_value5= pearsonr(horasEstudo,satisfacao)
pearson6,p_value6=pearsonr(notaExame,horasEstudo)
pearson7,p_value7=pearsonr(notaExame,notaExame)
pearson8,p_value8=pearsonr(notaExame,satisfacao)
pearson9,p_value9=pearsonr(satisfacao,horasEstudo)
pearson10,p_value10=pearsonr(satisfacao,notaExame)
pearson11,p_value11=pearsonr(satisfacao,satisfacao)

correlacaoPearson=[ [pearson11,pearson4,pearson5 ], [pearson6,pearson7,pearson8],[pearson9,pearson10,pearson11 ]]


spearmanr1,p_value1= spearmanr(horasEstudo,horasEstudo)
spearmanr4,p_value4= spearmanr(horasEstudo,notaExame)
spearmanr5,p_value5= spearmanr(horasEstudo,satisfacao)
spearmanr6,p_value6=spearmanr(notaExame,horasEstudo)
spearmanr7,p_value7=spearmanr(notaExame,notaExame)
spearmanr8,p_value8=spearmanr(notaExame,satisfacao)
spearmanr9,p_value9=spearmanr(satisfacao,horasEstudo)
spearmanr10,p_value10=spearmanr(satisfacao,notaExame)
spearmanr11,p_value11=spearmanr(satisfacao,satisfacao)

correlacaoSpearman=[ [spearmanr11,spearmanr4,spearmanr5 ], [spearmanr6,spearmanr7,spearmanr8],[spearmanr9,spearmanr10,spearmanr11 ]]


sns.heatmap(correlacaoPearson,cmap="Reds", annot=True)
plt.show()
sns.heatmap(correlacaoSpearman,cmap="Reds", annot=True)
plt.show()



import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt

from scipy.stats import pearsonr, spearmanr, kendalltau

data = pd.DataFrame(
    {
    "Aluno":["A1","A2","A3","A4","A5","A6","A7","A8","A9","A10"],
    "Horas de Estudo":[2,4,6,8,10,12,14,16,18,20],
    "Nota no Exame":[10,12,15,17,19,20,20, 18,19,15],
    "satisfacao Ordinal ":[5,6,7,8,9,10,10,9,8,7],
}
    )

correlacao =data.corr(numeric_only=True)


print("Matriz de correlação das variaveis  numericas", correlacao)

sns.heatmap(correlacao,cmap="Reds", annot=True)



