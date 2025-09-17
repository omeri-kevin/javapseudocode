a = 0
b = 0
c = 0
a = int(input("Metti 1 numero: "))
b = int(input("Metti 1 numero: "))
c = int(input("Metti 1 numero: "))

if a > b and a > c:
    print(f"{a} è il numero più grande")
if b > c and b > a:
    print(f"{b} è il numero più grande")
if c > b and c > a:
    print(f"{c} è il numero più grande")