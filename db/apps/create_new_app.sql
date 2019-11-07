INSERT INTO applications (user_id,
        user_bio,
        app_timestamp,
        user_experience,
        user_equipment,
        user_availability,
        user_portfolio_link,
        user_resume_link,
        isapproved,
        isstreamer)
VALUES ($1, $2, current_timestamp, $3, $4, $5, $6, $7, $8, $9);

