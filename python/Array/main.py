from functools import reduce

numbers=[1,2,3,4,5,6,7,8,9,10]

pares_numbers= list(filter(lambda number : number%2==0 ,numbers))

print(pares_numbers)

quadrado_numbers=list(map(lambda number: number**2,numbers))
print(quadrado_numbers)

soma_numbers=reduce(lambda n1,n2: n1+n2,numbers )
print(soma_numbers)