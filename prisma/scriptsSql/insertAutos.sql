INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Renault', 'Kwid', 2019, 0,
  0,
  false, 'Nafta',
  '/autos/1.jpeg',
  ARRAY['/autos/1.jpeg', '/autos/1_2.jpeg', '/autos/1_3.jpeg', '/autos/1_4.jpeg'],
  '{"motor": "1.0L 3 cil. 12V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO001"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Zen.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Ford', 'S-Max', 2013, 0,
  0,
  false, 'Nafta',
  '/autos/2.jpeg',
  ARRAY['/autos/2.jpeg', '/autos/2_2.jpeg', '/autos/2_3.jpeg', '/autos/2_4.jpeg'],
  '{"motor": "2.0L 4 cil. 16V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO002"}'::jsonb,
  ARRAY['Aire acondicionado', 'Sensores de estacionamiento', 'Control de estabilidad', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Trend.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Fiat', 'Cronos', 2023, 0,
  0,
  false, 'Nafta',
  '/autos/3.jpeg',
  ARRAY['/autos/3.jpeg', '/autos/3_2.jpeg', '/autos/3_3.jpeg', '/autos/3_4.jpeg'],
  '{"motor": "1.3L 4 cil. 8V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO003"}'::jsonb,
  ARRAY['Aire acondicionado', 'Pantalla multimedia', 'Cámara de retroceso', 'Sensores de estacionamiento', 'Control de estabilidad', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Style.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Fiat', 'Idea', 2015, 0,
  0,
  false, 'Nafta',
  '/autos/4.jpeg',
  ARRAY['/autos/4.jpeg', '/autos/4_2.jpeg', '/autos/4_3.jpeg', '/autos/4_4.jpeg'],
  '{"motor": "1.6L 4 cil. 16V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO004"}'::jsonb,
  ARRAY['Aire acondicionado', 'Sensores de estacionamiento', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Adventure.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Renault', 'Kangoo', 2015, 0,
  0,
  false, 'Nafta',
  '/autos/5.jpeg',
  ARRAY['/autos/5.jpeg', '/autos/5_2.jpeg', '/autos/5_3.jpeg', '/autos/5_4.jpeg'],
  '{"motor": "1.6L 4 cil. 16V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO005"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Confort.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Renault', 'Clio Mío', 2013, 0,
  0,
  false, 'Nafta',
  '/autos/6.jpeg',
  ARRAY['/autos/6.jpeg', '/autos/6_2.jpeg', '/autos/6_3.jpeg', '/autos/6_4.jpeg'],
  '{"motor": "1.2L 4 cil. 16V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO006"}'::jsonb,
  ARRAY['Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Expression.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Ford', 'EcoSport', 2015, 0,
  0,
  false, 'Nafta',
  '/autos/7.jpeg',
  ARRAY['/autos/7.jpeg', '/autos/7_2.jpeg', '/autos/7_3.jpeg', '/autos/7_4.jpeg'],
  '{"motor": "1.6L 4 cil. 16V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO007"}'::jsonb,
  ARRAY['Aire acondicionado', 'Control de estabilidad', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión SE 1.6.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Fiat', 'Cronos', 2022, 0,
  0,
  false, 'Nafta',
  '/autos/8.jpeg',
  ARRAY['/autos/8.jpeg', '/autos/8_2.jpeg', '/autos/8_3.jpeg', '/autos/8_4.jpeg'],
  '{"motor": "1.3L 4 cil. 8V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO008"}'::jsonb,
  ARRAY['Aire acondicionado', 'Control de estabilidad', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Drive.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Renault', 'Clio Mío', 2013, 0,
  0,
  false, 'Nafta',
  '/autos/9.jpeg',
  ARRAY['/autos/9.jpeg', '/autos/9_2.jpeg', '/autos/9_3.jpeg', '/autos/9_4.jpeg'],
  '{"motor": "1.2L 4 cil. 16V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO009"}'::jsonb,
  ARRAY['Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Expression.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Peugeot', '207', 2013, 0,
  0,
  false, 'Nafta',
  '/autos/10.jpeg',
  ARRAY['/autos/10.jpeg', '/autos/10_2.jpeg', '/autos/10_3.jpeg', '/autos/10_4.jpeg'],
  '{"motor": "1.4L 4 cil. 8V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO010"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión XS Allure.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Ford', 'EcoSport', 2012, 0,
  0,
  false, 'Nafta',
  '/autos/11.jpeg',
  ARRAY['/autos/11.jpeg', '/autos/11_2.jpeg', '/autos/11_3.jpeg', '/autos/11_4.jpeg'],
  '{"motor": "1.6L 4 cil. 8V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO011"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión XLS 1.6.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Renault', 'Stepway', 2010, 0,
  0,
  false, 'Nafta',
  '/autos/12.jpeg',
  ARRAY['/autos/12.jpeg', '/autos/12_2.jpeg', '/autos/12_3.jpeg', '/autos/12_4.jpeg'],
  '{"motor": "1.6L 4 cil. 8V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO012"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Confort.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Renault', 'Stepway', 2011, 0,
  0,
  false, 'Nafta',
  '/autos/13.jpeg',
  ARRAY['/autos/13.jpeg', '/autos/13_2.jpeg', '/autos/13_3.jpeg', '/autos/13_4.jpeg'],
  '{"motor": "1.6L 4 cil. 16V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO013"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Dynamique.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Renault', 'Stepway', 2012, 0,
  0,
  false, 'Nafta',
  '/autos/14.jpeg',
  ARRAY['/autos/14.jpeg', '/autos/14_2.jpeg', '/autos/14_3.jpeg', '/autos/14_4.jpeg'],
  '{"motor": "1.6L 4 cil. 16V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO014"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Dynamique.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'VW', 'Golf', 2018, 0,
  0,
  false, 'Nafta',
  '/autos/15.jpeg',
  ARRAY['/autos/15.jpeg', '/autos/15_2.jpeg', '/autos/15_3.jpeg', '/autos/15_4.jpeg'],
  '{"motor": "1.4L 4 cil. TSI", "transmision": "Autom\u00e1tica 6 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO015"}'::jsonb,
  ARRAY['Aire acondicionado', 'Pantalla multimedia', 'Cámara de retroceso', 'Sensores de estacionamiento', 'Control de estabilidad', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Highline.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'VW', 'Gol Power', 2011, 0,
  0,
  false, 'Nafta',
  '/autos/16.jpeg',
  ARRAY['/autos/16.jpeg', '/autos/16_2.jpeg', '/autos/16_3.jpeg', '/autos/16_4.jpeg'],
  '{"motor": "1.4L 4 cil. 8V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO016"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión (Medio).'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'VW', 'Gol Trend', 2014, 0,
  0,
  false, 'Nafta',
  '/autos/17.jpeg',
  ARRAY['/autos/17.jpeg', '/autos/17_2.jpeg', '/autos/17_3.jpeg', '/autos/17_4.jpeg'],
  '{"motor": "1.6L 4 cil. 8V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO017"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Comfortline.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'VW', 'Gol Trend', 2017, 0,
  0,
  false, 'Nafta',
  '/autos/18.jpeg',
  ARRAY['/autos/18.jpeg', '/autos/18_2.jpeg', '/autos/18_3.jpeg', '/autos/18_4.jpeg'],
  '{"motor": "1.6L 4 cil. 8V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO018"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Comfortline.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Renault', 'Stepway', 2017, 0,
  0,
  false, 'Nafta',
  '/autos/19.jpeg',
  ARRAY['/autos/19.jpeg', '/autos/19_2.jpeg', '/autos/19_3.jpeg', '/autos/19_4.jpeg'],
  '{"motor": "1.6L 4 cil. 16V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO019"}'::jsonb,
  ARRAY['Aire acondicionado', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión Expression.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'KTM', 'Duke 390', 2016, 0,
  0,
  false, 'Nafta',
  '/autos/20.jpeg',
  ARRAY['/autos/20.jpeg', '/autos/20_2.jpeg', '/autos/20_3.jpeg', '/autos/20_4.jpeg'],
  '{"motor": "373 cc 1 cil. 4T", "transmision": "Manual 6 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO020"}'::jsonb,
  ARRAY['Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión -.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'KTM', 'Duke 250', 2018, 0,
  0,
  false, 'Nafta',
  '/autos/21.jpeg',
  ARRAY['/autos/21.jpeg', '/autos/21_2.jpeg', '/autos/21_3.jpeg', '/autos/21_4.jpeg'],
  '{"motor": "249 cc 1 cil. 4T", "transmision": "Manual 6 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO021"}'::jsonb,
  ARRAY['Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión -.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'KTM', 'Duke 200', 2024, 0,
  0,
  false, 'Nafta',
  '/autos/22.jpeg',
  ARRAY['/autos/22.jpeg', '/autos/22_2.jpeg', '/autos/22_3.jpeg', '/autos/22_4.jpeg'],
  '{"motor": "199 cc 1 cil. 4T", "transmision": "Manual 6 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO022"}'::jsonb,
  ARRAY['Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión NG.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Genérico', 'Moto 110cc', 2024, 0,
  0,
  false, 'Nafta',
  '/autos/23.jpeg',
  ARRAY['/autos/23.jpeg', '/autos/23_2.jpeg', '/autos/23_3.jpeg', '/autos/23_4.jpeg'],
  '{"motor": "110 cc 1 cil. 4T", "transmision": "Manual 4 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO023"}'::jsonb,
  ARRAY['Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión -.'
);

INSERT INTO autos_usados (
  marca, modelo, year, km, price, is_new, fuel_type, image_url, images,
  caracteristicas, equipamiento, description
) VALUES (
  'Chevrolet', 'Spin', 2018, 0,
  0,
  false, 'Nafta',
  '/autos/24.jpeg',
  ARRAY['/autos/24.jpeg', '/autos/24_2.jpeg', '/autos/24_3.jpeg', '/autos/24_4.jpeg'],
  '{"motor": "1.8L 4 cil. 8V", "transmision": "Manual 5 vel.", "traccion": "Delantera", "puertas": 4, "asientos": 5, "color": "No especificado", "patente": "AUTO024"}'::jsonb,
  ARRAY['Aire acondicionado', 'Pantalla multimedia', 'Cámara de retroceso', 'Sensores de estacionamiento', 'Dirección asistida', 'Vidrios eléctricos', 'Cierre centralizado', 'Airbags frontales'],
  'Auto Usado en buen estado. Versión LTZ 7 asientos.'
);