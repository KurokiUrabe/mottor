FROM mongo

COPY init.json /init.json
# # CMD mongoimport --host kraftfahrzeugdb --db reach-engine --collection Kraftfahrzeug --type json --file init.json --jsonArray
CMD mongoimport --host mongodb --db kraftfahrzeugdb --collection Kraftfahrzeug --type json --file /init.json --jsonArray