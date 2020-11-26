from math import *
from matplotlib.pyplot import*

a = float(input("Entrez votre age :"))
p = float(input ("Entrez votre poid en kg :"))
t = float(input("entrez votre taille en cm :"))
s = input("Entrez homme ou femme :")
ap = input("Activité physique oui ou non :")

if s =="homme" :
    s = 100
else:
    s=50
    
if ap =="oui":
    ap = 100
else :
    ap = 25
    
#l'age du combattant 
m = (-(a*a)+(50*a))/6.25

#la taille du combattant
n = 12.5*(log(t-120))

#le poid du combattant
o = (-(p*p)+(160*p))/64

#attributions des coefficients aux variables
x = ((100*s)+(80*o)+(60*n)+(40*ap)+(20*m))/300

#élargi la plage de valeurs de x
h = ((x*100)-5000)/45

#renvoie le résultat
if x<=0 :
    print("Votre pourcentage de chance de tenir 30 secondes dans une cage face a McGregor est",0)
else:
    print("Votre pourcentage de chance de tenir 30 secondes dans une cage face à McGregor est",h)

