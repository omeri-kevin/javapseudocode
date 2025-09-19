# Trova il valore minimo e massimo in un array

# inizializza array "array"
array = []

# assegna a variabile x input utente per numero di elementi di cui l'array deve essere composto
x = int(input("Quanti elementi vuoi inserire nell'array? "))

# for itera per x volte input che riempie vettore con numero scelto da utente
for _ in range(x):
    numero = int(input("Inserisci un numero: "))
    array.append(numero)

# inizializza variabile max
# inizializza variabile min
max_val = array[0]
min_val = array[0]

# for che scorre array:
for i in array:
    # se i è maggiore di max allora max=i
    if i > max_val:
        max_val = i
    # se i è minore di min allora min=i
    if i < min_val:
        min_val = i

# stampa max
print("Il valore massimo è:", max_val)
# stampa min
print("Il valore minimo è:", min_val)