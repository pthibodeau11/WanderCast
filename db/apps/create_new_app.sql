INSERT INTO applications (user_id,
        user_bio,
        app_timestamp,
        user_experience,
        user_equipment,
        user_availability,isapproved,isstreamer)
VALUES ($1, $2, current_timestamp, $3, $4, $5, $6, $7);

