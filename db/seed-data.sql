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
    'Joe', 'Streamer', '1994-12-25', 'no image', 'youareable11@gmail.com', 'password', 'false', 'false'
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
    2, 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Mi tempus imperdiet nulla malesuada pellentesque. Quam viverra orci sagittis eu volutpat odio facilisis. Aliquet eget sit amet tellus cras adipiscing enim eu turpis. Sit amet luctus venenatis lectus magna fringilla urna porttitor. Eu facilisis sed odio morbi quis commodo odio. Sed cras ornare arcu dui vivamus arcu felis bibendum ut. Ut faucibus pulvinar elementum integer enim neque volutpat. Integer vitae justo eget magna fermentum iaculis eu. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis. Ultrices eros in cursus turpis massa tincidunt. Magna sit amet purus gravida quis blandit turpis cursus. Vulputate sapien nec sagittis aliquam. Mauris a diam maecenas sed. Quam pellentesque nec nam aliquam sem et. Gravida in fermentum et sollicitudin ac orci phasellus egestas tellus. Orci a scelerisque purus semper eget duis at.',
    current_timestamp, '5+ years', 'Est placerat in egestas erat imperdiet. A diam maecenas sed enim ut. Elementum sagittis vitae et leo duis ut diam quam. Massa enim nec dui nunc mattis. Euismod quis viverra nibh cras pulvinar mattis. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Eros in cursus turpis massa tincidunt dui. Adipiscing commodo elit at imperdiet dui accumsan. Et malesuada fames ac turpis egestas integer.',
    'Nam at lectus urna duis convallis. Condimentum lacinia quis vel eros donec ac. Quam nulla porttitor massa id neque aliquam vestibulum. Congue eu consequat ac felis donec et odio.',
    'false',
    'false'
)

INSERT INTO streams (
  user_id,
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
    3, 'Would like to see the Eiffel Tower', 'I have always wanted to see the Eiffel tower. Elementum tempus egestas sed sed risus pretium quam vulputate. Ut enim blandit volutpat maecenas. Urna nec tincidunt praesent semper feugiat nibh sed pulvinar proin. Vehicula ipsum a arcu cursus vitae congue. Ornare quam viverra orci sagittis eu. Nisi est sit amet facilisis magna etiam tempor orci eu. Consectetur lorem donec massa sapien faucibus et molestie ac feugiat. Amet tellus cras adipiscing enim. Neque gravida in fermentum et sollicitudin ac orci phasellus egestas. Faucibus interdum posuere lorem ipsum. Quisque id diam vel quam elementum. Proin sed libero enim sed faucibus. Volutpat diam ut venenatis tellus in metus vulputate eu. Semper auctor neque vitae tempus quam pellentesque nec nam.',
    '2019-12-24', '2019-12-24 08:00:00', '1', 'event', 'France', 'Champ de Mars, 5 Avenue Anatole', 'France', 'Paris', 75007, 'false'
)

-- jUST TESTING 

INSERT INTO purchases (
    stream_id,
    user_id,
    streamer_id,
    purchase_timestamp
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