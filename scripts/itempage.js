var itempage, itemgallery, itemaddress, itemhours, itemdresscodeF, itemdresscodeM, hoursopendropdown, dresscodeMdropdown, dresscodeFdropdown, hoursopen, dresscodeMopen, dresscodeFopen, currentItemType, d_itempage, d_itemgallery, d_itemaddress, d_itemhours, d_itemdresscodeF, d_itemdresscodeM, d_hoursopendropdown, d_dresscodeMdropdown, d_dresscodeFdropdown, d_hoursopen, d_dresscodeMopen, d_dresscodeFopen, d_currentItemType;
var items = 
[
	[
		// GOOGLE MAP LINE: Remove 1m2! to !5e0! from link
		// food items - title, desc, site link, menu link, map, location, times, images...
		['Old Ebbitt Grill', 'Iconic tavern offering American meals, including popular oyster specials, in Victorian-style digs.', 'https://www.ebbitt.com/', 'https://www.ebbitt.com/menus/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1343824091286!2d-77.03544908523939!3d38.898042179570545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553614542800', '675 15th St NW Washington, DC 20005', '<span>Sun</span> 8:30AM - 2AM', '<span>Mon</span> 7:30AM - 2AM', '<span>Tue</span> 7:30AM - 2AM', '<span>Wed</span> 7:30AM - 2AM', '<span>Thu</span> 7:30AM - 3AM', '<span>Fri</span> 7:30AM - 3AM', '<span>Sat</span> 8:30AM - 3AM', '../images/food/items/OldEbbittGrill/1.jpg', '../images/food/items/OldEbbittGrill/2.jpg', '../images/food/items/OldEbbittGrill/3.jpg', '../images/food/items/OldEbbittGrill/4.jpg', '../images/food/items/OldEbbittGrill/5.jpg'],
		['Founding Farmers DC', 'Co-op-owned American eatery dishing out market-driven comfort cuisine along with rustic-chic style.', 'https://www.wearefoundingfarmers.com/', 'https://www.wearefoundingfarmers.com/menus/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1305.5068409301718!2d-77.04520954436336!3d38.90029097254082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553616507715', '1924 Pennsylvania Ave NW, Washington, DC 20006', '<span>Sun</span> 8:30AM - 10PM', '<span>Mon</span> 7AM - 10PM', '<span>Tue</span> 7AM - 11PM', '<span>Wed</span> 7AM - 11PM', '<span>Thu</span> 7AM - 11PM', '<span>Fri</span> 7AM - 12AM', '<span>Sat</span> 8:30AM - 12AM', '../images/food/items/FoundingFarmersDC/1.jpg', '../images/food/items/FoundingFarmersDC/2.jpg', '../images/food/items/FoundingFarmersDC/3.jpg', '../images/food/items/FoundingFarmersDC/4.jpg', '../images/food/items/FoundingFarmersDC/5.jpg'],
		['Zaytinya DC', 'Chef José Andrés\' light, airy mainstay offers Eastern Mediterranean small plates & regional wines.', 'https://www.zaytinya.com/', 'https://www.zaytinya.com/menu/washington-dc/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1036729506463!2d-77.02587268523934!3d38.89874447957046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553615547476', '701 9th St NW, Washington, DC 20001', '<span>Sun</span> 11AM - 10PM', '<span>Mon</span> 11AM - 10PM', '<span>Tue</span> 11AM - 11PM', '<span>Wed</span> 11AM - 11PM', '<span>Thu</span> 11AM - 11PM', '<span>Fri</span> 11AM - 12AM', '<span>Sat</span> 11AM - 10AM', '../images/food/items/ZaytinyaDC/1.jpg', '../images/food/items/ZaytinyaDC/2.jpg', '../images/food/items/ZaytinyaDC/3.jpg', '../images/food/items/ZaytinyaDC/4.jpg', '../images/food/items/ZaytinyaDC/5.jpg'],
		['Logan Tavern', 'Casual American eatry with a modern tavern feel, known for pre-theater dining & Sunday brunch. (vegan friendly)', 'https://www.logantavern.com/', 'https://www.logantavern.com/menus/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.620800172237!2d-77.0348886852389!3d38.90978597956869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553615643332', '1423 P St NW, Washington, DC 20005', '<span>Sun</span> 10:30AM - 10:30PM', '<span>Mon</span> 11:30AM - 10:30PM', '<span>Tue</span> 11:30AM - 10:30PM', '<span>Wed</span> 11:30AM - 10:30PM', '<span>Thu</span> 11:30AM - 10:30PM', '<span>Fri</span> 11:30AM - 11:30PM', '<span>Sat</span> 10:30AM - 11:30PM', '../images/food/items/LoganTavern/1.jpg', '../images/food/items/LoganTavern/2.jpg', '../images/food/items/LoganTavern/3.jpg', '../images/food/items/LoganTavern/4.jpg', '../images/food/items/LoganTavern/5.jpg'],
		["Le Diplomate", "Bustling brasserie serves classic French fare & drinks amid a zinc bar, tile floors & sidewalk cafe.", "https://www.lediplomatedc.com", "https://lediplomatedc.com/#menus", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5516026155983!2d-77.03376108507699!3d38.91136805372642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553776889231", "1601 14th St NW, Washington, DC 20009", "<span>Sun</span> 9:30AM - 11:00PM", "<span>Mon</span> 5:00PM - 11:00PM", "<span>Tue</span> 5:00PM - 11:00PM", "<span>Wed</span> 5:00PM - 11:00PM", "<span>Thu</span> 5:00PM - 11:00PM", "<span>Fri</span> 5:00PM - 12:00AM", "<span>Sat</span> 9:30AM - 12AM", "../images/food/items/LeDiplomate/1.jpg", "../images/food/items/LeDiplomate/2.jpg", "../images/food/items/LeDiplomate/3.jpg", "../images/food/items/LeDiplomate/4.jpg", "../images/food/items/LeDiplomate/5.jpg"],
		["The Dabney", "Chef Jeremiah Langhorne serves Mid-Atlantic cuisine at this rustic spot set in a former row house.", "https://thedabney.com/", "https://thedabney.com/menu", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5516026155983!2d-77.03376108507699!3d38.91136805372642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553780706191", "1601 14th St NW, Washington, DC 20009", "<span>Sun</span> 5:00PM - 10:00PM", "<span>Mon</span> Closed", "<span>Tue</span> 5:30PM - 10:00PM", "<span>Wed</span> 5:30PM - 10:00PM", "<span>Thu</span> 5:30PM - 10:00PM", "<span>Fri</span> 5:00PM - 11:00PM", "<span>Sat</span> 5:00PM - 11:00PM", "../images/food/items/TheDabney/1.jpg", "../images/food/items/TheDabney/2.jpg", "../images/food/items/TheDabney/3.jpg", "../images/food/items/TheDabney/4.jpg"],
		["Rose's Luxury", "Eclectic New American small plates menu crafted in a cozy, converted townhouse with upstairs bar.", "https://www.rosesluxury.com/", "https://www.rosesluxury.com/menus/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.894537571295!2d-76.99733844951393!3d38.880654655436494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553782524628", "717 8th St SE, Washington, DC 20003", "<span>Sun</span> Closed", "<span>Mon</span> 5:00PM - 10:00PM", "<span>Tue</span> 5:00PM - 10:00PM", "<span>Wed</span> 5:00PM - 10:00PM", "<span>Thu</span> 5:00PM - 10:00PM", "<span>Fri</span> 5:00PM - 10:00PM", "<span>Sat</span> 5:00PM - 10:00PM", "../images/food/items/RosesLuxury/1.jpg", "../images/food/items/RosesLuxury/2.jpg", "../images/food/items/RosesLuxury/3.jpg", "../images/food/items/RosesLuxury/4.jpg"],
		["Pineapple and Pearls", "Chef Aaron Silverman offers inventive American tasting menus at this elegant dining destination.", "https://www.pineappleandpearls.com/", "https://www.pineappleandpearls.com/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.892499624307!2d-76.99751954940402!3d38.880701279473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553786687243", "715 8th St SE, Washington, DC 20003", "<span>Sun</span> Closed", "<span>Mon</span> Closed", "<span>Tue</span> 5:00PM - 12:00AM", "<span>Wed</span> 5:00PM - 12:00AM", "<span>Thu</span> 5:00PM - 12:00AM", "<span>Fri</span> 5:00PM - 12:00AM", "<span>Sat</span> 5:00PM - 12:00AM", "../images/food/items/PineappleAndPearls/1.jpg", "../images/food/items/PineappleAndPearls/2.jpg", "../images/food/items/PineappleAndPearls/3.jpg", "../images/food/items/PineappleAndPearls/4.jpg"],
		["Himitisu", "Light-filled, mellow room for riffs on Japanese & Asian fare, including sushi & artisan cocktails.", "https://www.himitsudc.com/", "https://www.himitsudc.com/menus/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.2232125940172!2d-77.02675054905781!3d38.94172875183455!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553793437145", "828 Upshur St NW, Washington, DC 20011", "<span>Sun</span> 5:00PM - 10:00PM", "<span>Mon</span> 5:00PM - 10:00PM", "<span>Tue</span> 5:00PM - 10:00PM", "<span>Wed</span> 5:00PM - 10:00PM", "<span>Thu</span> 5:00PM - 10:00PM", "<span>Fri</span> 5:00PM - 11:00PM", "<span>Sat</span> 5:00PM - 11:00PM", "../images/food/items/Himitisu/1.jpg", "../images/food/items/Himitisu/2.jpg", "../images/food/items/Himitisu/3.jpg", "../images/food/items/Himitisu/4.jpg", "../images/food/items/Himitisu/5.jpg"],
		["Little Serow", "Intimate & dark, this cavelike spot serves an innovative set menu of Northern-Thailand specialties", "http://www.littleserow.com/", "http://www.littleserow.com/menu.html", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.605208733763!2d-77.04035494905864!3d38.91014245369766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553860249345!5m2!1sen!2sus", "1511 17th St NW, Washington, DC 20036", "<span>Sun</span> Closed", "<span>Mon</span> Closed", "<span>Tue</span> 5:30PM - 10:00PM", "<span>Wed</span> 5:30PM - 10:00PM", "<span>Thu</span> 5:30PM - 10:00PM", "<span>Fri</span> 5:30PM - 10:30PM", "<span>Sat</span> 5:30PM - 10:30PM", "../images/food/items/LittleSerow/1.jpg", "../images/food/items/LittleSerow/2.jpg", "../images/food/items/LittleSerow/3.jpg", "../images/food/items/LittleSerow/4.jpg", "../images/food/items/LittleSerow/5.jpg"],
		["Kinship", "Unique New American cuisine emphasizing classic and indulgent dishes in chic surrounds", "http://kinshipdc.com/", "http://kinshipdc.com/menu/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.8953671696604!2d-77.02379604941098!3d38.90350797946945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553860962324!5m2!1sen!2sus", "1015 7th St NW, Washington, DC 20001", "<span>Sun</span> 5:30PM - 10:00PM", "<span>Mon</span> 5:30PM - 10:00PM", "<span>Tue</span> 5:30PM - 10:00PM", "<span>Wed</span> 5:30PM - 10:00PM", "<span>Thu</span> 5:30PM - 10:00PM", "<span>Fri</span> 5:30PM - 10:00PM", "<span>Sat</span> 5:30PM - 10:00PM", "../images/food/items/Kinship/1.jpg", "../images/food/items/Kinship/2.jpg", "../images/food/items/Kinship/3.jpg", "../images/food/items/Kinship/4.jpg", "../images/food/items/Kinship/5.jpg"],
		["Iron Gate Restaurant", "Swanky spot offering Italian & Greek small plates, a tasting menu & more in courtyard-enhanced digs.", "https://irongaterestaurantdc.com/", "https://irongaterestaurantdc.com/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.7390329961036!2d-77.04205954941082!3d38.907082679468886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553861865397!5m2!1sen!2sus", "1734 N St NW, Washington, DC 20036", "<span>Sun</span> 11:30AM - 2:00PM  5:30PM - 9:00PM", "<span>Mon</span>5:30PM - 10:00PM", "<span>Tue</span> 11:30AM - 2:00PM  5:30PM - 10:00PM", "<span>Wed</span> 11:30AM - 2:00PM  5:30PM - 10:00PM", "<span>Thu</span> 11:30AM - 2:00PM  5:30PM - 10:00PM", "<span>Fri</span> 11:30AM - 2:00PM  5:30PM - 11:00PM", "<span>Sat</span> 11:00AM - 2:00PM  5:30PM - 11:00PM", "../images/food/items/IronGateRestaurant/1.jpg", "../images/food/items/IronGateRestaurant/2.jpg", "../images/food/items/IronGateRestaurant/3.jpg", "../images/food/items/IronGateRestaurant/4.jpg", "../images/food/items/IronGateRestaurant/5.jpg"],
		["Tail Up Goat", "A hip bistro serving creative Mediterranean fare & Caribbean-inspired drinks in modern surrounds.", "http://www.tailupgoat.com/", "http://www.tailupgoat.com/food", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.016109707501!2d-77.04532804941024!3d38.923609279466355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553866801532!5m2!1sen!2sus", "1827 Adams Mill Rd NW, Washington, DC 20009", "<span>Sun</span> 11:00AM - 1:00PM  5:00PM - 10:00PM", "<span>Mon</span> 5:30PM - 10:00PM", "<span>Tue</span> 5:30PM - 10:00PM", "<span>Wed</span> 5:30PM - 10:00PM", "<span>Thu</span> 5:30PM - 10:00PM", "<span>Fri</span> 5:00PM - 10:00PM", "<span>Sat</span> 5:00PM - 10:00PM", "../images/food/items/TailUpGoat/1.jpg", "../images/food/items/TailUpGoat/2.jpg", "../images/food/items/TailUpGoat/3.jpg", "../images/food/items/TailUpGoat/4.jpg", "../images/food/items/TailUpGoat/5.jpg"],
		["The Red Hen", "Creative wood-fired Italian eats in an airy, rustic-industrial space with open kitchen & large bar", "http://www.theredhendc.com/", "http://www.theredhendc.com/wp-content/uploads/2019/02/RH-Web-Dinner-Menu-Jan-19.pdf", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.392218125334!2d-77.01460284941056!3d38.9150118794676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553867666220!5m2!1sen!2sus", "1822 1st St NW, Washington, DC 20001", "<span>Sun</span> 5:00PM - 9:00PM", "<span>Mon</span> 5:30PM - 10:00PM", "<span>Tue</span> 5:30PM - 10:00PM", "<span>Wed</span> 5:30PM - 10:00PM", "<span>Thu</span> 5:30PM - 10:00PM", "<span>Fri</span> 5:30PM - 11:00PM", "<span>Sat</span> 5:00PM - 11:00PM", "../images/food/items/TheRedHen/1.jpg", "../images/food/items/TheRedHen/2.jpg", "../images/food/items/TheRedHen/3.jpg", "../images/food/items/TheRedHen/4.jpg", "../images/food/items/TheRedHen/5.jpg"],
		["Jaleo", "Buzzy Spanish spot from chef José Andrés serving tapas, paella & sangria in a striking, artsy space.", "https://www.jaleo.com/location/washington-dc/", "https://www.jaleo.com/location/washington-dc/menu/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.2269190014754!2d-77.02446614941124!3d38.89592587947054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553869077111!5m2!1sen!2sus", "480 7th St NW, Washington, DC 20004", "<span>Sun</span> 10:00AM - 10:00AM", "<span>Mon</span> 11:00AM - 10:00AM", "<span>Tue</span> 11:00AM - 11:00AM", "<span>Wed</span> 11:00AM - 11:00AM", "<span>Thu</span> 11:00AM - 11:00AM", "<span>Fri</span> 11:00AM - 12:00AM", "<span>Sat</span> 10:00AM - 12:00AM", "../images/food/items/Jaleo/1.jpg", "../images/food/items/Jaleo/2.jpg", "../images/food/items/Jaleo/3.jpg", "../images/food/items/Jaleo/4.jpg", "../images/food/items/Jaleo/5.jpg"],
		["Chloe", "Chef-driven, internationally inspired fare in urbane digs with a hip bar & casual lunch scene.", "http://restaurantchloe.com/", "http://restaurantchloe.com/food-drink-dinner/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.1562300131204!2d-77.00294934941196!3d38.874667279473876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553870076780!5m2!1sen!2sus", "1331 4th St SE, Washington, DC 20003", "<span>Sun</span> 11:00AM - 9:00PM", "<span>Mon</span> 4:00PM - 10:00PM", "<span>Tue</span> 4:00PM - 10:00PM", "<span>Wed</span> 4:00PM - 10:00PM", "<span>Thu</span> 4:00PM - 10:00PM", "<span>Fri</span> 4:00PM - 11:00PM", "<span>Sat</span> 11:00AM - 2:00PM  4:00PM - 11:00PM", "../images/food/items/Chloe/1.jpg", "../images/food/items/Chloe/2.jpg", "../images/food/items/Chloe/3.jpg", "../images/food/items/Chloe/4.jpg", "../images/food/items/Chloe/5.jpg"],
		["Maydan", "Rose Previte's trendsetting eatery showcases Caucasian, North African & Middle Eastern cuisines", "https://www.maydandc.com/", "https://www.maydandc.com/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.1784505456367!2d-77.03337604972688!3d38.919898553123495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553871585580!5m2!1sen!2sus", "1346 Florida Ave NW, Washington, DC 20009", "<span>Sun</span> 5:00PM - 12:00AM", "<span>Mon</span> 5:00PM - 12:00AM", "<span>Tue</span> 5:00PM - 12:00AM", "<span>Wed</span> 5:00PM - 12:00AM", "<span>Thu</span> 5:00PM - 12:00AM", "<span>Fri</span> 5:00PM - 3:00AM", "<span>Sat</span> 5:00PM - 3:00AM", "../images/food/items/Maydan/1.jpg", "../images/food/items/Maydan/2.jpg", "../images/food/items/Maydan/3.jpg", "../images/food/items/Maydan/4.jpg", "../images/food/items/Maydan/5.jpg"],
		["China Chilcano", "José Andrés' festive eatery showcases Peruvian fare with Asian & Spanish accents & pisco cocktails.", "https://chinachilcano.com/", "https://chinachilcano.com/menu/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.252415770843!2d-77.02427614972774!3d38.89534275457132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553878801806!5m2!1sen!2sus", "418 7th St NW, Washington, DC 20004", "<span>Sun</span> 11:00AM - 10:00PM", "<span>Mon</span> 11:00AM - 10:00PM", "<span>Tue</span> 11:00AM - 11:00PM", "<span>Wed</span> 11:00AM - 11:00PM", "<span>Thu</span> 11:00AM - 11:00PM", "<span>Fri</span> 11:00AM - 12:00AM", "<span>Sat</span> 11:00AM - 12:00AM", "../images/food/items/ChinaChilcano/1.jpg", "../images/food/items/ChinaChilcano/2.jpg", "../images/food/items/ChinaChilcano/3.jpg", "../images/food/items/ChinaChilcano/4.jpg", "../images/food/items/ChinaChilcano/5.jpg"],
		["Estadio", "Small, festive spot serving Spanish tapas & playful plates & cocktails in Moorish-styled digs.", "http://estadio-dc.com/", "http://estadio-dc.com/dinner/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.5993478211203!2d-77.03439334972725!3d38.91027645369095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553880280160!5m2!1sen!2sus", "1520 14th St NW, Washington, DC 20005", "<span>Sun</span> 11:00AM - 2:00PM  5:00PM - 9:00PM", "<span>Mon</span> 5:00PM - 10:00PM", "<span>Tue</span> 5:00PM - 10:00PM", "<span>Wed</span> 5:00PM - 10:00PM", "<span>Thu</span> 5:00PM - 10:00PM", "<span>Fri</span> 11:30AM - 2:00PM  5:00PM - 11:00PM", "<span>Sat</span> 11:00AM - 2:00PM  5:00PM - 11:00PM", "../images/food/items/Estadio/1.jpg", "../images/food/items/Estadio/2.jpg", "../images/food/items/Estadio/3.jpg", "../images/food/items/Estadio/4.jpg", "../images/food/items/Estadio/5.jpg"],
		["Bad Saint", "A cozy, transporting enclave specializing in Filipino dishes, cocktails & culture.", "http://www.badsaintdc.com/", "http://www.badsaintdc.com/", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.724804492953!2d-77.03024464941005!3d38.93026707946533!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553881083468!5m2!1sen!2sus", "3226 11th St NW, Washington, DC 20010", "<span>Sun</span> 5:00PM - 10:00PM", "<span>Mon</span> 5:30PM - 10:00PM", "<span>Tue</span> 5:30PM - 10:00PM", "<span>Wed</span> 5:30PM - 10:00PM", "<span>Thu</span> 5:30PM - 10:00PM", "<span>Fri</span> 5:30PM - 11:00PM", "<span>Sat</span> 5:00PM - 11:00PM", "../images/food/items/BadSaint/1.jpg", "../images/food/items/BadSaint/2.jpg", "../images/food/items/BadSaint/3.jpg", "../images/food/items/BadSaint/4.jpg", "../images/food/items/BadSaint/5.jpg"],
		["Masseria", "Nicholas Stefanelli's Puglian-inspired prix fixe menus served in an Italian country–chic setting.", "https://www.masseria-dc.com/", "https://www.masseria-dc.com/menus", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.6245135086715!2d-77.0014126494107!3d38.90970107946857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553882870283!5m2!1sen!2sus", "1340 4th St NE, Washington, DC 20002", "<span>Sun</span> Closed", "<span>Mon</span> Closed", "<span>Tue</span> 6:00PM - 9:30PM", "<span>Wed</span> 6:00PM - 9:30PM", "<span>Thu</span> 6:00PM - 9:30PM", "<span>Fri</span> 5:30PM - 10:00PM", "<span>Sat</span> 5:00PM - 10:00PM", "../images/food/items/Masseria/1.jpg", "../images/food/items/Masseria/2.jpg", "../images/food/items/Masseria/3.jpg", "../images/food/items/Masseria/4.jpg", "../images/food/items/Masseria/5.jpg"],
		["Da Hong Pao Restaurant and Bar", "Bright, basic spot offering a big menu of Chinese classics, with dim sum & a full bar.", "http://www.dahongpaorestaurant.com/", "http://www.dahongpaorestaurant.com/#menu", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3104.638207724123!2d-77.03387568448993!3d38.90938797956872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1554163971690!5m2!1sen!2sus", "1409 14th St NW, Washington, DC 20005", "<span>Sun</span> 10:00AM - 11:00PM", "<span>Mon</span> 10:00AM - 11:00PM", "<span>Tue</span> 10:00AM - 11:00PM", "<span>Wed</span> 10:00AM - 11:00PM", "<span>Thu</span> 10:00AM - 11:00PM", "<span>Fri</span> 10:00AM - 12:00PM", "<span>Sat</span> 10:00AM - 12:00PM", "../images/food/items/DaHongPaoRestaurantAndBar/1.jpg", "../images/food/items/DaHongPaoRestaurantAndBar/2.jpg", "../images/food/items/DaHongPaoRestaurantAndBar/3.jpg", "../images/food/items/DaHongPaoRestaurantAndBar/4.jpg"]
	],
	[
		// place items - title, desc, site link, map, location, times, images...
		["United States Capitol", "Home of the United States Congress and the seat of the legislative branch of the U.S. federal government.", "https://www.visitthecapitol.gov/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.48868150801!2d-77.01124454886515!3d38.88993887947166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553961458941!5m2!1sen!2sus", "First St SE, Washington, DC 20004", "<span>Sun</span> Closed", "<span>Mon</span> 8:30AM - 4:30PM", "<span>Tue</span> 8:30AM - 4:30PM", "<span>Wed</span> 8:30AM - 4:30PM", "<span>Thu</span> 8:30AM - 4:30PM", "<span>Fri</span> 8:30AM - 4:30PM", "<span>Sat</span> 8:30AM - 4:30PM", "../images/places/items/UnitedStatesCapitol/1.jpg", "../images/places/items/UnitedStatesCapitol/2.jpg", "../images/places/items/UnitedStatesCapitol/3.jpg", "../images/places/items/UnitedStatesCapitol/4.jpg"],
		["Lincoln Memorial", "American national monument built to honor the 16th President of the United States, Abraham Lincoln.", "https://washington.org/dc-guide-to/lincoln-memorial", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.517986129997!2d-77.05237004892274!3d38.88926857947168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553962334779!5m2!1sen!2sus", "2 Lincoln Memorial Cir NW, Washington, DC 20037", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/places/items/LincolnMemorial/1.jpg", "../images/places/items/LincolnMemorial/2.jpg", "../images/places/items/LincolnMemorial/3.jpg", "../images/places/items/LincolnMemorial/4.jpg"],
		["Washington Monument", "An obelisk to commemorate George Washington, first US President and once commander-in-chief of the Continental Army.", "https://www.nps.gov/wamo/planyourvisit/basicinfo.htm", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.5098741652673!2d-77.03735477091953!3d38.88945412967185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553979253139!5m2!1sen!2sus", "2 15th St NW, Washington, DC 20024", "<span>Sun</span> 9:00AM - 5:00PM", "<span>Mon</span> 9:00AM - 5:00PM", "<span>Tue</span> 9:00AM - 5:00PM", "<span>Wed</span> 9:00AM - 5:00PM", "<span>Thu</span> 9:00AM - 5:00PM", "<span>Fri</span> 9:00AM - 5:00PM", "<span>Sat</span> 9:00AM - 5:00PM", "../images/places/items/WashingtonMonument/1.jpg", "../images/places/items/WashingtonMonument/2.jpg", "../images/places/items/WashingtonMonument/3.jpg", "../images/places/items/WashingtonMonument/4.jpg"],
		["The White House", "The official residence and workplace of the President of the United States since John Adams in 1800.", "https://www.whitehouse.gov/about-the-white-house/the-white-house/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.150381930867!2d-77.03872384979644!3d38.897676279470346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553980916170!5m2!1sen!2sus", "1600 Pennsylvania Ave NW, Washington, DC 20500", "<span>Sun</span> Closed", "<span>Mon</span> Closed", "<span>Tue</span> 7:30AM - 11:30AM", "<span>Wed</span> 7:30AM - 11:30AM", "<span>Thu</span> 7:30AM - 11:30AM", "<span>Fri</span> 7:30AM - 1:30PM", "<span>Sat</span> 7:30AM - 1:30PM", "../images/places/items/TheWhiteHouse/1.jpg", "../images/places/items/TheWhiteHouse/2.jpg", "../images/places/items/TheWhiteHouse/3.jpg", "../images/places/items/TheWhiteHouse/4.jpg"],
		["Thomas Jefferson Memorial", "A memorial dedicated to Thomas Jefferson: American Founding Father, main author of the Declaration of Independence, and third President of the United States.", "https://washington.org/dc-guide-to/jefferson-memorial", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.8628070372097!2d-77.03864764979707!3d38.8813805794729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553988321206!5m2!1sen!2sus", "701 E Basin Dr SW, Washington, DC 20242", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/places/items/ThomasJeffersonMemorial/1.jpg", "../images/places/items/ThomasJeffersonMemorial/2.jpg", "../images/places/items/ThomasJeffersonMemorial/3.jpg", "../images/places/items/ThomasJeffersonMemorial/4.jpg"],
		["National Gallery of Art", "A national art museum open to the public and free of charge which contrains works from Leonardo da Vinci, Andrew W. Mellon, Paul Mellon, etc.", "https://www.nga.gov/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.429262185593!2d-77.02215904970737!3d38.891297978980546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553989322239!5m2!1sen!2sus", "Constitution Ave NW, Washington, DC 20565", "<span>Sun</span> 11:00AM - 6:00PM", "<span>Mon</span> 10:00AM - 5:00PM", "<span>Tue</span> 10:00AM - 5:00PM", "<span>Wed</span> 10:00AM - 5:00PM", "<span>Thu</span> 10:00AM - 5:00PM", "<span>Fri</span> 10:00AM - 5:00PM", "<span>Sat</span> 10:00AM - 5:00PM", "../images/places/items/NationalGalleryOfArt/1.jpg", "../images/places/items/NationalGalleryOfArt/2.jpg", "../images/places/items/NationalGalleryOfArt/3.jpg", "../images/places/items/NationalGalleryOfArt/4.jpg"],
		["Arlington National Cemetary", "A cemetery in whose 624 acres the dead of the nation's conflicts have been buried, beginning with the Civil War and transferred dead from earlier wars.", "https://www.arlingtoncemetery.mil/#/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.9963568644594!2d-77.0708650497972!3d38.878325179473244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553990344619!5m2!1sen!2sus", "Arlington, VA 22211", "<span>Sun</span> 8:00AM - 7:00PM", "<span>Mon</span> 8:00AM - 7:00PM", "<span>Tue</span> 8:00AM - 7:00PM", "<span>Wed</span> 8:00AM - 7:00PM", "<span>Thu</span> 8:00AM - 7:00PM", "<span>Fri</span> 8:00AM - 7:00PM", "<span>Sat</span> 8:00AM - 7:00PM", "../images/places/items/ArlingtonNationalCemetary/1.jpg", "../images/places/items/ArlingtonNationalCemetary/2.jpg", "../images/places/items/ArlingtonNationalCemetary/3.jpg", "../images/places/items/ArlingtonNationalCemetary/4.jpg"],
		["Smithsonian National Zoo", 'One of the oldest zoos in the US, founded with the mission to "provide engaging experiences with animals and create/share knowledge to save wildlife and habitats."', "https://nationalzoo.si.edu/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.7533120575363!2d-77.05197844979519!3d38.929615579465256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553991070205!5m2!1sen!2sus", "3001 Connecticut Ave NW, Washington, DC 20008", "<span>Sun</span> 8:00AM - 5:00PM", "<span>Mon</span> 8:00AM - 5:00PM", "<span>Tue</span> 8:00AM - 5:00PM", "<span>Wed</span> 8:00AM - 5:00PM", "<span>Thu</span> 8:00AM - 5:00PM", "<span>Fri</span> 8:00AM - 5:00PM", "<span>Sat</span> 8:00AM - 5:00PM", "../images/places/items/SmithsonianNationalZoo/1.jpg", "../images/places/items/SmithsonianNationalZoo/2.jpg", "../images/places/items/SmithsonianNationalZoo/3.jpg", "../images/places/items/SmithsonianNationalZoo/4.jpg"],
		["Vietnam Veterans Memorial", "A memorial honoring then U.S. armed forces members who fought, who were killed, and who were unaccounted for in the Vietnam War.", "http://thewall-usa.com/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.4294676493873!2d-77.04990724979665!3d38.89129327947138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553992593363!5m2!1sen!2sus", "5 Henry Bacon Dr NW, Washington, DC 20245", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/places/items/VietnamVeteransMemorial/1.jpg", "../images/places/items/VietnamVeteransMemorial/2.jpg", "../images/places/items/VietnamVeteransMemorial/3.jpg", "../images/places/items/VietnamVeteransMemorial/4.jpg"],
		["National Museum of American History", "A museum that collects, preserves, and displays the social, political, cultural, scientific, and military history the United States with free admission.", "https://americanhistory.si.edu/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1552.7154962309269!2d-77.03010186406496!3d38.89125840289736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1554132026983!5m2!1sen!2sus", "1300 Constitution Ave NW, Washington, DC 20560", "<span>Sun</span> 10:00AM - 5:30PM", "<span>Mon</span> 10:00AM - 3:00PM", "<span>Tue</span> 10:00AM - 5:30PM", "<span>Wed</span> 10:00AM - 5:30PM", "<span>Thu</span> 10:00AM - 5:30PM", "<span>Fri</span> 10:00AM - 5:30PM", "<span>Sat</span> 10:00AM - 5:30PM", "../images/places/items/NationalMuseumOfAmericanHistory/1.jpg", "../images/places/items/NationalMuseumOfAmericanHistory/2.jpg", "../images/places/items/NationalMuseumOfAmericanHistory/3.jpg", "../images/places/items/NationalMuseumOfAmericanHistory/4.jpg"],
		["National Museum of Natural History", "The most visited natural history museum in the world which collects over 126 million specimens of plants, animals, fossils, minerals, meteorites, human remains, and human cultural artifacts.", "https://naturalhistory.si.edu/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.4306524682115!2d-77.02825944892267!3d38.891266179471316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1554062862513!5m2!1sen!2sus", "10th St. & Constitution Ave. NW, Washington, DC 20560", "<span>Sun</span> 10:00AM - 5:30PM", "<span>Mon</span> 10:00AM - 5:30PM", "<span>Tue</span> 10:00AM - 5:30PM", "<span>Wed</span> 10:00AM - 5:30PM", "<span>Thu</span> 10:00AM - 5:30PM", "<span>Fri</span> 10:00AM - 5:30PM", "<span>Sat</span> 10:00AM - 5:30PM", "../images/places/items/NationalMuseumOfNaturalHistory/1.jpg", "../images/places/items/NationalMuseumOfNaturalHistory/2.jpg", "../images/places/items/NationalMuseumOfNaturalHistory/3.jpg", "../images/places/items/NationalMuseumOfNaturalHistory/4.jpg"],
		["World War II Memorial", "A memorial to those who served in the US armed forces during World War II consisting of 56 pillars and a pair of small triumphal arches surrounding a square and fountain.", "https://www.wwiimemorial.com/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1552.7558570249869!2d-77.04164962397425!3d38.889412044867846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1554064730489!5m2!1sen!2sus", "1750 Independence Ave SW, Washington, DC 20024", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/places/items/WorldWarIIMemorial/1.jpg", "../images/places/items/WorldWarIIMemorial/2.jpg", "../images/places/items/WorldWarIIMemorial/3.jpg", "../images/places/items/WorldWarIIMemorial/4.jpg"],
		["Martin Luther King, Jr. Memorial", 'A granite statue memorial of the Civil Rights Movement leader, Martin Luther King Junior. The design is a line from his "I Have A Dream" speech: "Out of the mountain of despair, a stone of hope."', "https://washington.org/visit-dc/martin-luther-king-jr-memorial", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1259.46793232415!2d-77.04426318613218!3d38.88612951910834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1554131909631!5m2!1sen!2sus", "1964 Independence Ave SW, Washington, DC 20024", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/places/items/MartinLutherKingJrMemorial/1.jpg", "../images/places/items/MartinLutherKingJrMemorial/2.jpg", "../images/places/items/MartinLutherKingJrMemorial/3.jpg"],
		["Holocaust Memorial Museum", "The US' official memorial to the Holocaust, providing the documentation, study, and interpretation of Holocaust history. It is dedicated to helping leaders and citizens of the world confront hatred, prevent genocide, promote human dignity, and strengthen democracy.", "https://www.ushmm.org/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.629945719992!2d-77.03480144903811!3d38.88670757947211!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1554076243725!5m2!1sen!2sus", "100 Raoul Wallenberg Pl SW, Washington, DC 20024", "<span>Sun</span> 10:00AM - 5:20PM", "<span>Mon</span> 10:00AM - 5:20PM", "<span>Tue</span> 10:00AM - 5:20PM", "<span>Wed</span> 10:00AM - 5:20PM", "<span>Thu</span> 10:00AM - 5:20PM", "<span>Fri</span> 10:00AM - 5:20PM", "<span>Sat</span> 10:00AM - 5:20PM", "../images/places/items/HolocaustMemorialMuseum/1.jpg", "../images/places/items/HolocaustMemorialMuseum/2.jpg", "../images/places/items/HolocaustMemorialMuseum/3.jpg", "../images/places/items/HolocaustMemorialMuseum/4.jpg"],
		["National Air and Space Museum", "The most visited museum in the US, a center for research into the history and science of aviation and spaceflight, as well as planetary science and terrestrial geology and geophysics with almost all space and aircraft on display being originals.", "https://airandspace.si.edu", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.5664473388683!2d-77.02206194903799!3d38.88816007947194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1554077501802!5m2!1sen!2sus", "600 Independence Ave SW, Washington, DC 20560", "<span>Sun</span> 10:00AM - 5:30PM", "<span>Mon</span> 10:00AM - 5:30PM", "<span>Tue</span> 10:00AM - 5:30PM", "<span>Wed</span> 10:00AM - 5:30PM", "<span>Thu</span> 10:00AM - 5:30PM", "<span>Fri</span> 10:00AM - 5:30PM", "<span>Sat</span> 10:00AM - 5:30PM", "../images/places/items/NationalAirAndSpaceMuseum/1.jpg", "../images/places/items/NationalAirAndSpaceMuseum/2.jpg", "../images/places/items/NationalAirAndSpaceMuseum/3.jpg", "../images/places/items/NationalAirAndSpaceMuseum/4.jpg"],
		["The Pentagon", "The headquarters of the United States Department of Defense. As a symbol of the U.S. military, the phrase The Pentagon is often used as a metonym for the Department of Defense and its leadership.", "https://pentagontours.osd.mil/Tours/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3106.2765024295795!2d-77.05842847032284!3d38.87191525386652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1554078094063!5m2!1sen!2sus", "Washington, DC 22202", "<span>Sun</span> Closed", "<span>Mon</span> 9:00AM - 3:00PM", "<span>Tue</span> 9:00AM - 3:00PM", "<span>Wed</span> 9:00AM - 3:00PM", "<span>Thu</span> 9:00AM - 3:00PM", "<span>Fri</span> 9:00AM - 3:00PM", "<span>Sat</span> 9:00AM - 3:00PM", "../images/places/items/ThePentagon/1.jpg", "../images/places/items/ThePentagon/2.jpg", "../images/places/items/ThePentagon/3.jpg", "../images/places/items/ThePentagon/4.jpg"],
		["Washington National Cathedral", "An American cathedral of the Episcopal Church. It is the second largest church building in the US., seating both the Presiding Bishop of the Episcopal Church, Michael Bruce Curry, and the bishop of the Diocese of Washington, Mariann Edgar Budde.", "https://cathedral.org/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1805.9318364045596!2d-77.07081513882964!3d38.930622756626285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1554131733214!5m2!1sen!2sus", "3101 Wisconsin Ave NW, Washington, DC 20016", "<span>Sun</span> 10:00AM - 4:00PM", "<span>Mon</span> 10:00AM - 5:00PM", "<span>Tue</span> 10:00AM - 5:00PM", "<span>Wed</span> 10:00AM - 5:00PM", "<span>Thu</span> 10:00AM - 5:00PM", "<span>Fri</span> 10:00AM - 5:00PM", "<span>Sat</span> 10:00AM - 4:00PM", "../images/places/items/WashingtonNationalCathedral/1.jpg", "../images/places/items/WashingtonNationalCathedral/2.jpg", "../images/places/items/WashingtonNationalCathedral/3.jpg", "../images/places/items/WashingtonNationalCathedral/4.jpg"],
		["Korean War Veterans Memorial", "A memorial that is dedicated to the veterans who served in the Korean War, located in the West Potomac Park in DC.", "http://www.koreanwarvetsmemorial.org/the-memorial/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1508.5915357246604!2d-77.04721323896867!3d38.88754816826956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1554131281150!5m2!1sen!2sus", "900 Ohio Dr SW, Washington, DC 20024", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/places/items/KoreanWarVeteransMemorial/1.jpg", "../images/places/items/KoreanWarVeteransMemorial/2.jpg", "../images/places/items/KoreanWarVeteransMemorial/3.jpg", "../images/places/items/KoreanWarVeteransMemorial/4.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg"]
	],
	[
		// transit items - title, desc, site link, estimate link, times, images...
		["UBER", "Uber offers services including peer-to-peer ridesharing, ride service hailing, food delivery, and a bicycle-sharing system.", "https://www.uber.com/", "https://www.uber.com/fare-estimate/", "", "", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/transit/items/UBER/1.jpg", "../images/transit/items/UBER/2.jpg", "../images/transit/items/UBER/3.jpg", "../images/transit/items/UBER/4.jpg"],
		["Lyft", "An on-demand transportation company primarily providing ride-hailing services.", "https://www.lyft.com/", "https://www.lyft.com/fare-estimate", "", "", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/transit/items/Lyft/1.jpg", "../images/transit/items/Lyft/2.jpg", "../images/transit/items/Lyft/3.jpg", "../images/transit/items/Lyft/4.jpg"],
		["Metro", "The Metropolitan Area Transit Authority is the main train and bus transit service in the Washington area.", "https://www.wmata.com/", "https://www.wmata.com/", "", "", "<span>Sun</span> 8AM - 11PM (Train), 5AM - 2PM (Bus)", "<span>Mon</span> 5AM - 11:30PM (Train), 5AM - 12PM (Bus)", "<span>Tue</span> 5AM - 11:30PM (Train), 5AM - 12PM (Bus)", "<span>Wed</span> 5AM - 11:30PM (Train), 5AM - 12PM (Bus)", "<span>Thu</span> 5AM - 11:30PM (Train), 5AM - 12PM (Bus)", "<span>Fri</span> 5AM - 1PM (Train), 5AM - 12PM (Bus)", "<span>Sat</span> 7AM - 1PM (Train), 5AM - 2PM (Bus)", "../images/transit/items/Metro/1.jpg", "../images/transit/items/Metro/2.jpg", "../images/transit/items/Metro/3.jpg", "../images/transit/items/Metro/4.jpg"],
		["DC Yellow Cabs", "Yellow Cab Company of D.C. is a family owned and operated business serving the Washington Metropolitan area.", "https://dcyellowcab.com/", "https://dcyellowcab.com/fare-estimator/", "", "", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/transit/items/DCYellowCabs/1.jpg", "../images/transit/items/DCYellowCabs/2.jpg", "../images/transit/items/DCYellowCabs/3.jpg", "../images/transit/items/DCYellowCabs/4.jpg"],
		["Capital Bike Share", "Capital Bikeshare is metro DC's bikeshare service, with 4,300 bikes and 500+ stations across 6 jurisdictions.", "https://www.capitalbikeshare.com/", "https://www.capitalbikeshare.com/pricing", "", "", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/transit/items/CapitalBikeShare/1.jpg", "../images/transit/items/CapitalBikeShare/2.jpg", "../images/transit/items/CapitalBikeShare/3.jpg", "../images/transit/items/CapitalBikeShare/4.jpg"],
		["Academy Bus LLC", "This family-owned and operated business is one of the most reliable, efficient and safety-oriented motorcoach carriers in the nation's capital.", "sitelink", "estimatelink", "", "", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/transit/items/AcademyBusLLC/1.jpg", "../images/transit/items/AcademyBusLLC/2.jpg", "../images/transit/items/AcademyBusLLC/3.jpg", "../images/transit/items/AcademyBusLLC/4.jpg"],
		["Potomac Riverboat", "Potomac Riverboat Company offers narrated sightseeing cruises, water taxi service and private parties along the Potomac River.", "https://www.potomacriverboatco.com/", "https://www.potomacriverboatco.com/water-taxi/wharf/", "", "", "<span>Sun</span> 8:00AM - 11:00PM", "<span>Mon</span> 8:00AM - 11:00PM", "<span>Tue</span> 8:00AM - 11:00PM", "<span>Wed</span> 8:00AM - 11:00PM", "<span>Thu</span> 8:00AM - 11:00PM", "<span>Fri</span> 8:00AM - 11:00PM", "<span>Sat</span> 8:00AM - 11:00PM", "../images/transit/items/PotomacRiverboat/1.jpg", "../images/transit/items/PotomacRiverboat/2.jpg", "../images/transit/items/PotomacRiverboat/3.jpg", "../images/transit/items/PotomacRiverboat/4.jpg"],
		["Enterprise Holdings", "Enterprise Holdings offers extensive car rental, carsharing, retail car sales and other transportation services.", "https://www.enterprise.com", "https://www.enterprise.com/en/car-rental/locations/us/washington-dc.html", "", "", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/transit/items/EnterpriseHoldings/1.jpg", "../images/transit/items/EnterpriseHoldings/2.jpg", "../images/transit/items/EnterpriseHoldings/3.jpg", "../images/transit/items/EnterpriseHoldings/4.jpg"],
		["Big Bus Tours", "The open top bus visits the City’s most iconic landmarks and allows unlimited access to hop-on and off.", "https://www.bigbustours.com/en/washington-dc/washington-dc-bus-tours/", "https://www.bigbustours.com/en/washington-dc/washington-dc-bus-tours/", "", "", "<span>Sun</span> 9:00AM - 2:00PM", "<span>Mon</span> 9:00AM - 2:00PM", "<span>Tue</span> 9:00AM - 2:00PM", "<span>Wed</span> 9:00AM - 2:00PM", "<span>Thu</span> 9:00AM - 2:00PM", "<span>Fri</span> 9:00AM - 2:00PM", "<span>Sat</span> 9:00AM - 2:00PM", "../images/transit/items/BigBusTours/1.jpg", "../images/transit/items/BigBusTours/2.jpg", "../images/transit/items/BigBusTours/3.jpg", "../images/transit/items/BigBusTours/4.jpg"],
		["America Bus Service", "American Limousine & Bus Services Inc. offers professional and dependable transportation services to the DC metro area.", "http://americatransportation.com", "http://americatransportation.com", "", "", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/transit/items/AmericaBusService/1.jpg", "../images/transit/items/AmericaBusService/2.jpg", "../images/transit/items/AmericaBusService/3.jpg", "../images/transit/items/AmericaBusService/4.jpg"],
		["title", "desc", "sitelink", "estimatelink", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/transit/items/PLACE/1.jpg", "../images/transit/items/PLACE/2.jpg", "../images/transit/items/PLACE/3.jpg", "../images/transit/items/PLACE/4.jpg"]
	],
	[
		// attire items - title, desc, images...
		["General Sessions", "General sessions are events which invites all BPA attendees to receive some amount of information, a collective meal, or awards.", "", "", "", "", "Dress slacks, dress shirt, and tie.", "Suit, dress shirt, and tie.", "Sport coat, coordinated dress slacks, dress shirt, and tie.", "BPA blazer with dress slacks, dress shirt, and tie.", "Dress shoes and dress socks are required with all of the above.", "This excludes all denim for any of the above.", "", "Pant or skirt suit.", "Dress skirt or dress slacks with coordinated blouse and/or sweater.", "Business professional \“dress.\”", "BPA blazer with dress skirt or dress slacks and blouse or sweater.", "Dress shoes or dress sandals with heel are required with all of the above.", "Skirt length may be no greater than two inches above the top of the knee.", "This excludes all denim for any of the above.", "../images/attire/form/1.png", "../images/attire/form/2.png"],
		["Tours", "BPA offers tours of the surrounding DC area including nationally renouned memorials, museums, and other tourist attractions to give attendees opportunities to enjoy their time in Wasington DC.", "", "", "", "", "Sportswear (jeans), pants, and shirt, T-shirt, and shorts.", "Footwear required with all of the above.", "", "", "", "", "", "", "Sportswear (jeans), pants, and shirt, T-shirt, and shorts.", "Footwear required with all of the above.", "", "", "", "", "../images/attire/items/cas/1.png", "../images/attire/items/cas/2.png"],
		["Competitive Events", "One of the fundemental aspects of BPA is competition, and it is always important to look your best when competing at what you are best at!", "", "", "", "", "Dress slacks, dress shirt, and tie.", "Suit, dress shirt, and tie.", "Sport coat, coordinated dress slacks, dress shirt, and tie.", "BPA blazer with dress slacks, dress shirt, and tie.", "Dress shoes and dress socks are required with all of the above.", "This excludes all denim for any of the above.", "", "Pant or skirt suit.", "Dress skirt or dress slacks with coordinated blouse and/or sweater.", "Business professional \“dress.\”", "BPA blazer with dress skirt or dress slacks and blouse or sweater.", "Dress shoes or dress sandals with heel are required with all of the above.", "Skirt length may be no greater than two inches above the top of the knee.", "This excludes all denim for any of the above.", "../images/attire/form/1.png", "../images/attire/form/2.png"],
		["Special Events", "These special events include any sort of parties or fun activities that may be held during the conference as a way to encourage social interactions with other business professionals and just have some fun.", "", "", "", "", "Sportswear (jeans), pants, and shirt, T-shirt, and shorts.", "Footwear required with all of the above.", "", "", "", "", "", "", "Sportswear (jeans), pants, and shirt, T-shirt, and shorts.", "Footwear required with all of the above.", "", "", "", "", "../images/attire/cas/1.png", "../images/attire/cas/2.png"],
		["Campaign Rally", "Another fundemental aspect of BPA is leadership, and to promote that, we hold a campaign rally where candidates for national office give a speech about their plans to further the causes of BPA and try and win votes for themselves.", "", "", "", "", "Dress slacks, dress shirt, and tie.", "Suit, dress shirt, and tie.", "Sport coat, coordinated dress slacks, dress shirt, and tie.", "BPA blazer with dress slacks, dress shirt, and tie.", "Dress shoes and dress socks are required with all of the above.", "This excludes all denim for any of the above.", "", "Pant or skirt suit.", "Dress skirt or dress slacks with coordinated blouse and/or sweater.", "Business professional \“dress.\”", "BPA blazer with dress skirt or dress slacks and blouse or sweater.", "Dress shoes or dress sandals with heel are required with all of the above.", "Skirt length may be no greater than two inches above the top of the knee.", "This excludes all denim for any of the above.", "../images/attire/items/form/1.png", "../images/attire/items/form/2.png"],
		["Exhibit Hall", "BPA's Exhibit Hall gives young business professionals the opportunity to seek out colleges and employers which suit their interests.", "", "", "", "", "Sportswear (jeans), pants, and shirt, T-shirt, and shorts.", "Footwear required with all of the above.", "", "", "", "", "", "", "Sportswear (jeans), pants, and shirt, T-shirt, and shorts.", "Footwear required with all of the above.", "", "", "", "", "../images/attire/cas/1.png", "../images/attire/cas/2.png"],
		["Caucuses", "In order to ensure the BPA student leadership accurately represents those attending, we let the BPA attendees vote on who their representatives individually to make sure that everyone's voice is heard.", "", "", "", "", "Dress slacks, dress shirt, and tie.", "Suit, dress shirt, and tie.", "Sport coat, coordinated dress slacks, dress shirt, and tie.", "BPA blazer with dress slacks, dress shirt, and tie.", "Dress shoes and dress socks are required with all of the above.", "This excludes all denim for any of the above.", "", "Pant or skirt suit.", "Dress skirt or dress slacks with coordinated blouse and/or sweater.", "Business professional \“dress.\”", "BPA blazer with dress skirt or dress slacks and blouse or sweater.", "Dress shoes or dress sandals with heel are required with all of the above.", "Skirt length may be no greater than two inches above the top of the knee.", "This excludes all denim for any of the above.", "../images/attire/form/1.png", "../images/attire/form/2.png"],
		["Workshops", "Workshops are just another way that BPA helps students to improve their professionalism skills and pursue interests further.", "", "", "", "", "Dress slacks, dress shirt, and tie.", "Suit, dress shirt, and tie.", "Sport coat, coordinated dress slacks, dress shirt, and tie.", "BPA blazer with dress slacks, dress shirt, and tie.", "Dress shoes and dress socks are required with all of the above.", "This excludes all denim for any of the above.", "", "Pant or skirt suit.", "Dress skirt or dress slacks with coordinated blouse and/or sweater.", "Business professional \“dress.\”", "BPA blazer with dress skirt or dress slacks and blouse or sweater.", "Dress shoes or dress sandals with heel are required with all of the above.", "Skirt length may be no greater than two inches above the top of the knee.", "This excludes all denim for any of the above.", "../images/attire/form/1.png", "../images/attire/form/2.png"],
		["National Leadership Academy", "Partnerning with ULEAD, BPA will be providing an opportunity for students to learn more about personal branding, making ethical decisions, and the art and science of collaboration.", "", "", "", "", "Dress slacks, dress shirt, and tie.", "Suit, dress shirt, and tie.", "Sport coat, coordinated dress slacks, dress shirt, and tie.", "BPA blazer with dress slacks, dress shirt, and tie.", "Dress shoes and dress socks are required with all of the above.", "This excludes all denim for any of the above.", "", "Pant or skirt suit.", "Dress skirt or dress slacks with coordinated blouse and/or sweater.", "Business professional \“dress.\”", "BPA blazer with dress skirt or dress slacks and blouse or sweater.", "Dress shoes or dress sandals with heel are required with all of the above.", "Skirt length may be no greater than two inches above the top of the knee.", "This excludes all denim for any of the above.", "../images/attire/form/1.png", "../images/attire/form/2.png"]
	]
];


function loaditem(itemtype, item)
{
	currentItemType = itemtype; // set the current item type to passed in item type for unloading later

	for (var i in items[itemtype]) // go through every item in item type
	{
		if (items[itemtype][i][0] == item) // check to see if it is the wanted item
		{
			// load item's title, desc, buttons, 
			itempage.getElementsByTagName("h1")[0].innerHTML = items[itemtype][i][0];
			itempage.getElementsByTagName("p")[0].innerHTML = items[itemtype][i][1];
			if (currentItemType == 0 || currentItemType == 1 || currentItemType == 2)
			{
				itempage.getElementsByTagName("a")[0].href = items[itemtype][i][2];
			}
			if (currentItemType == 0 || currentItemType == 2)
				itempage.getElementsByTagName("a")[1].href = items[itemtype][i][3];

			// load maps and address info
			if (currentItemType == 0 || currentItemType == 1)
			{
				itempage.getElementsByTagName("iframe")[0].src = items[itemtype][i][4];
				itempage.getElementsByTagName("span")[0].innerHTML = items[itemtype][i][5];
			}

			// load dropdown menus info
			if (currentItemType == 0 || currentItemType == 1 || currentItemType == 2)
			{
				for (var x = 0; x <= 6; x++)
				{
					itemhours.getElementsByTagName("li")[x].innerHTML = items[itemtype][i][x + 6];
				}

				// load item's images
				for (var j = 13; j <= items[itemtype][i].length-1; j++)
				{
					var img = document.createElement("img");
					img.setAttribute("src", items[itemtype][i][j]);
					document.getElementById("item-gallery").appendChild(img);
				}
			}
			else
			{
				for (var x = 0; x <= 6; x++)
				{
					itemdresscodeM.getElementsByTagName("li")[x].innerHTML = items[itemtype][i][x + 6];
				}
				for (var x = 0; x <= 6; x++)
				{
					itemdresscodeF.getElementsByTagName("li")[x].innerHTML = items[itemtype][i][x + 13];
				}

				// load item's images
				for (var j = 20; j <= items[itemtype][i].length-1; j++)
				{
					var img = document.createElement("img");
					img.setAttribute("src", items[itemtype][i][j]);
					document.getElementById("item-gallery").appendChild(img);
				}
			}
		}
	}

	// show item page and slide it up
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	itempage.style.display = "block";
	itempage.style.animation = "itempage-slide-in " + .5 + "s ease-in-out";
}

function d_loaditem(itemtype, item)
{
	hideitem();
	currentItemType = itemtype; // set the current item type to passed in item type for unloading later

	for (var i in items[itemtype]) // go through every item in item type
	{
		if (items[itemtype][i][0] == item) // check to see if it is the wanted item
		{
			// load item's title, desc, buttons, 
			d_itempage.getElementsByTagName("h1")[0].innerHTML = items[itemtype][i][0];
			d_itempage.getElementsByTagName("p")[0].innerHTML = items[itemtype][i][1];
			if (currentItemType == 0 || currentItemType == 1 || currentItemType == 2)
			{
				d_itempage.getElementsByTagName("a")[0].href = items[itemtype][i][2];
			}
			if (currentItemType == 0 || currentItemType == 2)
				d_itempage.getElementsByTagName("a")[1].href = items[itemtype][i][3];

			// load maps and address info
			if (currentItemType == 0 || currentItemType == 1)
			{
				d_itempage.getElementsByTagName("iframe")[0].src = items[itemtype][i][4];
				d_itempage.getElementsByTagName("span")[0].innerHTML = items[itemtype][i][5];
			}

			// load dropdown menus info
			if (currentItemType == 0 || currentItemType == 1 || currentItemType == 2)
			{
				for (var x = 0; x <= 6; x++)
				{
					d_itemhours.getElementsByTagName("li")[x].innerHTML = items[itemtype][i][x + 6];
				}

				// load item's images
				for (var j = 13; j <= items[itemtype][i].length-1; j++)
				{
					var img = document.createElement("img");
					img.setAttribute("src", items[itemtype][i][j]);
					document.getElementById("d-item-gallery").appendChild(img);
				}
			}
			else
			{
				for (var x = 0; x <= 6; x++)
				{
					d_itemdresscodeM.getElementsByTagName("li")[x].innerHTML = items[itemtype][i][x + 6];
				}
				for (var x = 0; x <= 6; x++)
				{
					d_itemdresscodeF.getElementsByTagName("li")[x].innerHTML = items[itemtype][i][x + 13];
				}

				// load item's images
				for (var j = 20; j <= items[itemtype][i].length-1; j++)
				{
					var img = document.createElement("img");
					img.setAttribute("src", items[itemtype][i][j]);
					document.getElementById("d-item-gallery").appendChild(img);
				}
			}
		}
	}

	// show item page and slide it up
	d_itempage.style.display = "block";
}

function hideitem()
{
	// slide item page down and hide it
	itempage.style.animation = "itempage-slide-out " + .25 + "s ease-in-out";
	setTimeout(function()
	{
		document.getElementsByTagName("body")[0].style.overflow = "auto";
		itempage.style.display = "none";
	}, 240);

	// unload item's title, desc, buttons, maps, and address info
	itempage.getElementsByTagName("h1")[0].innerHTML = "";
	itempage.getElementsByTagName("p")[0].innerHTML = "";

	if (currentItemType == 0 || currentItemType == 1 || currentItemType == 2)
		itempage.getElementsByTagName("a")[0].href = "";
	
	d_itempage.getElementsByTagName("h1")[0].innerHTML = "";
	d_itempage.getElementsByTagName("p")[0].innerHTML = "";
	d_itempage.getElementsByTagName("a")[0].href = "";
	if (currentItemType == 0 || currentItemType == 2)
	{
		itempage.getElementsByTagName("a")[1].href = "";
		d_itempage.getElementsByTagName("a")[1].href = "";
	}
	if (currentItemType == 0 || currentItemType == 1)
	{
		itempage.getElementsByTagName("iframe")[0].src = "";
		itempage.getElementsByTagName("span")[0].innerHTML = "";
		d_itempage.getElementsByTagName("iframe")[0].src = "";
		d_itempage.getElementsByTagName("span")[0].innerHTML = "";
	}

	// unload "Hour Open" info
	for (var x = 0; x <= 6; x++)
	{
		itemhours.getElementsByTagName("li")[x].innerHTML = "";
		d_itemhours.getElementsByTagName("li")[x].innerHTML = "";
	}
	
	// unload item's images
	var oldimages = itemgallery.getElementsByTagName("img");
	for (var oldimage = oldimages.length - 1; oldimage >= 0; oldimage--)
	{
		oldimages[oldimage].parentNode.removeChild(oldimages[oldimage]);
	}
	oldimages = d_itemgallery.getElementsByTagName("img");
	for (var oldimage = oldimages.length - 1; oldimage >= 0; oldimage--)
	{
		oldimages[oldimage].parentNode.removeChild(oldimages[oldimage]);
	}
	
	// close drop down menu if open
	if (hoursopen)
	{
		hoursopen = false;
		hoursopendropdown.style.transform = "rotate(0deg)";
		itemhours.getElementsByTagName("ul")[0].style.display = "none";
		d_hoursopendropdown.style.transform = "rotate(0deg)";
		d_itemhours.getElementsByTagName("ul")[0].style.display = "none";
	}
	if (dresscodeMopen)
	{
		dresscodeMopen = false;
		dresscodeMdropdown.style.transform = "rotate(0deg)";
		itemdresscodeM.getElementsByTagName("ul")[0].style.display = "none";
		d_dresscodeMdropdown.style.transform = "rotate(0deg)";
		d_itemdresscodeM.getElementsByTagName("ul")[0].style.display = "none";
	}
	if (dresscodeFopen)
	{
		dresscodeFopen = false;
		dresscodeFdropdown.style.transform = "rotate(0deg)";
		itemdresscodeF.getElementsByTagName("ul")[0].style.display = "none";
		d_dresscodeFdropdown.style.transform = "rotate(0deg)";
		d_itemdresscodeF.getElementsByTagName("ul")[0].style.display = "none";
	}
}


function openclosedropmenu(menu)
{
	// when the hours open text is clicked it will open if the info isn't already open
	// if it is already open it will instead close it
	if (menu == "hours")
	{
		if (hoursopen)
		{
			hoursopen = false;
			hoursopendropdown.style.transform = "rotate(0deg)";
			itemhours.getElementsByTagName("ul")[0].style.display = "none";
		}
		else
		{
			hoursopen = true;
			hoursopendropdown.style.transform = "rotate(90deg)";
			itemhours.getElementsByTagName("ul")[0].style.display = "block";
		}
	}
	else if (menu == "dresscodeM")
	{
		if (dresscodeMopen)
		{
			dresscodeMopen = false;
			dresscodeMdropdown.style.transform = "rotate(0deg)";
			itemdresscodeM.getElementsByTagName("ul")[0].style.display = "none";
		}
		else
		{
			dresscodeMopen = true;
			dresscodeMdropdown.style.transform = "rotate(90deg)";
			itemdresscodeM.getElementsByTagName("ul")[0].style.display = "block";
		}
	}
	else if (menu == "dresscodeF")
	{
		if (dresscodeFopen)
		{
			dresscodeFopen = false;
			dresscodeFdropdown.style.transform = "rotate(0deg)";
			itemdresscodeF.getElementsByTagName("ul")[0].style.display = "none";
			console.log(itemdresscodeF.getElementsByTagName("ul")[0].style.display);
		}
		else if (!dresscodeFopen)
		{
			dresscodeFopen = true;
			dresscodeFdropdown.style.transform = "rotate(90deg)";
			itemdresscodeF.getElementsByTagName("ul")[0].style.display = "block";
			console.log(itemdresscodeF.getElementsByTagName("ul")[0]);
		}
	}
}


function d_openclosedropmenu(menu)
{
	// when the hours open text is clicked it will open if the info isn't already open
	// if it is already open it will instead close it
	if (menu == "hours")
	{
		if (hoursopen)
		{
			hoursopen = false;
			d_hoursopendropdown.style.transform = "rotate(0deg)";
			d_itemhours.getElementsByTagName("ul")[0].style.display = "none";
		}
		else
		{
			hoursopen = true;
			d_hoursopendropdown.style.transform = "rotate(90deg)";
			d_itemhours.getElementsByTagName("ul")[0].style.display = "block";
		}
	}
	else if (menu == "dresscodeM")
	{
		if (dresscodeMopen)
		{
			dresscodeMopen = false;
			d_dresscodeMdropdown.style.transform = "rotate(0deg)";
			d_itemdresscodeM.getElementsByTagName("ul")[0].style.display = "none";
		}
		else
		{
			dresscodeMopen = true;
			d_dresscodeMdropdown.style.transform = "rotate(90deg)";
			d_itemdresscodeM.getElementsByTagName("ul")[0].style.display = "block";
		}
	}
	else if (menu == "dresscodeF")
	{
		if (dresscodeFopen)
		{
			dresscodeFopen = false;
			d_dresscodeFdropdown.style.transform = "rotate(0deg)";
			d_itemdresscodeF.getElementsByTagName("ul")[0].style.display = "none";
		}
		else if (!dresscodeFopen)
		{
			dresscodeFopen = true;
			d_dresscodeFdropdown.style.transform = "rotate(90deg)";
			d_itemdresscodeF.getElementsByTagName("ul")[0].style.display = "block";
		}
	}
}


window.onload = function() // run when the page is ready
{
	// set commonly used script variables
	itempage = document.getElementById('item-info');
	itemgallery = document.getElementById("item-gallery");
	itemaddress = document.getElementById("item-address");
	itemhours = document.getElementById("item-hours");
	itemdresscodeM = document.getElementById("item-dresscode-m");
	itemdresscodeF = document.getElementById("item-dresscode-f");
	hoursopendropdown = document.getElementById("item-hours-arrow")
	dresscodeMdropdown = document.getElementById("dresscodeM-arrow")
	dresscodeFdropdown = document.getElementById("dresscodeF-arrow")

	d_itempage = document.getElementById('d-item-info');
	d_itemgallery = document.getElementById("d-item-gallery");
	d_itemaddress = document.getElementById("d-item-address");
	d_itemhours = document.getElementById("d-item-hours");
	d_itemdresscodeM = document.getElementById("d-item-dresscode-m");
	d_itemdresscodeF = document.getElementById("d-item-dresscode-f");
	d_hoursopendropdown = document.getElementById("d-item-hours-arrow")
	d_dresscodeMdropdown = document.getElementById("d-dresscodeM-arrow")
	d_dresscodeFdropdown = document.getElementById("d-dresscodeF-arrow")
}