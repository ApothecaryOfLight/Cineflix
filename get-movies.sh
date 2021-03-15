#!/bin/bash
if ! [ -f ./backend/movies/the_goat.txt ]; then
  curl https://ia800304.us.archive.org/28/items/TheGoat/The_Goat_512kb.mp4 --output ./backend/movies/the_goat.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/b/b5/Keaton_Goat_1921.jpg --output ./backend/movies/the_goat.jpg
  printf "{\"name\": \"The Goat\",\n\"picture\": \"the_goat.jpg\",\n\"year\": \"1921\",\n\"genre\": \"Comedy\",\n\"description\": \"Buster Keaton stars and directs this case of mistaken identity and bad timing.\"}" >> ./backend/movies/the_goat.txt
fi

if ! [ -f ./backend/movies/a_night_in_the_show.txt ]; then
  curl https://ia802300.us.archive.org/0/items/ANightintheShow/A_Night_in_the_Show_512kb.mp4 --output ./backend/movies/a_night_in_the_show.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/c/c2/A_Night_in_the_Show_%28poster%29.jpg --output ./backend/movies/a_night_in_the_show.jpg
  printf "{\"name\": \"A Night in the Show\",\n\"picture\": \"a_night_in_the_show.jpg\",\n\"year\": \"1915\",\n\"genre\": \"Comedy\",\n\"description\": \"Charlie Chaplin directs and stars in two roles featuring shenanigans at the theater.\"}" >> ./backend/movies/a_night_in_the_show.txt
fi

if ! [ -f ./backend/movies/sherlock_holmes_and_the_secret_weapon.txt ]; then
  curl https://ia600906.us.archive.org/11/items/secret_weapon/sherlock_holmes_and_the_secret_weapon_512kb.mp4 --output ./backend/movies/sherlock_holmes_and_the_secret_weapon.mp4
  curl https://upload.wikimedia.org/wikipedia/en/4/47/Sherlock_Holmes_and_the_Secret_Weapon_-_1943_-_Poster.png --output ./backend/movies/sherlock_holmes_and_the_secret_weapon.png
  printf "{\"name\": \"Sherlock Holmes and the Secret Weapon\",\n\"genre\": \"Spy Thriller\",\n\"picture\": \"sherlock_holmes_and_the_secret_weapon.png\",\n\"year\": \"1942\",\n\"description\": \"Fourth of the Basil Rathbone/Nigel Bruce Sherlock Holmes films, this was based on The Adventure of the Dancing Men, but reimagined as a spy film set against the backdrop of World War II.\"}" >> ./backend/movies/sherlock_holmes_and_the_secret_weapon.txt
fi

if ! [ -f ./backend/movies/alice_in_wonderland.txt ]; then
  curl https://ia800208.us.archive.org/29/items/AliceInWonderland1915_503/AliceInWonderland-WithAudio_512kb.mp4 --output ./backend/movies/alice_in_wonderland.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Alice_in_Wonderland_poster.jpg/500px-Alice_in_Wonderland_poster.jpg --output ./backend/movies/alice_in_wonderland.jpg
  printf "{\"name\": \"Alice in Wonderland\",\n\"picture\": \"alice_in_wonderland.jpg\",\n\"year\": \"1915\",\n\"genre\": \"Dark Fantasy\",\n\"description\": \"W.W. Young\'s adaption of Lewis Carroll\'s classic.\"}" >> ./backend/movies/alice_in_wonderland.txt
fi

if ! [ -f ./backend/movies/the_monster_walks.txt ]; then
  curl https://ia800500.us.archive.org/24/items/The_Monster_Walks/The_Monster_Walks_512kb.mp4 --output ./backend/movies/the_monster_walks.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/e/ef/The_Monster_Walks_1932_poster.jpg --output ./backend/movies/the_monster_walks.jpg
  printf "{\"name\": \"The Monster Walks\",\n\"picture\": \"the_monster_walks.jpg\",\n\"year\": \"1932\",\n\"genre\": \"Horror\",\n\"description\": \"A creepy mansion, a dark and stormy night, and an ape that has been experimented upon. What could go wrong?\"}" > ./backend/movies/the_monster_walks.txt
fi

if ! [ -f ./backend/movies/ambush_valley.txt ]; then
  curl https://ia803108.us.archive.org/8/items/ambush_valley/ambush_valley_512kb.mp4 --output ./backend/movies/ambush_valley.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Ambush_Valley_-_movie_poster.jpg/500px-Ambush_Valley_-_movie_poster.jpg --output ./backend/movies/ambush_valley.jpg
  printf "{\"name\": \"Ambush Valley\",\n\"picture\": \"ambush_valley.jpg\",\n\"year\": \"1936\",\n\"genre\": \"Western\",\n\"description\": \"A murder and jailbreak lead to a hostage situation.\"}" > ./backend/movies/ambush_valley.txt
fi

if ! [ -f ./backend/movies/the_big_combo.txt ]; then
  curl https://ia803207.us.archive.org/17/items/The_Big_Combo_1955/Big_Combo_1955.mp4 --output ./backend/movies/the_big_combo.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/The_Big_Combo_poster.jpg/500px-The_Big_Combo_poster.jpg --output ./backend/movies/the_big_combo.jpg
  printf "{\"name\": \"The Big combo\",\n\"picture\": \"the_big_combo.jpg\",\n\"year\": \"1955\",\n\"genre\": \"Noir\",\n\"description\": \"Noir crime drama that pits the cops against the gangsters.\"}" > ./backend/movies/the_big_combo.txt
fi

if ! [ -f ./backend/movies/the_big_show.txt ]; then
  curl https://ia800805.us.archive.org/13/items/Big_Show_movie/Big_Show_1936_512kb.mp4 --output ./backend/movies/the_big_show.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/The_Big_Show_Poster.jpg/500px-The_Big_Show_Poster.jpg --output ./backend/movies/the_big_show.jpg
  printf "{\"name\": \"The Big Show\",\n\"picture\": \"the_big_show.jpg\",\n\"year\": \"1936\",\n\"genre\": \"Western\",\n\"description\": \"Western musical featuring a case of mistaken identity.\"}" > ./backend/movies/the_big_show.txt
fi

if ! [ -f ./backend/movies/kids_auto_race_at_venice.txt ]; then
  curl https://ia802702.us.archive.org/35/items/CC_1914_02_07_KidsAutoRaceAtVenice/CC_1914_02_07_KidsAutoRaceAtVenice_512kb.mp4 --output ./backend/movies/kids_auto_race_at_venice.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/CC_Kid_Auto_Races_at_Venice_1914_%28poster%29.jpg/500px-CC_Kid_Auto_Races_at_Venice_1914_%28poster%29.jpg --output ./backend/movies/kids_auto_race_at_venice.jpg
  printf "{\"name\": \"Kids Auto Race At Venice\",\n\"picture\": \"kids_auto_race_at_venice.jpg\",\n\"year\": \"1914\",\n\"genre\": \"Comedy\",\n\"description\": \"Charlie Chaplin plays the Tramp, causing hijinks at a California race.\"}" > ./backend/movies/kids_auto_race_at_venice.txt
fi
