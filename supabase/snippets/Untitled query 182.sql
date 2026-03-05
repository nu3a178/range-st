CREATE INDEX properties_geom_idx ON properties USING GIST (geom);
