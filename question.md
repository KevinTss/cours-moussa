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

## `Login dans modal`
Garder tout pareil et en plus d'avoir la possibilité de le faire depuis la page
login, avoir la possibilité de se logger depuis un modal,
faudrait il tt mettre la logique dans action ?? 

## `Pagination`
gérer les paginations

## `Picture GET => OK`
Comment récuperer/ afficher une image depuis url

## TESTER MODEL_cars for announce
#### `GET /api/brand_cars/{id}/model_cars`
On peut tester avec brandId=27

*selectionner l'élement option pour utiliser la valeur => TODO: 1

## `EDIT Announce` 
Comment faire? peut on garder le meme component que new announce et selected la data reçu? 
En metttant un if? ou il faut recommencer (dupliquer le html)


## `CREATE ANNOUNCE`
1) depuis mes vehicules (GET: /users/{user}/owner_vehicles')
2) depuis zéro => créer mon vehicule (POST: /owner_vehicles)
et instantanément récupérer le owner_vehicle_id (qui vient d'être créé dans response succes)
    pour créer une annonce (POST: /announce_cars)
 
    
#### Required owner_vehicle:
'owner_vehicle_id', 
'user_created_by_id', 
'vehicle_deductible_vat', 
'cat_product_id' = 1 (cars)


#### Required announces: 
'owner_vehicle_id', 
'user_created_by_id', 
'vehicle_deductible_vat'