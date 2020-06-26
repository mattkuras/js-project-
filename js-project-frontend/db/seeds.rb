# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

user_list = [
    ["Matt", "12345"],
    ["Hannah", "12345"],
    ["Lauren", "12345"],
    ["Lou", "12345"],
    ["Shamar", "12345"],
    ["Sarah", "12345"],
    ["Bryan", "12345"],
]

user_list.each do |name, password|
    User.create(name: name, password: password)
end

trip_descriptions = [
    ["Jersey shore nightlife isn’t all about big hair and Bon Jovi. Some beach towns are rather sleepy, but some go freakin’ nuts. Wall-to-wall clubs and crazy bar scenes in Seaside Heights, Atlantic City and Wildwood are fronted by classic boardwalks with amusements and pizza pie. If you’ve never experienced a New Jersey boardwalk, think sleazy mall with greasy food court and creepy carnival — complete with cheesy games of chance, and state-of-the-art amusement park features — all rolled into one. That’s not to mention that this whole circus runs parallel to the beach, with amusement piers and hairball rides often situated directly over the surf."],
    ["Located in the farthest northwest corner of NJ, this park packs in plenty of views even without doing a hike. This is a popular area so don’t expect solitude in the monument/lake areas.
        In addition to the trail network, there is High Point Monument, a memorial to NJ veterans that also marks the highest elevation in the state of NJ, at 1803’.
        The monument is hollow like the Washington Monument, and the obelisk’s 220 stairs can be climbed for a view of the surrounding areas (open seasonally).
        For those who aren’t keen on heights or climbing steps in towers: the first short flight is a spiral stair with open grated steps that leads to a large landing; after that is a narrow staircase with closed steps."],
    ["There are three access locations in the state park: at Dover Forge off Dover Road/CR 618; at
        Ore Pond off Pinewald-Keswick Road/CR 618; and at the White Bridge in Double Trouble
        Village. Parking is available near the creek at Dover Forge and Ore Pond. The White Bridge
        Cedar Creek Access location at Double Trouble Village is restricted to walk-in use. Canoes and
        kayaks must be carried to the White Bridge from the Village parking area, a distance of
        approximately 1/4 of a mile. Vehicles are not permitted to drive through Double Trouble
        Village. Tubing, rafting and swimming are prohibited at Double Trouble State Park. Canoes
        and kayaks are not available for rent at the park. Downstream of the Garden State Parkway
        bridge is outside Double Trouble State Park – local ordinances apply."],
        ["Group Campsites: Four group sites with a clivus restroom. Water is not available at campsites; it must be carried from the main office building. Open April 1 to October 31. Campsite 1 accommodates up to 15 people. Fee: NJ Resident $30 per night; Non Resident $60 per night. Campsite 2 accommodates up to 35 people. Fee: NJ Resident $70 per night; Non Resident $140 per night. Campsite 3 accommodates up to 25 people. Fee: NJ Resident $50 per night; Non Resident $100 per night. Campsite 4 accommodates up to 10 people. Fee: NJ Resident $20 per night; Non Resident $40 per night. Firewood available for purchase at park office."],
        ["For the ultimate New Jersey fishing experience, get out on the open water, and catch something big, exciting and picture worthy with a day of sport fishing. Choose from an array of deep sea charters, many of which offer daytime and overnight trips, as well as the chance to reel in saltwater fish that you’ve only ordered at restaurants — everything from tuna and sea bass to Pollock and blackfish. Looking for some saltwater fishing with a more laid back vibe? Cast a line off one of the nearby fishing piers, such as Ventor City Fishing Pier or the new fishing pier at Atlantic Highlands Municipal Harbor."],
        ["This area has something for everyone. single track, good climbs, forest roads river trails. you share the area with horseback riders and hiker but it's mostly other mountain bikers. There is miles and miles of trails, when you get lost (everyone does) south is hospital road, north is Atlantic ave, east is the Manasquan river and west is county road 549. Great place to ride."],
        ["This is a wonderful waterside run in Hoboken, with great views of the Hudson River and the Manhattan skyline. This former industrial port has transformed in recent years, with the Hudson River Waterfront Walkway connecting several green spaces, and hip bars, restaurants, and shops lining Frank Sinatra Drive and Washington St."]
]


trip_list = [
    ["Surf Island Beach State Park", "img_url", trip_descriptions[0], "All Seasons", " 4 Stars", 1 ],
    ["Hike High Point State Park", "img_url", trip_descriptions[1], "spring, summer, fall" "5 Stars", 2],
    ["Kayak Double Trouble State Park", "img_url", trip_descriptions[2], "spring, summer" "3 Stars", 3],
    ["Camp at Wawayanda State Park", "img_url", trip_descriptions[3], "summer", "5 Stars", 4],
    ["Fish the Jersey Shore", "img_url", trip_descriptions[4], "spring, summer, fall", "3 Stars", 5],
    ["Mountain Bike Allaire State Park", "img_url", trip_descriptions[5], "summer, spring, fall", "3 Stars", 6],
    ["Run the Hoboken Waterfront", "img_url", trip_descriptions[6], "All Seasons", "2 Stars", 7]
]

trip_list.each do |name, img, description, season, rating, user_id|
    Trip.create(name: name, photos: img, description: description, season: season, rating: rating, user_id: user_id)
end

activs = [
    ["Surfing", 1, 1],
    ["Running", 7, 7],
    ["Camping", 4, 4],
    ["Mountain Biking", 6, 6],
    ["Fishing", 4, 4],
    ["Hiking", 2, 2],
    ["Kayaking", 3, 3]
]

activs.each do |name, user_id, trip_id|
    Activity.create(name: name, user_id: user_id, trip_id: trip_id)
end

locations = [
    "Seaside Park",
    "Hoboken",
    "Vernon Township",
    "Wall Township",
    "Point Pleasant",
    "Wantage",
    "Forked River"
]

locations.each do |l|
    Location.create(city: l)
end