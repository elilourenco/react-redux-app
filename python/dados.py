def gerador_numeros(limite):
    index=0
    while index < limite:
        if index %2 ==0:
        index +=1
        
    index += 1
    yield index *2    
for numero in gerador_numeros(20):
    print(numero)
    

    
    