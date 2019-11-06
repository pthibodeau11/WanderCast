INSERT INTO users (
  user_first_name,
  user_last_name,
  user_birth_date,
  user_profile_img,
  user_email,
  hash,
  isAdmin,
  isFeatured 
)
VALUES (
    'John', 'Smith', '1975-01-01', 'no image', 'bogusemail@123.com', 'password', 'false', 'true'
)

INSERT INTO applications (
    user_id,
    user_bio,
    app_timestamp,
    user_experience,
    user_equipment,
    user_availability,
    isApproved,
    isStreamer
)
VALUES (
    4, 'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque. Quam viverra orci sagittis eu volutpat odio facilisis. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Eu facilisis sed odio morbi quis commodo odio. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Ut faucibus pulvinar elementum integer enim neque volutpat. Integer vitae justo eget magna fermentum iaculis eu. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Ultrices eros in cursus turpis massa tincidunt. Magna sit amet purus gravida quis blandit turpis cursus. Vulputate sapien nec sagittis aliquam. Mauris a diam maecenas sed. Quam pellentesque nec nam aliquam sem et. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Orci a scelerisque purus semper eget duis at.',
    current_timestamp, '1+ years', 'Only the best.',
    'All day every day.',
    'true',
    'true'
)

INSERT INTO streams (
  user_id,
  streamer_id,
  stream_title,
  stream_desc,
  stream_date,
  stream_time,
  stream_hours, 
  stream_category,
  stream_country,
  stream_street,
  stream_state,
  stream_city,
  stream_zip,
  isApproved
)
VALUES (
    3, 4, 'Would like to visit Dallas Museum of Art', 'Can you just wander the museum. Elementum tempus egestas sed sed risus pretium quam vulputate. Ut enim blandit volutpat maecenas. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. Ornare quam viverra orci sagittis eu. Nisi est sit amet facilisis magna etiam tempor orci eu. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Amet tellus cras adipiscing enim. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Faucibus interdum posuere lorem ipsum. Quisque id diam vel quam elementum. Proin sed libero enim sed faucibus. Volutpat diam ut venenatis tellus in metus vulputate eu. Semper auctor neque vitae tempus quam pellentesque nec nam.',
    '2019-12-24', '2019-12-24 08:00:00', '1', 'event', 'United States', '1717 N Harwood St', 'Dallas', 'TX', 75201, 'true'
)

UPDATE streams
SET 
stream_price = 150,
stream_img = 'no image',
stream_live_link = 'live link goes here',
stream_video_link = 'recorded link goes here',
stream_equipment = 'will be using super awesome equipment'
WHERE stream_id = 8

-- jUST TESTING 

INSERT INTO purchases (
    stream_id,
    user_id,
    streamer_id,
    purchase_timestamp
)
VALUES (
    4, 1, 2, current_timestamp
)


INSERT INTO review (
  review_id,
  stream_id,
  user_id,
  streamer_id,
  review_date,
  review_text,
  rating
);