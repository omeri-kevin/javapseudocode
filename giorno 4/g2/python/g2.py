anno = int(input("Scrivi l'anno: "))
if (anno % 4 == 0 and anno % 100 != 0) or (anno % 400 == 0):
    print(f"{anno} è BISISTILE")