-- Insert the tony stark record
INSERT INTO public.account (account_firstname, account_lastname, account_email, account_password, account_type)
VALUES ('Tony', 'Stark', 'tony@starkent.com', 'Iam1ronM@n', 'Client');

-- modify the tony stark record account type to admin
UPDATE public.account
SET account_type = 'Admin'
WHERE account_firstname = 'Tony' AND account_lastname = 'Stark';

-- delete the tony stark record from the database
DELETE FROM public.account
WHERE account_firstname = 'Tony' AND account_lastname = 'Stark';

-- modify the "GM Hummer" description
UPDATE public.inventory
SET inv_description = REPLACE(inv_description, 'small interiors', 'a huge interior')
WHERE inv_make = 'GM' AND inv_model = 'Hummer';

-- select the make and model fields from inventory and name from classification for the "Sport" category
SELECT i.inv_make, i.inv_model, c.classification_name
FROM public.inventory AS i
    JOIN public.classification AS c
        ON i.classification_id = c.classification_id
WHERE c.classification_name = 'Sport';

-- update the file path for the vehicles in inv_image and inv_thumbnail
UPDATE public.inventory
SET inv_image = REPLACE(inv_image, '/images/', '/images/vehicles/'),
    inv_thumbnail = REPLACE(inv_thumbnail, '/images/', '/images/vehicles/');
