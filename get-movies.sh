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

if ! [ -f ./backend/movies/the_stranger.txt ]; then
  curl https://ia800702.us.archive.org/14/items/TheStranger720p/TheStranger720p.mp4 --output ./backend/movies/the_stranger.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/7/71/The_Stranger_%281946_film_poster%29.jpg --output ./backend/movies/the_stranger.jpg
  printf "{\"name\": \"The Stringer\",\n\"picture\": \"the_stranger.jpg\",\n\"year\": \"1946\",\n\"genre\": \"Drama\",\n\"description\": \"A Nazi hunter tracks a notorious war criminal to a Connecticut town. The Nazi has become a teacher at a presitgious prep school, the fiance of a daughter of a supreme court justice. How long can the charade last?\"}" >> ./backend/movies/the_stranger.txt
fi

if ! [ -f ./backend/movies/little_shop_of_horrors.txt ]; then
  curl https://ia800209.us.archive.org/5/items/TheLittleShopOfHorrors1960/The-Little-Shop-of-Horrors_512kb.mp4 --output ./backend/movies/little_shop_of_horrors.mp4
  curl https://upload.wikimedia.org/wikipedia/en/7/78/LittleShop.jpg --output ./backend/movies/little_shop_of_horrors.jpg
  printf "{\"name\": \"The Little Shop of Horrors\",\n\"picture\": \"little_shop_of_horrors.jpg\",\n\"year\": \"1960\",\n\"genre\": \"Horror\",\n\"description\": \"A flower-shop, a blood-loving plant. What could go wrong?\"}" >> ./backend/movies/little_shop_of_horrors.txt
fi

if ! [ -f ./backend/movies/the_corpse_vanishes.txt ]; then
  curl https://ia800300.us.archive.org/25/items/TheCorpseVanishes/TheCorpseVanishes_512kb.mp4 --output ./backend/movies/the_corpse_vanishes.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Corpsevanishes.jpg/800px-Corpsevanishes.jpg --output ./backend/movies/the_corpse_vanishes.jpg
  printf "{\"name\": \"The Corpse Vanishes\",\n\"picture\": \"the_corpse_vanishes.jpg\",\n\"year\": \"1942\",\n\"genre\": \"Horror\",\n\"description\": \"Newspaper reporter investigates a rash of dead brides.\"}" >> ./backend/movies/the_corpse_vanishes.txt
fi

if ! [ -f ./backend/movies/the_screaming_skull.txt ]; then
  curl https://ia800502.us.archive.org/19/items/TheScreamingSkull1958/The-Screaming-Skull_512kb.mp4 --output ./backend/movies/the_screaming_skull.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/a/ab/Poster_for_The_Screaming_Skull.jpg --output ./backend/movies/the_screaming_skull.jpg
  printf "{\"name\": \"The Screaming Skull\",\n\"picture\": \"the_screaming_skull.jpg\",\n\"year\": \"1958\",\n\"genre\": \"Horror\",\n\"description\": \"Newlyweds, are they haunted? Find out.\"}" >> ./backend/movies/the_screaming_skull.txt
fi

if ! [ -f ./backend/movies/the_vampire_bat.txt ]; then
  curl https://ia800203.us.archive.org/7/items/TheVampireBat1933/the-vampire-bat-1933_512kb.mp4 --output ./backend/movies/the_vampire_bat.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/2/21/Vampirebat.jpg --output ./backend/movies/the_vampire_bat.jpg
  printf "{\"name\": \"The Vampire Bat\",\n\"picture\": \"the_vampire_bat.jpg\",\n\"year\": \"1933\",\n\"genre\": \"Horror\",\n\"description\": \"Exsanguinated villagers, skeptical scientists, and a nefarious plot.\"}" >> ./backend/movies/the_vampire_bat.txt
fi

if ! [ -f ./backend/movies/charlie_chalpins_one_am.txt ]; then
  curl https://ia800201.us.archive.org/24/items/CC_1916_08_07_One_A_M/CC_1916_08_07_One_A_M_512kb.mp4 --output ./backend/movies/charlie_chalpins_one_am.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/One_A.M._poster.jpg/500px-One_A.M._poster.jpg --output ./backend/movies/charlie_chalpins_one_am.jpg
  printf "{\"name\": \"Charlie Chaplin\'s One A.M.\",\n\"picture\": \"charlie_chalpins_one_am.jpg\",\n\"year\": \"1916\",\n\"genre\": \"Comedy\",\n\"description\": \"Charlie Chaplin is just a tired weatherman who wants to get some sleep. How hard can that be?\"}" >> ./backend/movies/charlie_chalpins_one_am.txt
fi

if ! [ -f ./backend/movies/the_vagabond.txt ]; then
  curl https://publicdomainmovie.net/movie.php?id=CC_1916_07_10_TheVagabond&type=.mp4 --output ./backend/movies/the_vagabond.mp4
  curl https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/The_Vagabond_%281916%29.jpg/500px-The_Vagabond_%281916%29.jpg --output ./backend/movies/the_vagabond.jpg
  printf "{\"name\": \"Charlie Chaplin\'s Vagabond\",\n\"picture\": \"the_vagabond.jpg\",\n\"year\": \"1916\",\n\"genre\": \"Comedy\",\n\"description\": \"Charlie Chaplin\'s the Tramp character helps a young gril.\"}" >> ./backend/movies/the_vagabond.txt
fi

if ! [ -f ./backend/movies/college.txt ]; then
  curl https://ia802700.us.archive.org/7/items/college/College_512kb.mp4 --output ./backend/movies/college.mp4
  curl https://m.media-amazon.com/images/M/MV5BNTY3NGUyYzgtMWNjNi00ZWZhLTk5NDEtMWI0ZDcwMTRiMGY2XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_.jpg --output ./backend/movies/college.jpg
  printf "{\"name\": \"College\",\n\"picture\": \"college.jpg\",\n\"year\": \"1927\",\n\"genre\": \"Comedy\",\n\"description\": \"Buster Keaton goes to college to try to master sports.\"}" >> ./backend/movies/college.txt
fi
