while True:
    print("SCEGLI UN'OPZIONE tra 1, 2, 3")
    print("0 PER uscire")
    scelta = input("Inserisci la tua scelta: ")
    if scelta == "1":
        print("OPZIONE1")
    elif scelta == "2":
        print("OPZIONE2")
    elif scelta == "3":
        print("OPZIONE3")
    elif scelta == "0":
        print("uscita in corso")
        break
    else:
        print("scelta non valida")