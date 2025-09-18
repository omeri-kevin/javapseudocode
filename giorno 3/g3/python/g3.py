somma = 0
numeri = []
x = int(input("Inserire numero di elementi della lista: "))
for i in range(x):
    numero = int(input(f"Inserisci il numero {i+1}: "))
    numeri.append(numero)
if numeri[-1] == 0:
    for n in numeri:
        somma += n
    media = somma / len(numeri)
    print(f"La media è: {media}")
else:
    print("Sequenza non termina con 0")