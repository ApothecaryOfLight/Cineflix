
if ! [ if ./backend/movies/the_goat.txt ]; then
  curl https://ia800304.us.archive.org/28/items/TheGoat/The_Goat_512kb.mp4 --output ./backend/movies/the_goat.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/b/b5/Keaton_Goat_1921.jpg --output ./backend/movies/the_goat.jpg
  echo $"The Goat\n1921\nComedy\nBuster Keaton stars and directs this case of mistaken identity and bad timing." >> ./backend/movies/the_goat.txt
fi

if ! [ if ./backend/movies/a_night_in_the_show.txt ]; then
  curl https://ia802300.us.archive.org/0/items/ANightintheShow/A_Night_in_the_Show_512kb.mp4 --output ./backend/movies/a_night_in_the_show.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/c/c2/A_Night_in_the_Show_%28poster%29.jpg --output ./backend/movies/a_night_in_the_show.jpg
  echo $"A Night in the Show\n1915\nComedy\nCharlie Chaplin directs and stars in two roles featuring shenanigans at the theater." >> ./backend/movies/a_night_in_the_show.txt
fi

if ! [ if ./backend/movies/sherlock_holmes_and_the_secret_weapon.txt ]; then
  curl https://ia600906.us.archive.org/11/items/secret_weapon/sherlock_holmes_and_the_secret_weapon_512kb.mp4 --output ./backend/movies/sherlock_holmes_and_the_secret_weapon.mp4
  curl https://upload.wikimedia.org/wikipedia/en/4/47/Sherlock_Holmes_and_the_Secret_Weapon_-_1943_-_Poster.png --output ./backend/movies/sherlock_holmes_and_the_secret_weapon.png
  echo $"Sherlock Holmes and the Secret Weapon\nSpy Thriller\n1942\nFourth of the Basil Rathbone/Nigel Bruce Sherlock Holmes films, this was based on The Adventure of the Dancing Men, but reimagined as a spy film set against the backdrop of World War II." >> ./backend/movies/sherlock_holmes_and_the_secret_weapon.txt
fi

if ! [ if ./backend/movies/alice_in_wonderland.txt ]; then
  curl https://ia800208.us.archive.org/29/items/AliceInWonderland1915_503/AliceInWonderland-WithAudio_512kb.mp4 --output ./backend/movies/alice_in_wonderland.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Alice_in_Wonderland_poster.jpg/500px-Alice_in_Wonderland_poster.jpg --output ./backend/movies/alice_in_wonderland.jpg
  echo $"Alice in Wonderland\n1915\nDark Fantasy\nW.W. Young\'s adaption of Lewis Carroll\'s classic." >> ./backend/movies/alice_in_wonderland.txt
fi
