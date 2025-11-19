def count_pokemons(movimentos):
    x,y= 0,0
    
    visitados=set()
    visitados.add((x,y))
    pokemons_apanhados=1
    
    
    direcoes ={
        'N':(0,1),
        'S':(0,-1),
        'E':(1,0),
        'O':(-1,0)
        
    }
    for movimento in movimentos:
        dx,dy=direcoes[movimento]
        x+=dx
        y+=dy
        
        if(x,y) not in visitados:
            pokemons_apanhados +=1
            visitados.add(x,y)
            
            return pokemons_apanhados
        
        movimentos = input().strip()
        
        
        print(contar_pokemons(movimentos))
