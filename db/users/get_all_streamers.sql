SELECT 
users.user_id, user_first_name, user_last_name, user_email, isstreamer, app_id
FROM users
INNER JOIN applications ON applications.user_id = users.user_id
WHERE isstreamer = 'true'
ORDER BY
app_id ASC