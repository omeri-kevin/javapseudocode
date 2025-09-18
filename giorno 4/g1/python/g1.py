numeri = []
x = int(input("Numero elementi: "))
for i in range(x):
    numero = int(input(f"Inserisci il numero {i+1}: "))
    numeri.append(numero)

numeri2 = []
for i in range(1, len(numeri)+1):
    numeri2.append(numeri[-i])

print("Array al contrario:", numeri2)