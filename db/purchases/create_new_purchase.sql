INSERT INTO purchases (
    stream_id,
    user_id,
    streamer_id,
    purchase_timestamp
)
VALUES (
    $1, $2, $3, current_timestamp
);

UPDATE streams
SET purchase_id = 1
WHERE stream_id = $1
