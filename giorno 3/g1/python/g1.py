x = int(input("Scrivi un numero: "))
fattoriale = 1
for i in range(1, x + 1):
    fattoriale *= i
print(f"Il fattoriale di {x} è {fattoriale}")