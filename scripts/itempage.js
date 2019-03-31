var itempage, itemgallery, itemextrainfo, hoursopendropdown, hoursopen, currentItemType;
var items = 
[
	[
		// food items - title, desc, site link, map, location, times, images...
		['Old Ebbitt Grill', 'Iconic tavern offering American meals, including popular oyster specials, in Victorian-style digs.', 'https://www.ebbitt.com/', 'https://www.ebbitt.com/menus/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1343824091286!2d-77.03544908523939!3d38.898042179570545!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553614542800', '675 15th St NW Washington, DC 20005', '<span>Sun</span> 8:30AM - 2AM', '<span>Mon</span> 7:30AM - 2AM', '<span>Tue</span> 7:30AM - 2AM', '<span>Wed</span> 7:30AM - 2AM', '<span>Thu</span> 7:30AM - 3AM', '<span>Fri</span> 7:30AM - 3AM', '<span>Sat</span> 8:30AM - 3AM', '../images/food/items/OldEbbittGrill/1.jpg', '../images/food/items/OldEbbittGrill/2.jpg', '../images/food/items/OldEbbittGrill/3.jpg', '../images/food/items/OldEbbittGrill/4.jpg', '../images/food/items/OldEbbittGrill/5.jpg'],
		['Founding Farmers DC', 'Co-op-owned American eatery dishing out market-driven comfort cuisine along with rustic-chic style.', 'https://www.wearefoundingfarmers.com/', 'https://www.wearefoundingfarmers.com/menus/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1305.5068409301718!2d-77.04520954436336!3d38.90029097254082!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553616507715', '1924 Pennsylvania Ave NW, Washington, DC 20006', '<span>Sun</span> 8:30AM - 10PM', '<span>Mon</span> 7AM - 10PM', '<span>Tue</span> 7AM - 11PM', '<span>Wed</span> 7AM - 11PM', '<span>Thu</span> 7AM - 11PM', '<span>Fri</span> 7AM - 12AM', '<span>Sat</span> 8:30AM - 12AM', '../images/food/items/FoundingFarmersDC/1.jpg', '../images/food/items/FoundingFarmersDC/2.jpg', '../images/food/items/FoundingFarmersDC/3.jpg', '../images/food/items/FoundingFarmersDC/4.jpg', '../images/food/items/FoundingFarmersDC/5.jpg'],
		['Zaytinya DC', 'Chef José Andrés\' light, airy mainstay offers Eastern Mediterranean small plates & regional wines.', 'https://www.zaytinya.com/', 'https://www.zaytinya.com/menu/washington-dc/', 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.1036729506463!2d-77.02587268523934!3d38.89874447957046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553615547476', '701 9th St NW, Washington, DC 20001', '<span>Sun</span> 11AM - 10PM', '<span>Mon</span> 11AM - 10PM', '<span>Tue</span> 11AM - 11PM', '<span>Wed</span> 11AM - 11PM', '<span>Thu</span> 11AM - 11PM', '<span>Fri</span> 11AM - 12AM', '<span>Sat</span> 11AM - 10AM', 'images/food/items/ZaytinyaDC/1.jpg', '../images/food/items/ZaytinyaDC/2.jpg', '../images/food/items/ZaytinyaDC/3.jpg', '../images/food/items/ZaytinyaDC/4.jpg', '../images/food/items/ZaytinyaDC/5.jpg'],
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
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/food/items/NAME/1.jpg", "../images/food/items/NAME/2.jpg", "../images/food/items/NAME/3.jpg", "../images/food/items/NAME/4.jpg", "../images/food/items/NAME/5.jpg"]
	],
	[
		// place items - title, desc, site link, map, location, times, images...
		["United States Capitol", "Home of the United States Congress and the seat of the legislative branch of the U.S. federal government.", "https://www.visitthecapitol.gov/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.48868150801!2d-77.01124454886515!3d38.88993887947166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553961458941!5m2!1sen!2sus", "First St SE, Washington, DC 20004", "<span>Sun</span> Closed", "<span>Mon</span> 8:30AM - 4:30PM", "<span>Tue</span> 8:30AM - 4:30PM", "<span>Wed</span> 8:30AM - 4:30PM", "<span>Thu</span> 8:30AM - 4:30PM", "<span>Fri</span> 8:30AM - 4:30PM", "<span>Sat</span> 8:30AM - 4:30PM", "../images/places/items/UnitedStatesCapitol/1.jpg", "../images/places/items/UnitedStatesCapitol/2.jpg", "../images/places/items/UnitedStatesCapitol/3.jpg", "../images/places/items/UnitedStatesCapitol/4.jpg"],
		["Lincoln Memorial", "American national monument built to honor the 16th President of the United States, Abraham Lincoln.", "https://washington.org/dc-guide-to/lincoln-memorial", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.517986129997!2d-77.05237004892274!3d38.88926857947168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553962334779!5m2!1sen!2sus", "2 Lincoln Memorial Cir NW, Washington, DC 20037", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/places/items/LincolnMemorial/1.jpg", "../images/places/items/LincolnMemorial/2.jpg", "../images/places/items/LincolnMemorial/3.jpg", "../images/places/items/LincolnMemorial/4.jpg"],
		["Washington Monument", "An obelisk to commemorate George Washington, first US President and once commander-in-chief of the Continental Army.", "https://www.nps.gov/wamo/planyourvisit/basicinfo.htm", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.5098741652673!2d-77.03735477091953!3d38.88945412967185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553979253139!5m2!1sen!2sus", "2 15th St NW, Washington, DC 20024", "<span>Sun</span> 9:00AM - 5:00PM", "<span>Mon</span> 9:00AM - 5:00PM", "<span>Tue</span> 9:00AM - 5:00PM", "<span>Wed</span> 9:00AM - 5:00PM", "<span>Thu</span> 9:00AM - 5:00PM", "<span>Fri</span> 9:00AM - 5:00PM", "<span>Sat</span> 9:00AM - 5:00PM", "../images/places/items/WashingtonMonument/1.jpg", "../images/places/items/WashingtonMonument/2.jpg", "../images/places/items/WashingtonMonument/3.jpg", "../images/places/items/WashingtonMonument/4.jpg"],
		["The White House", "The official residence and workplace of the President of the United States since John Adams in 1800.", "https://www.whitehouse.gov/about-the-white-house/the-white-house/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.150381930867!2d-77.03872384979644!3d38.897676279470346!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553980916170!5m2!1sen!2sus", "1600 Pennsylvania Ave NW, Washington, DC 20500", "<span>Sun</span> Closed", "<span>Mon</span> Closed", "<span>Tue</span> 7:30AM - 11:30AM", "<span>Wed</span> 7:30AM - 11:30AM", "<span>Thu</span> 7:30AM - 11:30AM", "<span>Fri</span> 7:30AM - 1:30PM", "<span>Sat</span> 7:30AM - 1:30PM", "../images/places/items/TheWhiteHouse/1.jpg", "../images/places/items/TheWhiteHouse/2.jpg", "../images/places/items/TheWhiteHouse/3.jpg", "../images/places/items/TheWhiteHouse/4.jpg"],
		["The Jefferson Memorial", "A memorial dedicated to Thomas Jefferson: American Founding Father, main author of the Declaration of Independence, and third President of the United States.", "https://washington.org/dc-guide-to/jefferson-memorial", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.8628070372097!2d-77.03864764979707!3d38.8813805794729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553988321206!5m2!1sen!2sus", "701 E Basin Dr SW, Washington, DC 20242", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/places/items/ThomasJeffersonMemorial/1.jpg", "../images/places/items/ThomasJeffersonMemorial/2.jpg", "../images/places/items/ThomasJeffersonMemorial/3.jpg", "../images/places/items/ThomasJeffersonMemorial/4.jpg"],
		["National Gallery of Art", "A national art museum open to the public and free of charge which contrains works from Leonardo da Vinci, Andrew W. Mellon, Paul Mellon, etc.", "https://www.nga.gov/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.429262185593!2d-77.02215904970737!3d38.891297978980546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553989322239!5m2!1sen!2sus", "Constitution Ave NW, Washington, DC 20565", "<span>Sun</span> 11:00AM - 6:00PM", "<span>Mon</span> 10:00AM - 5:00PM", "<span>Tue</span> 10:00AM - 5:00PM", "<span>Wed</span> 10:00AM - 5:00PM", "<span>Thu</span> 10:00AM - 5:00PM", "<span>Fri</span> 10:00AM - 5:00PM", "<span>Sat</span> 10:00AM - 5:00PM", "../images/places/items/NationalGalleryOfArt/1.jpg", "../images/places/items/NationalGalleryOfArt/2.jpg", "../images/places/items/NationalGalleryOfArt/3.jpg", "../images/places/items/NationalGalleryOfArt/4.jpg"],
		["Arlington National Cemetary", "A cemetery in whose 624 acres the dead of the nation's conflicts have been buried, beginning with the Civil War and transferred dead from earlier wars.", "https://www.arlingtoncemetery.mil/#/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.9963568644594!2d-77.0708650497972!3d38.878325179473244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553990344619!5m2!1sen!2sus", "Arlington, VA 22211", "<span>Sun</span> 8:00AM - 7:00PM", "<span>Mon</span> 8:00AM - 7:00PM", "<span>Tue</span> 8:00AM - 7:00PM", "<span>Wed</span> 8:00AM - 7:00PM", "<span>Thu</span> 8:00AM - 7:00PM", "<span>Fri</span> 8:00AM - 7:00PM", "<span>Sat</span> 8:00AM - 7:00PM", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["Smithsonian National Zoo", 'One of the oldest zoos in the US, founded with the mission to "provide engaging experiences with animals and create/share knowledge to save wildlife and habitats."', "https://nationalzoo.si.edu/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3103.7533120575363!2d-77.05197844979519!3d38.929615579465256!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553991070205!5m2!1sen!2sus", "3001 Connecticut Ave NW, Washington, DC 20008", "<span>Sun</span> 8:00AM - 5:00PM", "<span>Mon</span> 8:00AM - 5:00PM", "<span>Tue</span> 8:00AM - 5:00PM", "<span>Wed</span> 8:00AM - 5:00PM", "<span>Thu</span> 8:00AM - 5:00PM", "<span>Fri</span> 8:00AM - 5:00PM", "<span>Sat</span> 8:00AM - 5:00PM", "../images/places/items/SmithsonianNationalZoo/1.jpg", "../images/places/items/SmithsonianNationalZoo/2.jpg", "../images/places/items/SmithsonianNationalZoo/3.jpg", "../images/places/items/SmithsonianNationalZoo/4.jpg"],
		["Vietnam Veterans Memorial", "A memorial honoring then U.S. armed forces members who fought, who were killed, and who were unaccounted for in the Vietnam War.", "http://thewall-usa.com/", "", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.4294676493873!2d-77.04990724979665!3d38.89129327947138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!3m2!1sen!2sus!4v1553992593363!5m2!1sen!2sus", "5 Henry Bacon Dr NW, Washington, DC 20245", "<span>Sun</span> All Day", "<span>Mon</span> All Day", "<span>Tue</span> All Day", "<span>Wed</span> All Day", "<span>Thu</span> All Day", "<span>Fri</span> All Day", "<span>Sat</span> All Day", "../images/places/items/VietnamVeteransMemorial/1.jpg", "../images/places/items/VietnamVeteransMemorial/2.jpg", "../images/places/items/VietnamVeteransMemorial/3.jpg", "../images/places/items/VietnamVeteransMemorial/4.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
		["", "", "", "", "", "", "<span>Sun</span> ", "<span>Mon</span> ", "<span>Tue</span> ", "<span>Wed</span> ", "<span>Thu</span> ", "<span>Fri</span> ", "<span>Sat</span> ", "../images/places/items/NAME/1.jpg", "../images/places/items/NAME/2.jpg", "../images/places/items/NAME/3.jpg", "../images/places/items/NAME/4.jpg", "../images/places/items/NAME/5.jpg"],
	]
	
	// GOOGLE MAP LINE: Remove 1m2! to !5e0! from link
];



function loaditem(itemtype, item)
{
	currentItemType = itemtype;
	// load item page info
	for (var i in items[itemtype])
	{
		if (items[itemtype][i][0] == item)
		{
			itempage.getElementsByTagName("h1")[0].innerHTML = items[itemtype][i][0];
			itempage.getElementsByTagName("p")[0].innerHTML = items[itemtype][i][1];
			itempage.getElementsByTagName("a")[0].href = items[itemtype][i][2];
			if (currentItemType == 0)
			{
				itempage.getElementsByTagName("a")[1].href = items[itemtype][i][3];
			}
			itempage.getElementsByTagName("iframe")[0].src = items[itemtype][i][4];
			itempage.getElementsByTagName("span")[0].innerHTML = items[itemtype][i][5];
			itemextrainfo.getElementsByTagName("li")[0].innerHTML = items[itemtype][i][6];
			itemextrainfo.getElementsByTagName("li")[1].innerHTML = items[itemtype][i][7];
			itemextrainfo.getElementsByTagName("li")[2].innerHTML = items[itemtype][i][8];
			itemextrainfo.getElementsByTagName("li")[3].innerHTML = items[itemtype][i][9];
			itemextrainfo.getElementsByTagName("li")[4].innerHTML = items[itemtype][i][10];
			itemextrainfo.getElementsByTagName("li")[5].innerHTML = items[itemtype][i][11];
			itemextrainfo.getElementsByTagName("li")[6].innerHTML = items[itemtype][i][12];

			for (var j = 13; j <= items[itemtype][i].length-1; j++)
			{
				var img = document.createElement("img");
				img.setAttribute("src", items[itemtype][i][j]);
				document.getElementById("item-gallery").appendChild(img);
			}
		}
	}

	// show item page and slide it up
	document.getElementsByTagName("body")[0].style.overflow = "hidden";
	itempage.style.display = "block";
	itempage.style.animation = "itempage-slide-in " + .5 + "s ease-in-out";
}

function hideitem()
{
	// slide item page down and hide it
	itempage.style.animation = "itempage-slide-out " + .25 + "s ease-in-out";
	setTimeout(function()
	{
		document.getElementsByTagName("body")[0].style.overflow = "auto"
		itempage.style.display = "none";
	}, 240);

	// unload item page' info
	itempage.getElementsByTagName("h1")[0].innerHTML = "";
	itempage.getElementsByTagName("p")[0].innerHTML = "";
	itempage.getElementsByTagName("a")[0].href = "";
	if (currentItemType == 0)
	{
		itempage.getElementsByTagName("a")[1].href = "";
	}
	itempage.getElementsByTagName("iframe")[0].src = "";
	itempage.getElementsByTagName("span")[0].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[0].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[1].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[2].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[3].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[4].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[5].innerHTML = "";
	itemextrainfo.getElementsByTagName("li")[6].innerHTML = "";
	var oldimages = itemgallery.getElementsByTagName("img");
	for (var oldimage = oldimages.length - 1; oldimage >= 0; oldimage--)
	{
		oldimages[oldimage].parentNode.removeChild(oldimages[oldimage]);
	}
	// close drop down menu if open
	if (hoursopen)
	{
		hoursopen = false;
		hoursopendropdown.style.transform = "rotate(0deg)";
		itemextrainfo.getElementsByTagName("ul")[0].style.display = "none";
	}
}


function openclosedropmenu()
{
	if (hoursopen)
	{
		hoursopen = false;
		hoursopendropdown.style.transform = "rotate(0deg)";
		itemextrainfo.getElementsByTagName("ul")[0].style.display = "none";
	}
	else
	{
		hoursopen = true;
		hoursopendropdown.style.transform = "rotate(90deg)";
		itemextrainfo.getElementsByTagName("ul")[0].style.display = "block";
	}
}


// run when the page is ready
window.onload = function()
{
	itempage = document.getElementById('item-info');
	itemgallery = document.getElementById("item-gallery");
	itemextrainfo = itempage.getElementsByTagName("li")[1];
	hoursopendropdown = document.getElementById("item-hours-arrow")
}