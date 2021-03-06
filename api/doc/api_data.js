define({ "api": [
  {
    "group": "Carte",
    "name": "creerCarte",
    "version": "0.1.0",
    "type": "post",
    "url": "/carte",
    "title": "crée une nouvelle carte de fidélité",
    "description": "<p>Crée une carte de fidélité avec le mot de passe spécifié. Retourne son identifiant</p> <p>Le crédit lors de la création est de 0 €</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>JSON des données servant à la création de la carte (Exemple : { &quot;motDePasse&quot; : &quot;azerty&quot; })</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la carte de fidélité</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n\t{\n\t\t\"id\": 1\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Pas de données comportant les informations afin de créer la carte de fidélité.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\": \"pas de données : http://localhost/LeBonSandwichEnLigne/api/carte\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"veuillez spécifier un mot de passe pour cette carte de fidélité : http://localhost/LeBonSandwichEnLigne/api/carte\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Carte"
  },
  {
    "group": "Carte",
    "name": "lireCarte",
    "version": "0.1.0",
    "type": "post",
    "url": "/carte/id",
    "title": "Lit une carte de fidélité",
    "description": "<p>Renvoit un token à usage unique ainsi que le montant</p> <p>le mot de passe stocké et le mot de passe envoyé doivent correspondre</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la carte de fidélité</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>JSON des données servant à la lecture de la carte (Exemple : { &quot;motDePasse&quot; : &quot;azerty&quot; })</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la carte de fidélité</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token unique généré</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "credit",
            "description": "<p>Crédit de la carte de fidélité</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n\t{\n\t\t\"id\": 1,\n\t\t\"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9\",\n\t\t\"credit\": 10\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Pas de données comportant les informations afin de créer la carte de fidélité.</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>La carte n'existe pas.</p>"
          }
        ],
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "error",
            "description": "<p>Le mot de passe entré de la carte est incorrect.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\": \"pas de données : http://localhost/LeBonSandwichEnLigne/api/carte/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"veuillez spécifier un mot de passe pour cette carte de fidélité : http://localhost/LeBonSandwichEnLigne/api/carte/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"Ressource non trouvée : http://localhost/LeBonSandwichEnLigne/api/carte/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais mot de passe : http://localhost/LeBonSandwichEnLigne/api/carte/1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Carte"
  },
  {
    "group": "Carte",
    "name": "payerCarte",
    "version": "0.1.0",
    "type": "get",
    "url": "/carte",
    "title": "paye une commande en utilisant une carte de fidélité",
    "description": "<p>Renvoit la commande avec le montant réduit si tel est le cas</p> <p>Le token de la carte doit être fourni (en GET) ainsi que celui de la commande (en GET aussi) Si montant atteint &gt; 100 € =&gt; réduction de 5% accordée sur la commande et montant remis à 0 Une fois payé, on remet le token à null</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la carte de fidélité</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>JSON des données servant à la lecture de la carte (Exemple : { &quot;motDePasse&quot; : &quot;azerty&quot; })</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la carte de fidélité</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token unique généré</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "credit",
            "description": "<p>Crédit de la carte de fidélité</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n\t{\n\t\t\"commande\": {\n   \t\t\"id\": 1,\n   \t\t\"dateretrait\": \"2017-12-12\",\n   \t\t\"etat\": 1,\n   \t\t\"token\": \"174086\",\n   \t\t\"montant\": 5\n \t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 401": [
          {
            "group": "Erreur : 401",
            "optional": false,
            "field": "error",
            "description": "<p>Token de la commande et/ou de la carte manquant.</p>"
          }
        ],
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "error",
            "description": "<p>Mauvais token de commande.</p>"
          }
        ],
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>La commande est déjà payée.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n  \"error\" : \"token de carte fidélité et de commande exigé : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/carte\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token de commande : http://localhost/LeBonSandwichEnLigne/api/carte\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token de carte : http://localhost/LeBonSandwichEnLigne/api/carte\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"la commande est déjà payée : http://localhost/LeBonSandwichEnLigne/api/carte/1\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Carte"
  },
  {
    "group": "Categories",
    "name": "detailsCategorie",
    "version": "0.1.0",
    "type": "get",
    "url": "/categories/id",
    "title": "accès à une ressource catégorie",
    "description": "<p>Accès à une ressource de type catégorie permet d'accéder à la représentation de la ressource categorie désignée. Retourne une représentation json de la ressource.</p> <p>Le résultat inclut un lien pour accéder à la liste des ingrédients de cette catégorie ainsi qu'un autre lien pour voir toutes les catégories.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la catégorie</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>Nom de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "all",
            "description": "<p>Lien vers la de toutes les catégories</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "ingredients",
            "description": "<p>Lien vers la liste d'ingrédients de la catégorie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 200 OK\n\n{\n   categorie : {\n       \"id\"  : 4 ,\n       \"nom\" : \"crudités\",\n       \"description\" : \"nos salades et crudités fraiches et bio.\"\n   },\n   links : {\n       \"all\" : { \"href\" : \"/categories\" },\n       \"ingredients\" : { \"href\" : \"/categories/4/ingredients\" }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>Categorie inexistante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"ressource not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Categories"
  },
  {
    "group": "Categories",
    "name": "detailsIngredient",
    "version": "0.1.0",
    "type": "get",
    "url": "/categories/id",
    "title": "accès à une ressource ingrédient",
    "description": "<p>Accès à une ressource de type ingrédient permet d'accéder à la représentation de la ressource ingrédient désignée. Retourne une représentation json de la ressource.</p> <p>Le résultat inclut un lien pour accéder à la liste des ingrédients de cette catégorie ainsi qu'un autre lien pour voir toutes les catégories.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la catégorie</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>Nom de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "all",
            "description": "<p>Lien vers la liste de toutes les catégories</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "ingredients",
            "description": "<p>Lien vers la liste d'ingrédients de la catégorie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 200 OK\n\n{\n   categorie : {\n       \"id\"  : 4 ,\n       \"nom\" : \"crudités\",\n       \"description\" : \"nos salades et crudités fraiches et bio.\"\n   },\n   links : {\n       \"all\" : { \"href\" : \"/categories\" },\n       \"ingredients\" : { \"href\" : \"/categories/4/ingredients\" }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>Categorie inexistante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"ressource not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Categories"
  },
  {
    "group": "Categories",
    "name": "toutesCategories",
    "version": "0.1.0",
    "type": "get",
    "url": "/categories",
    "title": "accès à toutes les ressources catégories",
    "description": "<p>Accès à toutes les ressources de type catégorie. Retourne une représentation json.</p>",
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Array",
            "optional": false,
            "field": "categories",
            "description": "<p>Toutes les catégories</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>Nom de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la catégorie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n    {\n       \"categories\" : [\n\t\t\t{\n           \t\"id\"  : 4 ,\n           \t\"nom\" : \"crudités\",\n           \t\"description\" : \"nos salades et crudités fraiches et bio.\"\n\t\t\t},\n\t\t\t{\n\t\t\t\t\"id\"  : 5 ,\n           \t\"nom\" : \"Sauces\",\n           \t\"description\" : \"Toutes les sauces du monde !\"\n\t\t\t}\n       ]\n    }",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Categories"
  },
  {
    "group": "Commandes",
    "name": "ajouterSandwich",
    "version": "0.1.0",
    "type": "post",
    "url": "/commandes/id/sandwichs",
    "title": "ajouter un sandwich à une commande précise",
    "description": "<p>Créer une ressource sandwich et l'associe à une commande. Retourne l'id du sandwich créé.</p> <p>Le résultat inclut un lien pour accéder aux détails de la commande créee ainsi qu'un lien pour supprimer le sandwich.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>JSON des données servant à la création du sandwich (Exemple : { &quot;taillepain&quot; : 1 , &quot;typepain&quot; : 1 , &quot;ingredients&quot; : [1, 3, 4, 9] })</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token généré identifiant la commande (Exemple : 8x936gi2o18uwecfk5vvqwwv3fhya8f1)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 201": [
          {
            "group": "Succès : 201",
            "type": "Number",
            "optional": false,
            "field": "sandwich",
            "description": "<p>Identifiant du sandwich créé</p>"
          },
          {
            "group": "Succès : 201",
            "type": "Link",
            "optional": false,
            "field": "view",
            "description": "<p>Lien vers les détails de la commande du sandwich et pour supprimer le sandwich.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 201 OK\n\n    {\n       sandwich :\n           1\n       ,\n       links : {\n           \"details\" : { \"href\" : \"/commandes/1\" },\n\t\t\t  \"delete\" : { \"href\" : \"/sandwichs/1\" }\n       }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Données manquantes ou incorrectes pour créer le sandwich.</p>"
          }
        ],
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "error",
            "description": "<p>La commande n'est plus modifiable en raison de son état.</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>La commande n'existe pas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"données manquantes ou incorrectes pour la création de la commande : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1/sandwichs\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"vous n\\'êtes pas autorisé à modifier cette commande en raison de son état : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1/sandwichs\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1/sandwichs\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"token exigé : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1/sandwichs\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"commande inexistante : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1/sandwichs\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Commandes"
  },
  {
    "group": "Commandes",
    "name": "creerCommande",
    "version": "0.1.0",
    "type": "post",
    "url": "/commandes",
    "title": "créer une ressource commande",
    "description": "<p>Créer une ressource commande. Retourne un token servant à identifier l'utilisateur ayant créé la commande ainsi que l'identifiant de la commande.</p> <p>Le résultat inclut un lien pour accéder aux détails de la commande créee</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>JSON des données servant à la création de la commande (Exemple : { &quot;dateretrait&quot; : &quot;2000-01-01&quot; , &quot;montant&quot; : 10 })</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 201": [
          {
            "group": "Succès : 201",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token d'identification de l'utilisateur ayant créé la commande</p>"
          },
          {
            "group": "Succès : 201",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la commande</p>"
          },
          {
            "group": "Succès : 201",
            "type": "Link",
            "optional": false,
            "field": "view",
            "description": "<p>Lien vers les détails de la commande qui a été créee</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 200 OK\n\n{\n   commande : {\n       \"token\"  : \"xal0810z9u6dz7xowtkyt5yl1p3sfny3\" ,\n       \"id\" : 1\n   },\n   links : {\n       \"view\" : { \"href\" : \"/commandes/1\" }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Données manquantes ou incorrectes pour créer la commande.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"données manquantes ou incorrectes pour la création de la commande : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Commandes"
  },
  {
    "group": "Commandes",
    "name": "dateCommande",
    "version": "0.1.0",
    "type": "post",
    "url": "/commandes/id/date",
    "title": "modifie la date de retrait d'une commande",
    "description": "<p>La modification est possible uniquement si la date est ultérieure à aujourd'hui. Retourne une représentation json de la commande.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la commande</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token généré identifiant la commande (Exemple : 8x936gi2o18uwecfk5vvqwwv3fhya8f1)</p>"
          },
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date de retrait (dans un format accepté par la fonction strtotime(), par exemple aaaa-mm-dd)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la commande</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Date",
            "optional": false,
            "field": "dateretrait",
            "description": "<p>Date de retrait</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "etat",
            "description": "<p>Etat de la commande</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de la commande</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "montant",
            "description": "<p>Montant de la commande</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n\t{\n\t\t\"commande\": {\n   \t\t\"id\": 1,\n   \t\t\"dateretrait\": \"2017-12-12\",\n   \t\t\"etat\": 1,\n   \t\t\"token\": \"174086\",\n   \t\t\"montant\": 0\n \t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 401": [
          {
            "group": "Erreur : 401",
            "optional": false,
            "field": "error",
            "description": "<p>Token exigé</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>Commande inexistante</p>"
          }
        ],
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "error",
            "description": "<p>Mauvais token</p>"
          }
        ],
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Date incorrecte</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n  \"error\" : \"token exigé : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1/2017-01-01\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"ressource non trouvée : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1/2017-01-01?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1/2017-01-01?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Date incorrecte : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1/2017-01-01?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Date dépassée : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1/2017-01-01?token=174086\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Commandes"
  },
  {
    "group": "Commandes",
    "name": "etatCommande",
    "version": "0.1.0",
    "type": "get",
    "url": "/commandes/id",
    "title": "retourne l'état d'une commande",
    "description": "<p>Retourne une représentation json de la commande.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la commande</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token généré identifiant la commande (Exemple : 8x936gi2o18uwecfk5vvqwwv3fhya8f1)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la commande</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Date",
            "optional": false,
            "field": "dateretrait",
            "description": "<p>Date de retrait</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "etat",
            "description": "<p>Etat de la commande (1=créée, 2=payée, 3=en cours, 4=prête, 5=livrée)</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de la commande</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "montant",
            "description": "<p>Montant de la commande</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n\t{\n\t\t\"commande\": {\n   \t\t\"id\": 1,\n   \t\t\"dateretrait\": \"2017-12-12\",\n   \t\t\"etat\": 1,\n   \t\t\"token\": \"174086\",\n   \t\t\"montant\": 0\n \t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 401": [
          {
            "group": "Erreur : 401",
            "optional": false,
            "field": "error",
            "description": "<p>Token exigé</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>Commande inexistante</p>"
          }
        ],
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "error",
            "description": "<p>Mauvais token</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n  \"error\" : \"token exigé : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"ressource non trouvée : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Commandes"
  },
  {
    "group": "Commandes",
    "name": "payerCommande",
    "version": "0.1.0",
    "type": "post",
    "url": "/commandes/id",
    "title": "paye une commande",
    "description": "<p>Transmet les informations bancaires et retourne une représentation json de la commande.</p> <p>Seules les cartes Mastercard et Visa sont supportées !</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la commande</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token généré identifiant la commande (Exemple : 8x936gi2o18uwecfk5vvqwwv3fhya8f1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>JSON des données servant au paiement de la commande (Exemple : { &quot;typecarte&quot; : &quot;mastercard&quot; , &quot;numero&quot; : &quot;5442 3811 6727 0320&quot; , &quot;expire&quot; : &quot;3/2020&quot;, &quot;code&quot; : &quot;157&quot; })</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la commande</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Date",
            "optional": false,
            "field": "dateretrait",
            "description": "<p>Date de retrait</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "etat",
            "description": "<p>Etat de la commande (1=créée, 2=payée, 3=en cours, 4=prête, 5=livrée)</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token de la commande</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "montant",
            "description": "<p>Montant de la commande</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n\t{\n\t\t\"commande\": {\n   \t\t\"id\": 1,\n   \t\t\"dateretrait\": \"2017-12-12\",\n   \t\t\"etat\": 1,\n   \t\t\"token\": \"174086\",\n   \t\t\"montant\": 0\n \t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 401": [
          {
            "group": "Erreur : 401",
            "optional": false,
            "field": "error",
            "description": "<p>Token exigé</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>Commande inexistante</p>"
          }
        ],
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "error",
            "description": "<p>Mauvais token</p>"
          }
        ],
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Pas de données transmises (données bancaires)</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n  \"error\" : \"token exigé : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"ressource non trouvée : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"pas de données : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"commande déjà traitée : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"type de carte non supporté : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"numéro de carte incorrect : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"carte expirée : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"code incorrect : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"données bancaires incomplètes : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/commandes/1?token=174086\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Commandes"
  },
  {
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "optional": false,
            "field": "varname1",
            "description": "<p>No type.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "varname2",
            "description": "<p>With type.</p>"
          }
        ]
      }
    },
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "./doc_old/main.js",
    "group": "D__Wamp_www_lbs_publique_LeBonSandwichEnLigne_api_doc_old_main_js",
    "groupTitle": "D__Wamp_www_lbs_publique_LeBonSandwichEnLigne_api_doc_old_main_js",
    "name": ""
  },
  {
    "group": "Ingredients",
    "name": "categorieIngredient",
    "version": "0.1.0",
    "type": "get",
    "url": "/ingredients/id/categorie",
    "title": "accès à une ressource catégorie d'un ingrédient",
    "description": "<p>Accès à une ressource de type catégorie d'un ingrédient particulier. Retourne une représentation json de la ressource.</p> <p>Le résultat inclut un lien pour accéder aux détails de l'ingrédient</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de l'ingredient</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>Nom de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "details",
            "description": "<p>Lien vers les détails de l'ingrédient</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n    {\n       categorie : {\n\t\t\t[\n           \"id\"  : 1 ,\n           \"nom\" : \"salades\",\n           \"description\" : \"Nos bonnes salades, fraichement livr\\u00e9es par nos producteurs bios et locaux\"\n\t\t\t]\n       },\n       links : {\n           \"details\" : { \"href\" : \"/ingredients/3\" }\n       }\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>Ingrédient inexistant</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"ressource not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Ingredients"
  },
  {
    "group": "Ingredients",
    "name": "detailsIngredient",
    "version": "0.1.0",
    "type": "get",
    "url": "/categories/id",
    "title": "accès à une ressource ingrédient",
    "description": "<p>Accès à une ressource de type ingrédient permet d'accéder à la représentation de la ressource ingrédient désignée. Retourne une représentation json de la ressource.</p> <p>Le résultat inclut un lien pour accéder à la liste des ingrédients de cette catégorie ainsi qu'un autre lien pour voir toutes les catégories.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la catégorie</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Identifiant de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "nom",
            "description": "<p>Nom de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description de la catégorie</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "all",
            "description": "<p>Lien vers la de toutes les catégories</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "ingredients",
            "description": "<p>Lien vers la liste d'ingrédients de la catégorie</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 200 OK\n\n{\n   categorie : {\n       \"id\"  : 4 ,\n       \"nom\" : \"crudités\",\n       \"description\" : \"nos salades et crudités fraiches et bio.\"\n   },\n   links : {\n       \"all\" : { \"href\" : \"/categories\" },\n       \"ingredients\" : { \"href\" : \"/categories/4/ingredients\" }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>Categorie inexistante</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"ressource not found\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Ingredients"
  },
  {
    "group": "Sandwichs",
    "name": "getCommande",
    "version": "0.1.0",
    "type": "get",
    "url": "/commandes/id",
    "title": "",
    "description": "<p>Obtient une ressource commande selon l'id saisie. Si l'état de la commande est 4, elle renvoie les informations de la commande (Numéro de la facture, date de retrait de la commande, le nombre de sandwich et le montant de la commande). Si l'état de la commande n'est pas 4, elle ne renvoie rien.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "json",
            "description": "<p>JSON des données de facturation (Exemple : { &quot;DetailsCommande&quot;: {&quot;NombreSandwich&quot;: &quot;'.$sand-&gt;count().'&quot;, &quot;Sandwichs&quot;: [{ &quot;Taille&quot; : &quot;'.$taille-&gt;nom.'&quot; , &quot;TypePain&quot; : &quot;' .$s-&gt;typepain. '&quot; , &quot;Prix&quot; : &quot;'.$taille-&gt;prix.'&quot; }] } }).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Json",
            "optional": false,
            "field": "json",
            "description": "<p>facture.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n{\n\t\t\"DetailsCommande\":\n\t\t\t{\n\t\t\t\"NombreSandwich\": 2,\n\t\t\t\"Sandwichs\": \"[\n\t\t\t\t{\"Taille : \"ogre\", \"TypePain : \"2\", \"Prix\" : 3,00},\n\t\t\t\t{\"Taille : \"Petite Faim\", \"TypePain : \"1\", \"Prix\" : 1,00}\n\t\t\t]\",\n\t\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Token incorrect : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getCommande/1</p>"
          }
        ],
        "Erreur : 401": [
          {
            "group": "Erreur : 401",
            "optional": false,
            "field": "error",
            "description": "<p>Token de la commande manquant : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getCommande/1</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "Commande",
            "description": "<p>inexistante ou vide. HTTP/1.1 404 Not Found</p> <pre><code>{   &quot;error&quot; : &quot;Commande inexistante ou vide : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getCommande/1&quot; }</code></pre>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Token incorrect : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getCommande/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Token manquant : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getCommande/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n  \"error\" : \"token exigé : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getCommande/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token : http://localhost/LeBonSandwichEnLigne/api/getCommande/1?token=174086\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Sandwichs"
  },
  {
    "group": "Sandwichs",
    "name": "getFacture",
    "version": "0.1.0",
    "type": "get",
    "url": "/commandes/id/facture",
    "title": "",
    "description": "<p>Obtient une ressource commande selon l'id saisie. Si l'état de la commande est 4, elle renvoie les informations de la commande (Numéro de la facture, date de retrait de la commande, le nombre de sandwich et le montant de la commande). Si l'état de la commande n'est pas 4, elle ne renvoie rien.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "json",
            "description": "<p>JSON des données de facturation (Exemple : { &quot;Facture&quot;: {&quot;Numero&quot;: &quot;'.$q-&gt;id.'&quot;, &quot;DateRetrait&quot;: &quot;'.$q-&gt;dateretrait.'&quot;, &quot;NombreSandwich&quot;: &quot;'.$totalCount.'&quot;, &quot;MontantSandwich&quot;: &quot;'.$q-&gt;montant.'&quot; } }).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Json",
            "optional": false,
            "field": "json",
            "description": "<p>facture.$_COOKIE</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n{\n\t\t\"Facture\":\n\t\t\t{\n\t\t\t\"Numero\": 12,\n\t\t\t\"DateRetrait\": \"28/06/2017\",\n\t\t\t\"NombreSandwich\": 8,\n\t\t\t\"MontantSandwich\": 25\n\t\t\t}\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Token incorrect : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getFacture/1</p>"
          }
        ],
        "Erreur : 401": [
          {
            "group": "Erreur : 401",
            "optional": false,
            "field": "error",
            "description": "<p>Token de la commande manquant : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getFacture/1</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "Commande",
            "description": "<p>inexistante ou vide. HTTP/1.1 404 Not Found</p> <pre><code>{   &quot;error&quot; : &quot;Commande inexistante ou vide&quot; }</code></pre>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Token incorrect : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getFacture/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Token manquant : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getFacture/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n  \"error\" : \"token exigé : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/getFacture/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token : http://localhost/LeBonSandwichEnLigne/api/getFacture/1?token=174086\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Sandwichs"
  },
  {
    "group": "Sandwichs",
    "name": "modifierSandwich",
    "version": "0.1.0",
    "type": "post",
    "url": "/sandwichs/id",
    "title": "modifie un sandwich",
    "description": "<p>Modifie une ressource sandwich associée à une commande. Retourne le sandwich</p> <p>Si l'état est à 1 (commande créée), on peut modifier le sandwich de A à Z (type pain + ingrédients + taille pain) Si l'état est à 2 (commande payée), on peut modifier le sandwich à coût constant (type pain + ingrédients) Sinon, modification impossible</p> <p>Le résultat inclut un lien pour accéder aux détails de la commande et un lien pour supprimer le sandwich.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token généré identifiant la commande (Exemple : 8x936gi2o18uwecfk5vvqwwv3fhya8f1)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "json",
            "description": "<p>JSON des données servant à la modification du sandwich (Exemple : { &quot;taillepain&quot; : 1 , &quot;typepain&quot; : 1 , &quot;ingredients&quot; : [1, 3, 4, 9] })</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "sandwich",
            "description": "<p>Identifiant du sandwich</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "details",
            "description": "<p>Lien vers les détails de la commande du sandwich modifié.</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "delete",
            "description": "<p>Lien pour supprimer sandwich modifié.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "    HTTP/1.1 200 OK\n\n\t{\n\t\t\"sandwich\": 1,\n\t\t\"links\": {\n\t\t\t\"details\": {\n\t\t\t\t\"href\": \"/commandes/174086\"\n\t\t\t},\n\t\t\t\"delete\": {\n\t\t\t\t\"href\": \"/sandwichs/1\"\n\t\t\t}\n\t\t}\n\t}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 401": [
          {
            "group": "Erreur : 401",
            "optional": false,
            "field": "error",
            "description": "<p>Token de la commande manquant.</p>"
          }
        ],
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Pas de données comportant les informations afin de modifier un sandwich.</p>"
          }
        ],
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "error",
            "description": "<p>Le token de la commande entré est incorrect.</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>Le sandwich n'existe pas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n  \"error\" : \"token exigé : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/sandwichs/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\": \"pas de données : http://localhost/LeBonSandwichEnLigne/api/sandwichs/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token : http://localhost/LeBonSandwichEnLigne/api/sandwichs/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"sandwich inexistant : http://localhost/LeBonSandwichEnLigne/api/sandwichs/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"mauvais id : http://localhost/LeBonSandwichEnLigne/api/sandwichs/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"commande déjà traitée : http://localhost/LeBonSandwichEnLigne/api/sandwichs/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"la donnée ingrédient n'est pas un tableau : http://localhost/LeBonSandwichEnLigne/api/sandwichs/1?token=174086\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Sandwichs"
  },
  {
    "group": "Sandwichs",
    "name": "suppCommande",
    "version": "0.1.0",
    "type": "delete",
    "url": "/commandes/id",
    "title": "",
    "description": "<p>Supprime une ressource commande selon l'id saisie. Si l'état de la commande est 1, elle supprime commande. Si l'état de la commande n'est pas 1, elle ne supprime rien.</p>",
    "success": {
      "fields": {
        "Succès : 201": [
          {
            "group": "Succès : 201",
            "type": "Json",
            "optional": false,
            "field": "json",
            "description": "<p>facture.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 201 OK\n\n{\n  \"error\" : \"Commande  supprime avec succes : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/suppCommande/1\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 400": [
          {
            "group": "Erreur : 400",
            "optional": false,
            "field": "error",
            "description": "<p>Token incorrect : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/suppCommande/1</p>"
          }
        ],
        "Erreur : 401": [
          {
            "group": "Erreur : 401",
            "optional": false,
            "field": "error",
            "description": "<p>Token de la commande manquant : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/suppCommande/1</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "Commande",
            "description": "<p>inexistante ou vide. HTTP/1.1 404 Not Found</p> <pre><code>{   &quot;error&quot; : &quot;Commande inexistante ou vide : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/suppCommande/1&quot;&quot; }</code></pre>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Token incorrect : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/suppCommande/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 400 Bad Request\n\n{\n  \"error\" : \"Token manquant : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/suppCommande/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 401 Unauthorized\n\n{\n  \"error\" : \"token exigé : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/suppCommande/1\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token : http://localhost/LeBonSandwichEnLigne/api/getFacture/1?token=174086\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"Impossible  de supprimer la commande car l'etat est 2 : http://localhost/LeBonSandwichEnLigne/api/getFacture/1?token=174086\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Sandwichs"
  },
  {
    "group": "Sandwichs",
    "name": "supprimerSandwich",
    "version": "0.1.0",
    "type": "delete",
    "url": "/sandwichs/id",
    "title": "supprime un sandwich",
    "description": "<p>Créer une ressource sandwich et l'associe à une commande. Retourne l'id de la commande.</p> <p>Le résultat inclut un lien pour accéder aux détails de la commande.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>Token généré identifiant la commande (Exemple : 8x936gi2o18uwecfk5vvqwwv3fhya8f1)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Succès : 200": [
          {
            "group": "Succès : 200",
            "type": "Number",
            "optional": false,
            "field": "commande",
            "description": "<p>Identifiant de la commande</p>"
          },
          {
            "group": "Succès : 200",
            "type": "Link",
            "optional": false,
            "field": "view",
            "description": "<p>Lien vers les détails de la commande du sandwich supprimé.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas de succès",
          "content": "HTTP/1.1 200 OK\n\n{\n   commande :\n       1\n   ,\n   links : {\n       \"view\" : { \"href\" : \"/commandes/1\" }\n   }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Erreur : 403": [
          {
            "group": "Erreur : 403",
            "optional": false,
            "field": "error",
            "description": "<p>La commande n'est plus modifiable en raison de son état.</p>"
          }
        ],
        "Erreur : 404": [
          {
            "group": "Erreur : 404",
            "optional": false,
            "field": "error",
            "description": "<p>Le sandwich n'existe pas.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"impossible de modifier la commande : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/sandwichs/2\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"mauvais token : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/sandwichs/2\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 403 Forbidden\n\n{\n  \"error\" : \"token exigé : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/sandwichs/2\"\n}",
          "type": "json"
        },
        {
          "title": "exemple de réponse en cas d'erreur",
          "content": "HTTP/1.1 404 Not Found\n\n{\n  \"error\" : \"sandwich inexistant : http://localhost/lbs/publique/LeBonSandwichEnLigne/api/sandwichs/2\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "./api.php",
    "groupTitle": "Sandwichs"
  }
] });
