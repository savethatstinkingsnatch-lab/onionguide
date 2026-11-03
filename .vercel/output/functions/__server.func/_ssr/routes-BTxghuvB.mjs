import { i as __toESM } from "../_runtime.mjs";
import { K as require_react, b as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Bookmark, i as Check, r as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BTxghuvB.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var DAY_GROUPS = [
	{
		id: "long",
		label: "Long summer days",
		hint: "North of about 40°N"
	},
	{
		id: "mid",
		label: "In between",
		hint: "About 35–40°N"
	},
	{
		id: "short",
		label: "Shorter days",
		hint: "South of about 35°N"
	}
];
var keepLong = "After the necks are fully dry, store at 32–40°F and about 65–70% humidity, in the dark, in mesh or a crate. Keep them away from apples and potatoes. Pungent long-day bulbs from a good cure often keep six to eight months.";
var keepSweet = "Sweet and short-day bulbs often keep one to three months, not through winter. Eat thick necks first. A refrigerator, unwashed, in a breathable bag, buys a little time and costs some texture.";
var ZONES = [
	{
		id: "3",
		winters: "Extreme lows about −40 to −30°F",
		regions: "Coldest northern interior and high-plains pockets",
		typical: "long",
		fit: {
			headline: "Long-day storage onions, started early under lights.",
			varieties: "Copra and Patterson (hybrids — fine keepers, poor seed parents), Stuttgarter and Southport Red Globe (open-pollinated), Redwing if you want a hybrid red.",
			sow: "Early to mid February, indoors, ten to twelve weeks before the soil can be worked.",
			plant: "Late April to late May, two to four weeks before the last frost, once the soil is near 50°F.",
			harvest: "August into September. Cure indoors. Nights are already cold, and a wet bulb left outside will not finish.",
			seed: "Keep at least twenty sound bulbs at 32–40°F over winter. Replant when you set out the new crop. Cut seed heads in late August or September, earlier if frost is forecast, and finish drying inside.",
			keep: keepLong
		}
	},
	{
		id: "4",
		winters: "Extreme lows about −30 to −20°F",
		regions: "Northern Midwest, northern New England, high plains",
		typical: "long",
		fit: {
			headline: "Long-day onions. The season is long enough if you don't wait on spring.",
			varieties: "Stuttgarter, Jaune Paille des Vertus, Southport Red Globe, and New York Early from seed. Copra, Patterson, or Cortland if you want a hybrid keeper and will buy seed again.",
			sow: "Mid February to early March, indoors.",
			plant: "Mid to late April, as soon as the soil crumbles in the hand rather than smearing.",
			harvest: "Late July through September, when about half the tops have fallen on their own.",
			seed: "Replant stored bulbs in April. Seed heads are usually ready from mid August into September. Bag the umbel if rain is camping on it.",
			keep: keepLong
		}
	},
	{
		id: "5",
		winters: "Extreme lows about −20 to −10°F",
		regions: "Lower Midwest, inland southern New England, central plains",
		typical: "long",
		fit: {
			headline: "Long-day is the reliable crop. Intermediate varieties are a fair bet where summers run hot.",
			varieties: "Open-pollinated long-day: Stuttgarter, Jaune Paille des Vertus, Southport Red Globe, New York Early, Borettana cipollini. Hybrids for the pantry: Copra, Patterson, Cortland. Candy only if your Julys are hot — it is a hybrid, and it will not store like Copra.",
			sow: "Late January to late February, indoors.",
			plant: "Late March to mid April. Sets can go in as soon as the ground thaws; sets wider than about ¾ inch are for green onions, not storage.",
			harvest: "July to August.",
			seed: "Replant stored bulbs in April. Collect seed from late July through August, from a group of plants, never from one bulb and never from a plant that flowered in year one.",
			keep: keepLong
		}
	},
	{
		id: "6",
		winters: "Extreme lows about −10 to 0°F",
		regions: "Mid-Atlantic piedmont, Ohio Valley, milder interior valleys",
		typical: "long",
		fit: {
			headline: "Long-day by default, intermediate where summer heat arrives early, and a fall sowing where winter is only moderately cruel.",
			varieties: "Patterson, Copra, Stuttgarter, Yellow Sweet Spanish. Walla Walla if you will eat it young or overwinter it — it is a sweet long-day and a poor keeper. Candy or Cabernet (hybrids) on warmer sites.",
			sow: "January to February indoors for a spring transplant. Optional: direct-sow a long-day sweet such as Walla Walla in late August or September and mulch it through winter.",
			plant: "March to early April for transplants and sets. Fall-sown plants stay put under mulch.",
			harvest: "July to early August for the spring crop. June to July the next year for a fall sowing.",
			seed: "Replant stored bulbs in March or April. Where the ground does not freeze deep for months, a mulched bulb can take its cold in place. Seed in July and August.",
			keep: keepLong
		}
	},
	{
		id: "7",
		winters: "Extreme lows about 0 to 10°F",
		regions: "Upper South, mid-Atlantic coast, southern plains",
		typical: "mid",
		fit: {
			headline: "The hinge. Intermediate-day for a spring crop. Switch the day control to shorter days if you would rather plant in fall.",
			varieties: "Intermediate hybrids: Candy, Superstar, Cabernet, Sierra Blanca. For seed saving, buy an open-pollinated intermediate and make the seller tell you the day length. Many packets in this band are hybrids and will not come true.",
			sow: "December to January, indoors.",
			plant: "February to March. Do not bury them. One inch is the whole depth.",
			harvest: "June to July, before heat sits on necks that are still thick.",
			seed: "Mulch selected bulbs through a normal zone 7 winter, or store them cold and replant in February. Seed heads in June and July. Isolate from any shallot that is allowed to flower.",
			keep: "Intermediate sweets often keep two to four months if the necks dried. Eat the soft ones first. The pungent end of the group keeps longer."
		}
	},
	{
		id: "8",
		winters: "Extreme lows about 10 to 20°F",
		regions: "Deep South interior, central Texas, mild Pacific valleys",
		typical: "short",
		fit: {
			headline: "Short-day onions, in the ground before winter, out of it in late spring.",
			varieties: "Texas Early Grano 502 (open-pollinated), Red Creole (open-pollinated, hotter, and a better keeper than most short-day types), Yellow Granex and Texas Legend (usually hybrid — the sweet Vidalia type; eat them).",
			sow: "August to September in a flat, or buy transplants in fall.",
			plant: "October to December. Go into winter about pencil-thick. Plants already bulbing, or transplants fatter than a pencil, are likely to bolt.",
			harvest: "April to June, before summer rain or hard heat. This is the Vidalia window: pulled sweet, not stored like a northern Copra.",
			seed: "Leave the best bulbs in place, or replant in autumn, and let winter vernalize them. They flower in spring. Cut seed by early summer. In humid weather, dry heads indoors with airflow so capsules don't mold.",
			keep: keepSweet
		}
	},
	{
		id: "9",
		winters: "Extreme lows about 20 to 30°F",
		regions: "Gulf coast, southern Texas, southern California, north and central Florida",
		typical: "short",
		fit: {
			headline: "Short-day only, timed so the bulb swells before May heat.",
			varieties: "Texas Early Grano 502, Red Creole, and Granex types. Skip the long-day packets even when the store rack leads with them.",
			sow: "September to October.",
			plant: "November to December. In the low desert this is what gets a bulb before heat shuts the plant down.",
			harvest: "April to May.",
			seed: "In-ground cold is usually enough for short-day varieties. Long-day heirlooms may never vernalize here — save seed from the short-day open-pollinated onion that actually bulbed. Dry the seed before the humid peak in the Southeast.",
			keep: "Plan to eat them by midsummer. This is not the cellar onion."
		}
	},
	{
		id: "10",
		winters: "Extreme lows about 30 to 40°F",
		regions: "South Florida, subtropical coasts, lowland tropics' edge",
		typical: "short",
		fit: {
			headline: "The earliest short-day varieties, planted at the opening of the coolest months.",
			varieties: "Strains listed at ten to eleven hours, usually early Grano types. Where the day barely changes, bunching onions (Allium fistulosum) and shallots are the alliums you can count on.",
			sow: "September to November.",
			plant: "November to January.",
			harvest: "March to May, if they bulb. If they stay all leaf, the day never got long enough — eat them green.",
			seed: "If winter never sits in the 40s, refrigerate chosen bulbs six to ten weeks, then replant. Otherwise leave them in the ground. Harvest seed in late spring. Shallots and bunching onions are easier to keep going without true seed.",
			keep: keepSweet
		}
	},
	{
		id: "11",
		winters: "Extreme lows about 40 to 50°F",
		regions: "Nearly frost-free tropical and subtropical coasts",
		typical: "short",
		fit: {
			headline: "A common bulb onion is a poor fit. Treat it as a cool-season trial, and grow alliums that ignore day length.",
			varieties: "The earliest short-day onion you can find, plus shallots, Egyptian walking onions, and bunching onions for the crop you actually eat.",
			sow: "At the start of the coolest, driest stretch — often October to December.",
			plant: "A few weeks later, while plants are pencil-sized, shallow, and not yet trying to bulb.",
			harvest: "About ninety to one hundred twenty days later, still inside the cool season, and expect small bulbs. No swell means day length, not a failure of watering.",
			seed: "Give seed-stock bulbs eight to ten weeks in the refrigerator. A frost-free winter often will not flower them on its own.",
			keep: "Don't build the pantry around this crop. Cure what you get and eat it."
		}
	}
];
var SHORT_IN_THE_NORTH = "Short-day onions start bulbing as soon as days pass ten to twelve hours, while the plants are still small. You get marbles, then a crop that thinks the year is over.";
function resolvePlan(zone, day) {
	if (day === zone.typical) return {
		tone: "fit",
		plan: zone.fit
	};
	const northern = [
		"3",
		"4",
		"5",
		"6"
	].includes(zone.id);
	if (northern && day === "short") return {
		tone: "fail",
		plan: {
			...zone.fit,
			headline: SHORT_IN_THE_NORTH,
			varieties: `Do not sow short-day seed here. Use the long-day list instead: ${zone.fit.varieties}`
		}
	};
	if (northern && day === "mid") return {
		tone: "warn",
		plan: {
			...zone.fit,
			headline: "Intermediate varieties can finish here when summers are warm, but a long-day storage onion is the safer packet.",
			varieties: "Candy, Cabernet, or an intermediate open-pollinated variety if you can find one. Same dates as the long-day crop. Hybrids will not come true if you save seed.",
			harvest: `${zone.fit.harvest} Intermediate types often fall a week or two earlier, and they rarely keep as long as Copra or Patterson.`
		}
	};
	if (zone.id === "7" && day === "long") return {
		tone: "warn",
		plan: {
			headline: "Long-day onions can bulb here, and they often meet July heat before the necks dry.",
			varieties: "Choose a storage long-day only if your summer nights cool off. Otherwise stay with an intermediate. Copra and Patterson are the usual hybrids; Stuttgarter if you want open-pollinated seed later.",
			sow: "January, indoors.",
			plant: "March, shallow, four inches apart.",
			harvest: "July. Pull sooner if necks stay thick and the weather turns wet — those bulbs are for the kitchen, not the crate.",
			seed: zone.fit.seed,
			keep: keepLong
		}
	};
	if (zone.id === "7" && day === "short") return {
		tone: "warn",
		plan: {
			headline: "Treat the upper South as a fall crop. Short-day onions go in before winter and come out in late spring.",
			varieties: "Texas Early Grano 502 or Red Creole if you may save seed. Granex and Texas Legend if you want a sweet hybrid and will not save seed.",
			sow: "August to September.",
			plant: "October to November. Pencil-thick going into winter, not already swelling.",
			harvest: "May to June.",
			seed: "A mulched bulb usually gets enough winter cold. Flowering follows in spring; cut seed heads as they tan, before June humidity molds them.",
			keep: keepSweet
		}
	};
	if ((zone.id === "8" || zone.id === "9") && day === "long") return {
		tone: "warn",
		plan: {
			headline: "A high zone number with long summer days is a marine climate, not the South. Seattle is not Atlanta. Grow long-day onions.",
			varieties: "Stuttgarter, Patterson, Copra, Yellow Sweet Spanish. Walla Walla is the famous overwinter sweet in this climate, and it does not store.",
			sow: "Spring path: February indoors. Overwinter path: direct-sow in August or September where winter lows stay near or above 10°F.",
			plant: "April for transplants. Fall sowings stay in the bed under mulch.",
			harvest: "August for a spring planting. June to July the next year for an overwintered bed.",
			seed: "Winter cold in zone 8 is often enough in the ground. In a warm zone 9 pocket, store bulbs at 35–45°F for six to eight weeks if they never flower. Isolate varieties by distance or a cage.",
			keep: keepLong
		}
	};
	if ((zone.id === "8" || zone.id === "9") && day === "mid") return {
		tone: "warn",
		plan: {
			headline: "Intermediate-day onions are the overlap crop, at home in cooler zone 8 summers and on the 35th to 40th parallel.",
			varieties: "Candy, Superstar, Cabernet, Sierra Blanca — hybrids. Save seed only from an open-pollinated intermediate.",
			sow: "December to February indoors, or start a fall transplant crop in August where winters are mild.",
			plant: "February to April for the spring bed. October to November for a fall bed.",
			harvest: "June to August from spring planting. May to June from a fall planting.",
			seed: zone.fit.seed,
			keep: "Figure on two to four months after a proper cure, less if the necks never dried."
		}
	};
	if ((zone.id === "10" || zone.id === "11") && day !== "short") return {
		tone: "fail",
		plan: {
			headline: "Long-day and most intermediate onions wait for a day length this climate never delivers. They make leaves, not bulbs.",
			varieties: "Buy the earliest short-day variety on the rack, or plant shallots and bunching onions and skip the experiment.",
			sow: zone.fit.sow,
			plant: zone.fit.plant,
			harvest: "Do not plan a storage harvest from long-day seed here. Short-day dates, if you switch back, are: " + zone.fit.harvest,
			seed: "Seed saving starts from a bulb that actually formed. Without that, there is nothing honest to replant.",
			keep: zone.fit.keep
		}
	};
	return {
		tone: "warn",
		plan: zone.fit
	};
}
var HELPS = [
	{
		name: "Carrots",
		place: "A row between the onions, or alternating plants while both are young.",
		why: "Carrots root deeper and don't steal the shallow layer the onion uses. The mixed bed is the old deterrent for carrot rust fly and onion maggot. Trials are mixed, so plant it for the spacing, and still use a row cover if maggots have wrecked a crop before. Don't let carrot tops shade the onions once they sprawl."
	},
	{
		name: "Beets",
		place: "One row beside the onions, thinned to about four inches.",
		why: "Beet tops stay low. Water needs line up. Give each its inches and neither bullies the other. This is a spacing partnership, not a pest miracle."
	},
	{
		name: "Lettuce and spinach",
		place: "Sow into the gaps the week you transplant onions. Pull them before the leaves touch.",
		why: "A catch crop while onion roots are still small. Leave the greens too long and you pay for it in bulb size. Spinach is the better spring partner in the North; lettuce takes the same role in a southern fall planting."
	},
	{
		name: "Radishes",
		place: "A single quick row on the shoulder of the bed.",
		why: "They are out in about a month, they mark the row, and they loosen the surface. Gone before bulbing. Don't let them go to seed in the onion bed."
	},
	{
		name: "Chamomile",
		place: "A few plants at the corners. Not a carpet.",
		why: "It brings hoverflies and small parasitic wasps. The story that chamomile improves onion flavor is folklore. The insectary effect is the part worth the space."
	},
	{
		name: "Summer savory",
		place: "Single plants at the ends of the rows.",
		why: "Compact, not thirsty in a way that drowns the bed, and short enough not to shade a bulbing onion. It earns the spot by staying out of the way."
	},
	{
		name: "Brassicas",
		place: "Cabbage, kale, or broccoli in the next row, not on top of the onions.",
		why: "Onion scent can muddle host-finding for some cabbage moths. It will not replace a row cover in a bad year. Give the brassica its own compost — a hungry kale will rob the onion beside it."
	},
	{
		name: "Strawberries",
		place: "A row of onions along the sunny edge of the strawberry bed.",
		why: "A traditional pest-distraction planting. Keep mulch off the onion necks, and don't expect the onions to thrive in a bed that stays soggy."
	},
	{
		name: "French marigolds",
		place: "A border of Tagetes patula. Not a plant between every onion.",
		why: "The dwarf French types are the ones with a track record against certain soil nematodes, and the flowers feed hoverflies. A thick mix shades the alliums and undoes the crop. Edge the bed and stop."
	},
	{
		name: "Tomatoes",
		place: "Only on the north side, and only once the onions are already sizing.",
		why: "A late tomato canopy shades bulbs and keeps necks wet, which is how storage rot starts. As a border it can work. Woven through the onion row, it doesn't."
	}
];
var APART = [
	{
		name: "Peas and beans",
		place: "Another bed. Not a shared root zone.",
		why: "Alliums are repeatedly reported to stunt legumes. You can run the experiment once. Most people who have, stop interplanting them. Bush beans down the path are fine. Beans in the onion row are not."
	},
	{
		name: "Asparagus",
		place: "The asparagus bed stays asparagus.",
		why: "Asparagus wants an undisturbed crown for years. Pulling onions tears that up. The two crops share almost nothing but the regret of mixing them."
	},
	{
		name: "Sage",
		place: "The dry herb walk, away from the onion water.",
		why: "Sage shows up again and again as a poor neighbor, and it wants sharper drainage and less water than a bulb that is sizing. Easy to separate, so separate them."
	},
	{
		name: "Other alliums",
		place: "Don't mix garlic, leeks, shallots, and onions to 'protect' each other.",
		why: "They trade thrips, onion maggot, downy mildew, and white rot. They are not companions. They are the same problem in different shirts. If you have ever had those pests, put this year's onions away from the garlic and the leeks, and keep the whole group off the same ground for three or four years. Shallots are Allium cepa. If they flower beside an onion you are saving seed from, they will cross."
	}
];
var CHAPTERS = [
	{
		id: "front",
		num: "",
		title: "Front",
		deck: "Open the book",
		blocks: []
	},
	{
		id: "daylength",
		num: "01",
		title: "Day length",
		deck: "The onion bulbs on a clock, not a birthday.",
		blocks: [
			{
				kind: "p",
				text: "An onion does not bulb because it is old enough. It bulbs when the day is long enough for that variety. Plant the wrong group and you grow scallions that never swell, or marbles that quit while the leaves are still short. Everything else in this book — spacing, water, the zone calendar — sits on top of that fact."
			},
			{
				kind: "plate",
				src: "/plates/daylength.jpg",
				alt: "Three onion bulbs in a row: a flat pale sweet onion, a round rose-gold onion, and a taller copper storage onion.",
				plate: "02",
				caption: "Shape is not the rule, but the habit shows. Flatter sweets are often short-day. The tall copper keeper is the long-day storage type."
			},
			{
				kind: "h",
				text: "Three clocks"
			},
			{
				kind: "table",
				caption: "Match the packet to the latitude, then use your zone for the calendar.",
				headers: [
					"Group",
					"Bulbs when days reach",
					"Where it belongs",
					"What you get"
				],
				rows: [
					[
						"Short-day",
						"10–12 hours",
						"South of about 35°N, zones 7–11 as a fall crop",
						"Sweeter, thinner skins, one to three months stored"
					],
					[
						"Intermediate",
						"12–14 hours",
						"Roughly 35–40°N, and the hinge of zones 5–7",
						"A middle crop; some store, many are sweet"
					],
					[
						"Long-day",
						"14–16 hours",
						"North of about 40°N, zones 3–6 in spring",
						"Firmer, more pungent, the bulbs that can see the next spring"
					]
				]
			},
			{
				kind: "p",
				text: "Day length means daylight, not sunshine. A cloudy June day in Maine still counts as a long day. Clouds do not stop bulbing. Heat, drought, and a soggy neck decide whether that bulb is worth keeping."
			},
			{
				kind: "note",
				title: "Zone is not latitude",
				text: "USDA zones measure the coldest night of the year. Bulbing measures how long the summer day gets, which follows latitude. Seattle and Atlanta can share a zone number and need opposite onions. If your summer days are long — the Pacific Northwest, northern California above the Bay, coastal New England — grow long-day or intermediate varieties even when your zone looks southern. If you are in the South or the low desert, grow short-day even if a cold pocket gives you a lower zone number. The zone chapter asks for both."
			},
			{
				kind: "h",
				text: "Seed, sets, or transplants"
			},
			{
				kind: "bullets",
				items: [
					{
						t: "Seed",
						d: "The widest choice and the only honest start if you plan to save seed later. Cheapest, slowest, and the least likely to carry last year's diseases into the bed. This book assumes seed unless it says otherwise."
					},
					{
						t: "Transplants",
						d: "Bundles of slender plants, sold in spring in the North and in fall in the South. You skip the indoor weeks. Plant them promptly, and don't let the bundle dry out on the bench."
					},
					{
						t: "Sets",
						d: "Tiny dry bulbs grown last year. Easiest, narrowest variety list, more likely to flower in year one — especially a set wider than about ¾ inch. Use the big ones as green onions. A set that bolts will not store, and its seed is the wrong seed to save."
					}
				]
			},
			{
				kind: "p",
				text: "This book is about the common bulb onion, Allium cepa. Shallots and potato onions are the same species and will cross with it if they flower. Leeks, garlic, chives, and Welsh or bunching onions (Allium fistulosum) are different crops. They don't follow this calendar, and bunching onions are the practical allium where days never get long enough to bulb."
			},
			{
				kind: "h",
				text: "Names worth knowing"
			},
			{
				kind: "p",
				text: "Open-pollinated varieties can be saved. Hybrids, usually marked F1, are for eating. Their seedlings won't match the parent."
			},
			{
				kind: "bullets",
				items: [
					{
						t: "Short-day",
						d: "Texas Early Grano 502 and Red Creole are open-pollinated. Yellow Granex and Texas Legend are the sweet Vidalia type and are usually hybrid. Older white strains such as Crystal Wax are mild and poor keepers."
					},
					{
						t: "Intermediate",
						d: "Candy, Superstar, Cabernet, and Sierra Blanca are the famous hybrids. Open-pollinated choices are thinner on the ground — ask before you buy if seed saving is the point."
					},
					{
						t: "Long-day",
						d: "Stuttgarter, Southport Red Globe, New York Early, Jaune Paille des Vertus, and Borettana are open-pollinated. Copra, Patterson, Cortland, and Redwing are hybrid keepers. Walla Walla and Yellow Sweet Spanish are milder and will not sit in a crate until spring."
					}
				]
			}
		]
	},
	{
		id: "season",
		num: "02",
		title: "The season",
		deck: "From the flat to the day the tops fall.",
		blocks: [
			{
				kind: "p",
				text: "Once the variety matches your latitude, an onion is a simple plant with strict manners. It wants sun, a loose bed, steady water, and to be left shallow. The leaves are the crop. Every green leaf is a ring in the bulb you haven't met yet. Treat the foliage well before the day-length trigger, and the bulb has something to make."
			},
			{
				kind: "plate",
				src: "/plates/seedlings.jpg",
				alt: "A wooden flat of dense onion seedlings, some recently sheared flat across the top.",
				plate: "03",
				caption: "Shear the tops back to about three inches when they flop. It thickens the plant. You can do it more than once."
			},
			{
				kind: "h",
				text: "Start to finish"
			},
			{
				kind: "steps",
				items: [
					{
						t: "Match the seed to the day",
						d: "Long-day north of about 40°N, short-day south of about 35°N, intermediate in the overlap. If you skip this, the rest is gardening in place."
					},
					{
						t: "Make a bed the roots can enter",
						d: "Full sun, six hours at a hard minimum and eight if you have it. Loose, drained soil, pH 6.0 to 6.8. Work in finished compost. Do not use fresh manure — it grows thick necks that rot in the sack. Stay off ground that grew any allium in the last three or four years."
					},
					{
						t: "Start seed, or be picky with sets",
						d: "Sow a quarter inch deep, ten to twelve weeks before planting out. Germination likes 65–75°F and can take seven to fourteen days. Old onion seed is a blank row; use seed one or two years old. After they emerge, give them the brightest light you have and cooler air, around 60–65°F, so they stay stocky rather than pale and prone."
					},
					{
						t: "Set them shallow and on time",
						d: "Harden off for a week. Plant pencil-thick seedlings one inch deep, four inches apart for bulbs, two inches if you will eat the thinnings as scallions. Rows twelve to sixteen inches apart. Trim a tangled root mass back to a half inch and floppy tops to about four inches. Sets go point up, tip just under the surface."
					},
					{
						t: "While the leaves are the factory",
						d: "About an inch of water a week, counting rain, more in sand and heat. A light nitrogen side-dressing when they are established, and once more about a month later. Weed every week. Onion roots lose to almost anything, and they sit in the top few inches — cultivate no deeper than an inch."
					},
					{
						t: "Stop pushing once the bulb starts",
						d: "You will see shoulders crack the soil. End the nitrogen. Late nitrogen keeps the neck green and thick, and a thick neck will not cure. Keep the water steady while the leaves are still standing."
					},
					{
						t: "Lift when the tops fall on their own",
						d: "When about half to four-fifths of the tops have keeled over and the necks feel soft, the crop is done. Do not bend the tops down to hurry them. That wounds the neck. It does not ripen the bulb. Harvest, cure, and storage are the next chapters; the handoff is a dry day and a fork, not a wash bucket."
					}
				]
			},
			{
				kind: "plate",
				src: "/plates/bed.jpg",
				alt: "A cutaway of a raised bed showing onion bulbs swelling at the soil line, shallow roots, and straw mulch kept off the necks.",
				plate: "04",
				caption: "Mulch may sit on the soil. It may not bury the neck. Buried necks stay wet, and wet necks rot."
			},
			{
				kind: "h",
				text: "What goes wrong in an ordinary year"
			},
			{
				kind: "bullets",
				items: [
					{
						t: "Bolting in year one",
						d: "A flower stalk now means a cold snap after planting, a set that was too large, or a transplant that was already too thick. Snap the scape off and eat that bulb soon. The center is woody. It will not store, and its seed selects for bolting. Don't save it."
					},
					{
						t: "Onion maggot",
						d: "Seedlings wilt. Small white larvae sit at the base. A light row cover, sealed to the soil the day you plant, keeps the fly from laying. Leave it on until the plants are sturdy and the weather is truly warm, then take it off before the bed cooks."
					},
					{
						t: "Thrips",
						d: "Silvery streaks on the leaves, worst in hot dry weather. Don't drought-stress the crop. A hard spray of water knocks them down. They are the same thrips that will find your garlic and leeks."
					},
					{
						t: "Leaf diseases",
						d: "Downy mildew and purple blotch mark the leaves in humid spells. Water in the morning, give the row air, and stay out of the foliage while it is wet."
					},
					{
						t: "White rot",
						d: "White fluff and black specks at the base. There is no cure to spray on. Do not compost those plants. Clean the tools before they visit another bed. The fungus can sit in soil for many years, which is why the rotation is not optional."
					}
				]
			},
			{
				kind: "note",
				title: "Six ways to lose the crop politely",
				text: "Long-day seed in a short-day winter. Planting deeper than an inch. Fresh manure, or nitrogen after bulbing starts. Knocking the tops over by hand. Washing the bulbs before they cure. Saving seed from a single pretty bulb, from a hybrid, or from a plant that bolted in year one."
			}
		]
	},
	{
		id: "zones",
		num: "03",
		title: "Zones",
		deck: "When to sow, set out, lift, and take seed.",
		blocks: [
			{
				kind: "p",
				text: "A zone is the average coldest night, not a planting order. Two gardens in zone 7 do not share a spring. Use the windows below as the grid, then slide them toward your own last frost and your first hard heat. A half-zone, 7a against 7b, is worth about two weeks. The day-length choice beside the zone is not decoration. It changes the crop."
			},
			{
				kind: "p",
				text: "Find the zone on the USDA Plant Hardiness map if you don't know it. Then answer the day question by latitude, not by how mild January felt."
			},
			{ kind: "zones" },
			{
				kind: "note",
				title: "How to shift the window",
				text: "In the North, transplant two to four weeks before the average last spring frost, and start seed ten to twelve weeks before that date. In the South, the limiting wall is heat, not frost: short-day bulbs should be sizing as days lengthen in spring and out of the ground before summer rain or a run of nights that never cool. If your date is a guess, write it down this year. Next year's book is the one you correct."
			}
		]
	},
	{
		id: "companions",
		num: "04",
		title: "Companions",
		deck: "What earns a place in the bed, and what does not.",
		blocks: [
			{
				kind: "p",
				text: "Companion planting has a folklore problem. Onions are asked to charm pests away from everything else in the garden, and to sweeten because a chamomile stood nearby. Some of that is useful ecology. Most of it is a story. The pairings below earn their place for a duller reason: they don't shade the onions, they don't share their diseases, and they either use a different layer of soil or interrupt a pest that is actually looking for an allium."
			},
			{
				kind: "plate",
				src: "/plates/companions.jpg",
				alt: "An overhead view of onion rows alternating with carrot tops and edged with small orange marigolds.",
				plate: "05",
				caption: "Onions, carrots, and a marigold edge. The onions stay in the sun. The flowers stay on the border."
			},
			{ kind: "companions" },
			{
				kind: "note",
				title: "The companion that always works",
				text: "A weeded row. Onions are poor competitors. An hour of hoeing will do more for the bulb than any flower you interplant. If you only change one habit after this chapter, make it the weekly pass with a shallow blade."
			}
		]
	},
	{
		id: "bulb",
		num: "05",
		title: "The bulb",
		deck: "Lift, cure, and store the eating crop.",
		blocks: [
			{
				kind: "p",
				text: "Harvest is a neck problem. The bulb is ready when the plant says so: about half to four-fifths of the tops fallen over on their own, necks soft, outer skins starting to paper. Do it on a dry day. A bulb pulled into mud can still be cured, but you have made the job harder for no gain."
			},
			{
				kind: "plate",
				src: "/plates/harvest.jpg",
				alt: "Harvested onions lying on dry soil with fallen tops, one bulb turned to show the neck.",
				plate: "06",
				caption: "Tops down on their own. If you pushed them over, the neck is wounded, not ripe."
			},
			{
				kind: "h",
				text: "Lifting"
			},
			{
				kind: "steps",
				items: [
					{
						t: "Loosen, then pull",
						d: "Fork from the side. Lift by the base. Yanking a dry top pops the neck and opens a road for rot."
					},
					{
						t: "Brush, don't wash",
						d: "Soil crumbs can stay. Water is the enemy of the next three weeks. Spread the bulbs in one layer, tops and roots still on."
					},
					{
						t: "Sort with your hands now",
						d: "Thick necks, splits, insect damage, and anything that flowered go in the eat-soon pile. They will not cure into keepers. The firm, single, tight-necked bulbs are the store, and they are the only bulbs worth replanting for seed."
					}
				]
			},
			{
				kind: "h",
				text: "Curing"
			},
			{
				kind: "p",
				text: "Cure for two to four weeks somewhere warm, dry, shaded, and drafty. Seventy-five to eighty-five degrees is the useful range. Direct sun scalds the shoulders and turns skins translucent. A porch roof, a barn with a cross-breeze, or a rack in a garage with the door open will do. Hang bunches or use a screen. They are done when the necks are tight and dry, the skins rustle, and the roots are wiry. If the neck still slides under your fingers, it is not done, and it is not a storage onion."
			},
			{
				kind: "p",
				text: "Then trim. Tops to about an inch. Roots to a quarter inch. If the cut weeps, you trimmed into live tissue — cure longer before you bag them. Leave the papery skins on. They are the wrapper, not waste."
			},
			{
				kind: "plate",
				src: "/plates/pantry.jpg",
				alt: "A wooden crate of cured onions, a mesh bag, and a glass jar of black onion seed in a cool pantry.",
				plate: "07",
				caption: "Bulbs want a crate and a cold room. Seed wants a jar. They should not share a container, and they barely share a climate."
			},
			{
				kind: "h",
				text: "The cellar"
			},
			{
				kind: "table",
				caption: "Storage for cured bulbs. Seed is a different regime — see the next chapter.",
				headers: ["", "What to aim for"],
				rows: [
					["Temperature", "32–40°F after curing. Warm kitchens sprout them."],
					["Humidity", "About 65–70%. Drier and they shrivel. Damper and they mold."],
					["Air and light", "Dark, ventilated. Mesh bags, slatted crates, or a braid of fully dry necks. Never a sealed plastic bag."],
					["Neighbors", "Away from apples and pears, which wake sprouts with ethylene, and away from potatoes, which want a wetter room."],
					["How long", "Pungent long-day types, six to eight months when the cure was real. Sweet short-day types, one to three months."],
					["Upkeep", "Look once a month. One soft bulb ruins the ones touching it. Sprouted bulbs are still food — just take them out of the store."]
				]
			},
			{
				kind: "note",
				title: "Seed stock is pickier than supper",
				text: "Bulbs you mean to replant want the cold end of that range so they stay dormant and still receive the chilling that triggers next year's flower. Don't leave them in a warm kitchen beside the eating onions and hope. Label the crate. Twenty bulbs is a minimum population, not a wish for twenty. Disease, doubles, and a few that simply fail will cut the number before spring."
			}
		]
	},
	{
		id: "seed",
		num: "06",
		title: "The seed",
		deck: "A second year, an umbel, and a jar.",
		blocks: [
			{
				kind: "p",
				text: "Onion seed is a second-year crop. The first year makes a bulb. The second year, if the bulb felt winter, it sends up a scape and a spherical umbel. You are not collecting seed from the plants that flowered early in the eating garden. Those bolted. Saving them teaches the line to bolt. You are replanting the bulbs you wished you had more of."
			},
			{
				kind: "plate",
				src: "/plates/umbel.jpg",
				alt: "A drying onion seed umbel with tan capsules and black seeds spilling, and a bee on a remaining floret.",
				plate: "08",
				caption: "Black seed in opening capsules. Cut before the whole head shatters onto the soil."
			},
			{
				kind: "h",
				text: "Which bulbs"
			},
			{
				kind: "bullets",
				items: [
					{
						t: "True to the variety",
						d: "Shape, color, and size for that type. Tight necks. Single centers if that is the trait you eat. No disease, no doubles, no splits you can't explain."
					},
					{
						t: "A crowd, not a mascot",
						d: "Onions are largely self-incompatible. They need other onions, and insects, to set seed. Save from at least twenty bulbs, more if you can feed the row. One perfect bulb is an inbreeding project."
					},
					{
						t: "Open-pollinated only",
						d: "Hybrids will not come true. If the packet said F1, grow it and eat it. Buy the open-pollinated packet when the goal is a jar with a year on the label."
					},
					{
						t: "Never the early bolters",
						d: "A scape in year one is a reason to eat the bulb this month. It is not a reason to celebrate that you got seed early."
					}
				]
			},
			{
				kind: "h",
				text: "Winter, then the stalk"
			},
			{
				kind: "p",
				text: "A bulb needs a stretch of cold before it will initiate a flower, generally several weeks somewhere around 35–50°F. The exact appetite depends on the variety. In zones 3 to 6, cure as usual, store the chosen bulbs at 32–40°F, and replant in early spring when you would plant sets. In zones 8 to 10, winter in the ground is often enough for a short-day variety: leave them, or lift, cure briefly, and replant in fall. In zones 9 to 11, if January never really cools, six to ten weeks in the refrigerator — not the freezer, and not a drawer full of apples — substitutes for winter. Plant them after, shoulder at the soil line."
			},
			{
				kind: "p",
				text: "Space seed plants six to twelve inches apart, in rows two to three feet apart, so the heads have air and you can get a bag around them. Stake early. A ripe umbel on a three- or four-foot scape tips over. Set the bulb with the shoulder at the surface, not buried."
			},
			{
				kind: "note",
				title: "Isolation is the whole game",
				text: "Allium cepa crosses with other Allium cepa: every other onion variety, plus shallots, potato onions, and multipliers. Insects carry the pollen a long way. A mile is the old standard for seed you would sell or share. In a home garden, distance is usually fiction. Cage one variety, or bag the umbels, and pollinate by hand or with flies you introduce. Do not let two varieties flower uncovered in the same yard if you care what next year's bulb looks like. Welsh onions and most bunching onions (Allium fistulosum) do not readily cross with common onions. Garlic does not. Don't confuse that mercy with shallots, which will."
			},
			{
				kind: "h",
				text: "Taking the seed"
			},
			{
				kind: "steps",
				items: [
					{
						t: "Let the insects work",
						d: "Flowers open over two to four weeks. One plant does not pollinate itself reliably. A group does, if bees or flies can reach it. A cage without a pollinator is a failed crop."
					},
					{
						t: "Cut on the early side",
						d: "Ripe is a tan-brown head, a few black seeds visible in splitting capsules, and hard black seed inside the rest — often four to six weeks after full bloom. Waiting for every capsule to open means the first seed is already on the ground. Cut the head with six to ten inches of stalk. A paper or mesh bag over the head for the last few days catches what shatters."
					},
					{
						t: "Dry, then thresh",
						d: "Hang the heads in a paper bag somewhere warm, airy, and out of the sun, for one to two weeks. Rub the capsules. Winnow in a light breeze or in front of a slow fan. The seed is black, angular, and heavier than the chaff."
					},
					{
						t: "The snap test",
						d: "A dry seed snaps. A seed that bends is not dry enough to seal. Spread it another few days. Do not oven-dry it and do not leave it in a closed car. You want dry, not cooked."
					}
				]
			},
			{
				kind: "h",
				text: "Storing the seed"
			},
			{
				kind: "p",
				text: "Onion seed is short-lived next to tomato or bean seed. Dried well and kept cold, it is reliable the next season, fair the one after, and a gamble after that. Two years is a sensible outer edge. Three is optimism."
			},
			{
				kind: "table",
				caption: "The jar is a small, dry, cold room.",
				headers: ["", "Seed"],
				rows: [
					["Dryness", "Snap-dry. A paper envelope so the seed is not against plastic or loose desiccant."],
					["Container", "That envelope, labeled, inside a sealed jar with a silica packet or a bit of powdered milk wrapped in paper."],
					["Label", "Variety, day-length group, open-pollinated or not, and the year the umbel was cut."],
					["Temperature", "Refrigerator, about 32–41°F, in the dark. Not the freezer unless the seed is very dry and you never open the jar while it is cold."],
					["Opening", "Let the jar come to room temperature before you break the seal. Condensation on cold seed undoes the year."],
					["Test", "Ten seeds on a damp towel in a bag at about 70°F. Read it at ten to fourteen days. Under roughly sixty percent, sow thickly or replace the seed."]
				]
			},
			{
				kind: "note",
				title: "Two stores, don't merge them",
				text: "Eating bulbs want 32–40°F, some humidity, and air. Seed wants colder-than-a-kitchen, almost no humidity, and a sealed jar. A mesh bag in the refrigerator molds. A sealed jar of bulbs rots. The pantry plate in the last chapter shows them side by side so you remember they are not the same crop anymore."
			}
		]
	},
	{
		id: "year",
		num: "07",
		title: "Your year",
		deck: "The book, collapsed to one garden.",
		blocks: [
			{
				kind: "p",
				text: "Set the zone and the day length once. They stay on this device, and the list below follows them: sow, set out, lift, cure, and the second year for seed. Check a line when the garden has actually done it. The dates are windows. Your frost and your heat still get the last word."
			},
			{ kind: "year" },
			{
				kind: "h",
				text: "A few words, so the chapters agree"
			},
			{
				kind: "glossary",
				items: [
					{
						term: "Day length",
						def: "Hours of daylight that trigger bulbing. Not hours of sun, and not the USDA zone."
					},
					{
						term: "Set",
						def: "A small dry bulb sold for replanting. Easy, and quicker to bolt if it is large."
					},
					{
						term: "Transplant",
						def: "A bareroot seedling. Plant it shallow and soon."
					},
					{
						term: "Neck",
						def: "The stem just above the bulb. Storage depends on it drying tight."
					},
					{
						term: "Cure",
						def: "The dry-down after harvest, before anything is trimmed or bagged."
					},
					{
						term: "Scape",
						def: "The flower stalk. In year one it means that bulb will not store."
					},
					{
						term: "Umbel",
						def: "The round seed head at the top of the scape."
					},
					{
						term: "Vernalization",
						def: "The cold that convinces a bulb to flower the second year."
					},
					{
						term: "Open-pollinated",
						def: "A variety that can come true if you isolate it and save from enough plants."
					},
					{
						term: "Hybrid",
						def: "A planned cross, usually marked F1. Grow it. Don't save it and expect the same onion."
					}
				]
			},
			{
				kind: "note",
				title: "Where the dates come from",
				text: "The calendars follow cooperative-extension practice: short-day and fall-planted in the South, long-day and spring-planted in the North, with the latitude exception for mild marine climates that share a zone number with a much warmer place. Seed handling — isolation from other Allium cepa, including shallots; a group of bulbs rather than one; cool and very dry storage — is the home seed-saving standard. A hybrid packet will not come true. Move every window with your last frost, your first hard heat, and the year you actually get."
			}
		]
	}
];
function chapterIndex(id) {
	return CHAPTERS.findIndex((c) => c.id === id);
}
var STORAGE_KEY = "onion-field-book-v1";
var press = "transition-transform duration-150 ease-out active:scale-[0.96] disabled:active:scale-100";
function FieldBook() {
	const [chapterId, setChapterId] = (0, import_react.useState)("front");
	const [zoneId, setZoneId] = (0, import_react.useState)(null);
	const [day, setDay] = (0, import_react.useState)(null);
	const [marks, setMarks] = (0, import_react.useState)([]);
	const [checks, setChecks] = (0, import_react.useState)([]);
	const [hydrated, setHydrated] = (0, import_react.useState)(false);
	const [menuOpen, setMenuOpen] = (0, import_react.useState)(false);
	const firstScroll = (0, import_react.useRef)(true);
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(STORAGE_KEY);
			if (raw) {
				const parsed = JSON.parse(raw);
				if (parsed.chapterId && CHAPTERS.some((c) => c.id === parsed.chapterId)) setChapterId(parsed.chapterId);
				if (typeof parsed.zoneId === "string" && ZONES.some((z) => z.id === parsed.zoneId)) setZoneId(parsed.zoneId);
				if (parsed.day === "long" || parsed.day === "mid" || parsed.day === "short") setDay(parsed.day);
				if (Array.isArray(parsed.marks)) setMarks(parsed.marks.filter((m) => typeof m === "string"));
				if (Array.isArray(parsed.checks)) setChecks(parsed.checks.filter((m) => typeof m === "string"));
			}
		} catch {}
		setHydrated(true);
	}, []);
	(0, import_react.useEffect)(() => {
		if (!hydrated) return;
		const payload = {
			chapterId,
			zoneId,
			day,
			marks,
			checks
		};
		localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
	}, [
		hydrated,
		chapterId,
		zoneId,
		day,
		marks,
		checks
	]);
	(0, import_react.useEffect)(() => {
		if (firstScroll.current) {
			firstScroll.current = false;
			return;
		}
		window.scrollTo(0, 0);
	}, [chapterId]);
	(0, import_react.useEffect)(() => {
		function onKey(event) {
			const target = event.target;
			if (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target instanceof HTMLSelectElement) return;
			if (event.key === "ArrowRight") go(1);
			if (event.key === "ArrowLeft") go(-1);
		}
		function go(delta) {
			const next = CHAPTERS[chapterIndex(chapterId) + delta];
			if (next) setChapterId(next.id);
		}
		window.addEventListener("keydown", onKey);
		return () => window.removeEventListener("keydown", onKey);
	}, [chapterId]);
	const index = chapterIndex(chapterId);
	const chapter = CHAPTERS[index] ?? CHAPTERS[0];
	const marked = marks.includes(chapter.id);
	const zone = ZONES.find((z) => z.id === zoneId) ?? null;
	function openChapter(id) {
		setChapterId(id);
		setMenuOpen(false);
	}
	function toggleMark() {
		setMarks((current) => current.includes(chapter.id) ? current.filter((id) => id !== chapter.id) : [...current, chapter.id]);
	}
	function toggleCheck(id) {
		setChecks((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh lg:grid lg:grid-cols-[18rem_minmax(0,1fr)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#chapter",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-paper focus:px-4 focus:py-3 focus:text-ink",
				children: "Skip to the chapter"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookSpine, {
				chapterId: chapter.id,
				marks,
				zone,
				day,
				onOpen: openChapter
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-w-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "sticky top-0 z-30 flex items-center gap-3 border-b border-ink/15 bg-paper/95 px-4 py-3 lg:hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: `${press} grid h-11 w-11 place-items-center border border-ink/15`,
								onClick: () => setMenuOpen(true),
								"aria-label": "Open contents",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { "aria-hidden": "true" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate font-display text-lg leading-tight",
									children: chapter.id === "front" ? "The Onion Field Book" : chapter.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "truncate text-sm text-muted",
									children: chapter.num ? `Chapter ${chapter.num}` : "Field guide"
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkButton, {
								marked,
								onToggle: toggleMark
							})
						]
					}),
					menuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "fixed inset-0 z-40 lg:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "absolute inset-0 bg-ink/40",
							"aria-label": "Close contents",
							onClick: () => setMenuOpen(false)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute inset-y-0 left-0 flex w-72 max-w-full flex-col bg-olive text-paper",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center justify-between px-4 py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-display text-xl",
									children: "Contents"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: `${press} grid h-11 w-11 place-items-center`,
									onClick: () => setMenuOpen(false),
									"aria-label": "Close contents",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { "aria-hidden": "true" })
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
								className: "flex-1 overflow-y-auto px-2 pb-6",
								"aria-label": "Chapters",
								children: CHAPTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterLink, {
									id: item.id,
									num: item.num,
									title: item.id === "front" ? "The Onion Field Book" : item.title,
									active: item.id === chapter.id,
									marked: marks.includes(item.id),
									onOpen: openChapter,
									tone: "sheet"
								}, item.id))
							})]
						})]
					}) : null,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
						id: "chapter",
						className: "px-5 py-8 sm:px-8 lg:px-12 lg:py-12",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "page-in mx-auto max-w-3xl",
							children: [chapter.id === "front" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FrontMatter, {
								marks,
								onOpen: openChapter
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterBody, {
								num: chapter.num,
								title: chapter.title,
								deck: chapter.deck,
								blocks: chapter.blocks,
								marked,
								onToggleMark: toggleMark,
								zone,
								day,
								onZone: setZoneId,
								onDay: setDay,
								checks,
								onToggleCheck: toggleCheck
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pager, {
								index,
								onOpen: openChapter
							})]
						}, chapter.id)
					})
				]
			})
		]
	});
}
function BookSpine({ chapterId, marks, zone, day, onOpen }) {
	const dayLabel = DAY_GROUPS.find((item) => item.id === day)?.label;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "sticky top-0 hidden h-dvh flex-col bg-olive text-paper lg:flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "px-6 pt-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm italic text-paper/70",
					children: "A field guide"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpen("front"),
					className: `${press} mt-2 text-left font-display text-3xl leading-none`,
					children: "The Onion Field Book"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 text-sm leading-snug text-paper/75",
					children: "Jessica McIntosh"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-1 text-sm leading-snug text-paper/75",
					children: zone && dayLabel ? `Zone ${zone.id} · ${dayLabel}` : "Zone not set"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "mt-8 flex-1 overflow-y-auto px-3 pb-8",
			"aria-label": "Chapters",
			children: CHAPTERS.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChapterLink, {
				id: item.id,
				num: item.num,
				title: item.id === "front" ? "Front" : item.title,
				active: item.id === chapterId,
				marked: marks.includes(item.id),
				onOpen,
				tone: "spine"
			}, item.id))
		})]
	});
}
function ChapterLink({ id, num, title, active, marked, onOpen, tone }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: () => onOpen(id),
		"aria-current": active ? "page" : void 0,
		className: `${press} flex min-h-11 w-full items-center gap-3 px-3 py-2 text-left ${active ? tone === "spine" ? "bg-paper text-ink" : "bg-paper text-ink" : "text-paper/85 hover:bg-paper/10"}`,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-7 shrink-0 font-display text-sm tabular-nums",
				children: num || "—"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "min-w-0 flex-1 truncate font-display text-lg leading-tight",
				children: title
			}),
			marked ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "h-2 w-2 shrink-0 rounded-full bg-amber",
				"aria-label": "Marked"
			}) : null
		]
	});
}
function MarkButton({ marked, onToggle }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: onToggle,
		"aria-pressed": marked,
		className: `${press} inline-flex h-11 items-center gap-2 border border-ink/15 px-3 text-sm`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, {
			"aria-hidden": "true",
			className: marked ? "fill-amber text-amber" : ""
		}), marked ? "Marked" : "Mark"]
	});
}
function FrontMatter({ marks, onOpen }) {
	const saved = CHAPTERS.filter((chapter) => marks.includes(chapter.id) && chapter.id !== "front");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-amber italic",
			children: "Plate 01 · Allium cepa"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid items-end gap-8 lg:grid-cols-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: "/plates/cover.jpg",
				alt: "A lifted storage onion with copper skin, white roots, and blue-green leaves on cream paper.",
				width: 1200,
				height: 1600,
				className: "w-full border border-ink/15"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-5xl text-ink sm:text-6xl",
					children: "The Onion Field Book"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 font-display text-xl italic text-amber",
					children: "Jessica McIntosh"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-xl text-xl leading-snug text-ink",
					children: "Grow them from seed, lift them when the tops fall, save the seed from the bulbs worth keeping, and store each crop the way it actually lasts."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 max-w-xl text-muted",
					children: "USDA zones 3 through 11, with the latitude catch that zone numbers hide. Companion plants that help, and the ones that don't. A cellar for bulbs and a jar for seed — they are not the same room."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpen("daylength"),
					className: `${press} mt-8 inline-flex h-12 items-center bg-amber px-6 font-display text-lg text-paper`,
					children: "Begin with day length"
				})
			] })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-14 max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "How to use it"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "mt-4",
				children: [
					["Read day length before you buy a packet.", "The wrong group never makes a bulb, no matter how carefully you water."],
					["Set your zone and your latitude.", "Planting, harvest, and seed dates later in the book follow both. They stay on this device."],
					["Treat companions as a planting plan.", "Shade, shared disease, and root space matter. Charms do not."],
					["Don't store seed like a bulb.", "Mesh and cold air for onions. A dry jar in the refrigerator for seed."]
				].map(([title, body], itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "grid grid-cols-[auto_minmax(0,1fr)] gap-4 border-t border-ink/15 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-display text-amber tabular-nums",
						children: ["0", itemIndex + 1]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "block font-display text-xl",
						children: title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-muted",
						children: body
					})] })]
				}, title))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-3xl",
				children: "Contents"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 divide-y divide-ink/15 border-y border-ink/15",
				children: CHAPTERS.filter((chapter) => chapter.id !== "front").map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => onOpen(chapter.id),
					className: `${press} flex w-full items-baseline gap-4 py-4 text-left`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display text-amber tabular-nums",
						children: chapter.num
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "min-w-0 flex-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-2xl",
							children: chapter.title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-muted",
							children: chapter.deck
						})]
					})]
				}) }, chapter.id))
			})]
		}),
		saved.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			className: "mt-12 max-w-2xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "Marked"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-3 flex flex-wrap gap-2",
				children: saved.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => onOpen(chapter.id),
					className: `${press} h-11 border border-ink/15 px-4`,
					children: chapter.title
				}) }, chapter.id))
			})]
		}) : null
	] });
}
function ChapterBody({ num, title, deck, blocks, marked, onToggleMark, zone, day, onZone, onDay, checks, onToggleCheck }) {
	let seenParagraph = false;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "flex items-start justify-between gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-2xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "font-display text-amber italic",
					children: ["Chapter ", num]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "mt-2 font-display text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-4 text-xl leading-snug text-muted",
					children: deck
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "hidden lg:block",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarkButton, {
				marked,
				onToggle: onToggleMark
			})
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-8",
		children: blocks.map((block, blockIndex) => {
			const firstParagraph = block.kind === "p" && !seenParagraph;
			if (block.kind === "p") seenParagraph = true;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BlockView, {
				block,
				drop: firstParagraph,
				zone,
				day,
				onZone,
				onDay,
				checks,
				onToggleCheck
			}, blockIndex);
		})
	})] });
}
function BlockView({ block, drop, zone, day, onZone, onDay, checks, onToggleCheck }) {
	if (block.kind === "p") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: `my-4 max-w-2xl ${drop ? "drop-cap" : ""}`,
		children: block.text
	});
	if (block.kind === "h") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		className: "mt-12 mb-4 max-w-2xl font-display text-3xl",
		children: block.text
	});
	if (block.kind === "note") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: "my-8 max-w-2xl border-l-2 border-amber bg-ink/5 px-5 py-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-xl",
			children: block.title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2",
			children: block.text
		})]
	});
	if (block.kind === "plate") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
		className: "my-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: block.src,
			alt: block.alt,
			className: "w-full border border-ink/15"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
			className: "mt-3 flex gap-3 text-sm text-muted",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "shrink-0 font-display text-amber",
				children: ["Plate ", block.plate]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: block.caption })]
		})]
	});
	if (block.kind === "steps" || block.kind === "bullets") {
		const Tag = block.kind === "steps" ? "ol" : "ul";
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
			className: "my-6 max-w-2xl",
			children: block.items.map((item, itemIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex gap-4 border-t border-ink/15 py-5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "w-8 shrink-0 font-display text-lg text-amber tabular-nums",
					children: block.kind === "steps" ? String(itemIndex + 1).padStart(2, "0") : "·"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "block font-display text-2xl leading-tight",
					children: item.t
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 block text-muted",
					children: item.d
				})] })]
			}, item.t))
		});
	}
	if (block.kind === "table") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figure", {
		className: "my-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "field-table min-w-xl text-sm sm:text-base",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("caption", {
						className: "mb-3 text-left text-sm text-muted",
						children: block.caption
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: block.headers.map((header) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						scope: "col",
						children: header
					}, header)) }) }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: block.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { children: row.map((cell, cellIndex) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { children: cell }, cellIndex)) }, row[0])) })
				]
			})
		})
	});
	if (block.kind === "zones" || block.kind === "year") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoneStudio, {
		mode: block.kind,
		zone,
		day,
		onZone,
		onDay,
		checks,
		onToggleCheck
	});
	if (block.kind === "companions") return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CompanionBoard, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
		className: "my-8 max-w-2xl",
		children: block.items.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-1 border-t border-ink/15 py-4 sm:grid-cols-[11rem_minmax(0,1fr)] sm:gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-display text-xl",
				children: item.term
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
				className: "text-muted",
				children: item.def
			})]
		}, item.term))
	});
}
function ZoneStudio({ mode, zone, day, onZone, onDay, checks, onToggleCheck }) {
	const result = zone && day ? resolvePlan(zone, day) : null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "my-8",
		"aria-label": mode === "zones" ? "Zone calendar" : "Year checklist",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display text-2xl",
				children: "USDA zone"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 max-w-2xl text-sm text-muted",
				children: [
					"Average annual extreme minimum.",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						className: "underline decoration-amber underline-offset-4",
						href: "https://planthardiness.ars.usda.gov/",
						target: "_blank",
						rel: "noreferrer",
						children: "Look yours up on the USDA map"
					}),
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 flex flex-wrap gap-2",
				role: "group",
				"aria-label": "Choose a zone",
				children: ZONES.map((item) => {
					const selected = zone?.id === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						"aria-pressed": selected,
						onClick: () => onZone(item.id),
						className: `${press} grid h-11 w-12 place-items-center border font-display text-lg tabular-nums ${selected ? "border-amber bg-amber text-paper" : "border-ink/20 bg-paper text-ink"}`,
						children: item.id
					}, item.id);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "mt-8 font-display text-2xl",
				children: "Length of the summer day"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 grid gap-2 sm:grid-cols-3",
				role: "group",
				"aria-label": "Choose day length",
				children: DAY_GROUPS.map((item) => {
					const selected = day === item.id;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						"aria-pressed": selected,
						onClick: () => onDay(item.id),
						className: `${press} min-h-11 border px-3 py-3 text-left ${selected ? "border-amber bg-amber text-paper" : "border-ink/20 bg-paper"}`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-lg leading-tight",
							children: item.label
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-1 block text-sm ${selected ? "text-paper/80" : "text-muted"}`,
							children: item.hint
						})]
					}, item.id);
				})
			}),
			!result || !zone || !day ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-8 max-w-2xl border border-dashed border-ink/25 px-5 py-6 text-muted",
				children: "Choose a zone and a day length. The sowing, transplant, harvest, and seed windows will follow."
			}) : mode === "zones" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PlanCard, {
				zone,
				tone: result.tone,
				plan: result.plan
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(YearList, {
				zoneId: zone.id,
				day,
				tone: result.tone,
				plan: result.plan,
				checks,
				onToggleCheck
			})
		]
	});
}
function PlanCard({ zone, tone, plan }) {
	const toneLabel = tone === "fit" ? "Fits this place" : tone === "warn" ? "Works, with a catch" : "This pairing fights itself";
	const rows = [
		["Winter", zone.winters],
		["Country", zone.regions],
		["Sow", plan.sow],
		["Set out", plan.plant],
		["Lift the bulbs", plan.harvest],
		["Seed crop", plan.seed],
		["Keep the bulbs", plan.keep],
		["Varieties", plan.varieties]
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 border border-ink/15",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "border-b border-ink/15 px-5 py-4",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-sm text-amber",
					children: toneLabel
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
					className: "mt-1 font-display text-3xl",
					children: ["Zone ", zone.id]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-2xl text-lg leading-snug",
					children: plan.headline
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", { children: rows.map(([label, value]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-1 border-b border-ink/10 px-5 py-4 last:border-b-0 sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
				className: "font-display text-amber",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: value })]
		}, label)) })]
	});
}
function YearList({ zoneId, day, tone, plan, checks, onToggleCheck }) {
	const tasks = tone === "fail" ? [{
		id: `${zoneId}-${day}-rethink`,
		when: "Before you buy seed",
		do: plan.headline
	}, {
		id: `${zoneId}-${day}-instead`,
		when: "What to do instead",
		do: plan.varieties
	}] : [
		{
			id: `${zoneId}-${day}-sow`,
			when: "Sow",
			do: plan.sow
		},
		{
			id: `${zoneId}-${day}-plant`,
			when: "Set out",
			do: plan.plant
		},
		{
			id: `${zoneId}-${day}-lift`,
			when: "Lift",
			do: plan.harvest
		},
		{
			id: `${zoneId}-${day}-keep`,
			when: "Cure and store",
			do: plan.keep
		},
		{
			id: `${zoneId}-${day}-stock`,
			when: "At harvest",
			do: "Set aside at least twenty true-to-type bulbs that did not bolt. Not hybrids. Not thick necks."
		},
		{
			id: `${zoneId}-${day}-seed`,
			when: "Seed, the next year",
			do: plan.seed
		}
	];
	const done = tasks.filter((task) => checks.includes(task.id)).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-amber",
				children: tone === "fail" ? "Fix the packet first" : "Your window"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-1 max-w-2xl font-display text-3xl",
				children: plan.headline
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 text-sm text-muted tabular-nums",
				children: [
					done,
					" of ",
					tasks.length,
					" marked done"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-4 border-t border-ink/15",
				children: tasks.map((task) => {
					const on = checks.includes(task.id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						role: "checkbox",
						"aria-checked": on,
						onClick: () => onToggleCheck(task.id),
						className: `${press} flex w-full gap-4 border-b border-ink/15 py-4 text-left`,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-1 grid h-6 w-6 shrink-0 place-items-center border ${on ? "border-amber bg-amber text-paper" : "border-ink/30"}`,
							"aria-hidden": "true",
							children: on ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) : null
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block font-display text-sm text-amber",
							children: task.when
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `mt-1 block ${on ? "text-muted" : ""}`,
							children: task.do
						})] })]
					}) }, task.id);
				})
			})
		]
	});
}
function CompanionBoard() {
	const [tab, setTab] = (0, import_react.useState)("help");
	const list = tab === "help" ? HELPS : APART;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "my-8",
		"aria-label": "Companion plants",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex flex-wrap gap-2",
			role: "group",
			"aria-label": "Companion lists",
			children: [["help", "Plant with them"], ["apart", "Keep apart"]].map(([id, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				"aria-pressed": tab === id,
				onClick: () => setTab(id),
				className: `${press} h-11 border px-4 font-display text-lg ${tab === id ? "border-amber bg-amber text-paper" : "border-ink/20"}`,
				children: label
			}, id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4",
			children: list.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "border-t border-ink/15 py-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-3xl",
						children: item.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 max-w-2xl italic text-muted",
						children: item.place
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 max-w-2xl",
						children: item.why
					})
				]
			}, item.name))
		})]
	});
}
function Pager({ index, onOpen }) {
	const prev = CHAPTERS[index - 1];
	const next = CHAPTERS[index + 1];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
		className: "mt-14 grid gap-3 border-t border-ink/15 pt-5 sm:grid-cols-2",
		"aria-label": "Chapter pages",
		children: [prev ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onOpen(prev.id),
			className: `${press} min-h-11 border border-ink/15 px-4 py-3 text-left`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm text-muted",
				children: "Previous"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl",
				children: prev.id === "front" ? "Front" : prev.title
			})]
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {}), next ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => onOpen(next.id),
			className: `${press} min-h-11 border border-amber bg-amber px-4 py-3 text-right text-paper sm:col-start-2`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "block text-sm text-paper/80",
				children: "Next"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl",
				children: next.title
			})]
		}) : null]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBook, {});
}
//#endregion
export { Home as component };
