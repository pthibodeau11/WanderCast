INSERT INTO users (user_first_name, user_last_name, user_birth_date, user_profile_img, user_email, hash, isAdmin, isFeatured)
VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
RETURNING *;