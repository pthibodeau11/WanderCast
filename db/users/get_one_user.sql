SELECT 
users.user_id, user_first_name, user_last_name, user_birth_date, user_email, user_profile_img, isstreamer
FROM users
INNER JOIN applications ON applications.user_id = users.user_id
WHERE users.user_id = $1