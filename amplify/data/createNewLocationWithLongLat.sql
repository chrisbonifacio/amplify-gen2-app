INSERT INTO locations (id, name, address, geom)
VALUES (:id, :name, :address, ST_SetSRID(ST_MakePoint(:long, :lat), 4326))