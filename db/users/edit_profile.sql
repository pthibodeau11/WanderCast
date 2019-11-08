UPDATE users
SET 
user_first_name = $2,
user_last_name = $3,
user_birth_date = $4,
user_profile_img = $5,
WHERE user_id = $1;
