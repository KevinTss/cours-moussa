##`Gerer login/logout`
 -> afficher if Auth  --> comment savoir via token présent ds storage 
mais s'il n'est plus valide il ne verra pas login? 

##`Affichage avatar` 
pour ne pas dupliquer le chargement dans chaque component

## `Middleware`
On peut gérer des regles avant d'aller dans une route? 
Ex: si le user vas sur une route qui demande une auth,
s'il ne l'es pas redirect vers login gérer ce cas une fois pour toutes les routes
, ne pas dupliquer le code. 

## `Utiliser un component`
