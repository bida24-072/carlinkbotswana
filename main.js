/* ============================================
   CARLINK BOTSWANA — Core Logic
============================================ */

/* ============================================
   CAR DATA (25 cars — common in Botswana)
============================================ */
const CARS = [
    { id: 1, make: "Toyota", model: "Hilux Double Cab", year: 2021, price: 385000, mileage: 62000, fuel: "Diesel", transmission: "Manual", color: "White", location: "Gaborone", type: "Local", body: "Bakkie", engine: "2.8L", owners: 1, image: "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1000&q=80", description: "Immaculate Hilux DC 4x4. Full service history, bank finance available. Accident-free." },
    { id: 2, make: "Toyota", model: "Land Cruiser Prado", year: 2020, price: 545000, mileage: 74000, fuel: "Petrol", transmission: "Automatic", color: "Silver", location: "Gaborone", type: "Local", body: "SUV", engine: "4.0L", owners: 2, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80", description: "Top-tier Prado VX. Leather interior, sunroof, tow bar. Ready for Botswana roads." },
    { id: 3, make: "Toyota", model: "Corolla Quest", year: 2022, price: 215000, mileage: 24000, fuel: "Petrol", transmission: "Automatic", color: "White", location: "Gaborone", type: "Local", body: "Sedan", engine: "1.6L", owners: 1, image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=1000&q=80", description: "Nearly new Corolla Quest. Under warranty, service plan active. Perfect family car." },
    { id: 4, make: "Toyota", model: "Fortuner", year: 2019, price: 445000, mileage: 98000, fuel: "Diesel", transmission: "Automatic", color: "Grey", location: "Francistown", type: "Local", body: "SUV", engine: "2.8L", owners: 2, image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1000&q=80", description: "Fortuner GD-6 4x4. Bull bar, tow bar, roof rack. Adventure-ready." },
    { id: 5, make: "Nissan", model: "NP300 Hardbody", year: 2018, price: 185000, mileage: 145000, fuel: "Diesel", transmission: "Manual", color: "White", location: "Gaborone", type: "Local", body: "Bakkie", engine: "2.5L", owners: 2, image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80", description: "Workhorse Hardbody. Well maintained, new tyres, canopy included." },
    { id: 6, make: "Nissan", model: "X-Trail", year: 2017, price: 235000, mileage: 118000, fuel: "Petrol", transmission: "Automatic", color: "Black", location: "Gaborone", type: "Local", body: "SUV", engine: "2.5L", owners: 2, image: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?auto=format&fit=crop&w=1000&q=80", description: "Spacious X-Trail 7-seater. Family favourite. Leather, reverse camera." },
    { id: 7, make: "Toyota", model: "Hilux Single Cab", year: 2019, price: 245000, mileage: 105000, fuel: "Diesel", transmission: "Manual", color: "White", location: "Palapye", type: "Local", body: "Bakkie", engine: "2.4L", owners: 1, image: "https://images.unsplash.com/photo-1621255117861-a8bce4c2e0a4?auto=format&fit=crop&w=1000&q=80", description: "Single cab work truck. Reliable, fuel-efficient. Ideal for business." },
    { id: 8, make: "Toyota", model: "RAV4", year: 2021, price: 385000, mileage: 48000, fuel: "Petrol", transmission: "Automatic", color: "Blue", location: "Gaborone", type: "Local", body: "SUV", engine: "2.0L", owners: 1, image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=1000&q=80", description: "Modern RAV4. Push start, panoramic sunroof, low mileage." },
    { id: 9, make: "Toyota", model: "Vitz", year: 2016, price: 95000, mileage: 145000, fuel: "Petrol", transmission: "Automatic", color: "Silver", location: "Gaborone", type: "Local", body: "Hatchback", engine: "1.0L", owners: 3, image: "https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&w=1000&q=80", description: "Economical Vitz. Perfect first car. Very light on fuel." },
    { id: 10, make: "Toyota", model: "Aqua", year: 2018, price: 155000, mileage: 92000, fuel: "Hybrid", transmission: "Automatic", color: "Pearl White", location: "Gaborone", type: "Import", body: "Hatchback", engine: "1.5L", owners: 1, image: "https://images.unsplash.com/photo-1623869675781-80aa31012a5a?auto=format&fit=crop&w=1000&q=80", description: "Fresh import Toyota Aqua Hybrid. Extremely fuel-efficient. Push start." },
    { id: 11, make: "Honda", model: "Fit", year: 2017, price: 125000, mileage: 108000, fuel: "Petrol", transmission: "Automatic", color: "White", location: "Gaborone", type: "Import", body: "Hatchback", engine: "1.3L", owners: 1, image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=1000&q=80", description: "Clean Honda Fit. Fresh import. Reverse camera, alloy wheels." },
    { id: 12, make: "Honda", model: "CR-V", year: 2019, price: 295000, mileage: 78000, fuel: "Petrol", transmission: "Automatic", color: "Black", location: "Gaborone", type: "Local", body: "SUV", engine: "2.0L", owners: 1, image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=1000&q=80", description: "Well-kept CR-V. Sunroof, leather seats, full service history." },
    { id: 13, make: "Mazda", model: "CX-5", year: 2020, price: 345000, mileage: 56000, fuel: "Petrol", transmission: "Automatic", color: "Red", location: "Gaborone", type: "Local", body: "SUV", engine: "2.0L", owners: 1, image: "https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?auto=format&fit=crop&w=1000&q=80", description: "Stunning CX-5 in Soul Red. Fully loaded. Under motorplan." },
    { id: 14, make: "Mazda", model: "Mazda 3", year: 2018, price: 175000, mileage: 88000, fuel: "Petrol", transmission: "Automatic", color: "Grey", location: "Maun", type: "Local", body: "Sedan", engine: "1.6L", owners: 2, image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1000&q=80", description: "Reliable Mazda 3. Smooth drive, great handling." },
    { id: 15, make: "Volkswagen", model: "Polo Vivo", year: 2019, price: 165000, mileage: 76000, fuel: "Petrol", transmission: "Manual", color: "White", location: "Gaborone", type: "Local", body: "Hatchback", engine: "1.4L", owners: 1, image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=80", description: "Polo Vivo. Perfect balance of economy and comfort. Service plan." },
    { id: 16, make: "Volkswagen", model: "Golf GTI", year: 2020, price: 465000, mileage: 42000, fuel: "Petrol", transmission: "Automatic", color: "White", location: "Gaborone", type: "Local", body: "Hatchback", engine: "2.0L Turbo", owners: 1, image: "https://images.unsplash.com/photo-1621361365424-06f0e1eb5c49?auto=format&fit=crop&w=1000&q=80", description: "Hot hatch GTI. DSG gearbox, sports seats, performance tyres." },
    { id: 17, make: "Ford", model: "Ranger Wildtrak", year: 2021, price: 495000, mileage: 38000, fuel: "Diesel", transmission: "Automatic", color: "Blue", location: "Gaborone", type: "Local", body: "Bakkie", engine: "2.0L Bi-Turbo", owners: 1, image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?auto=format&fit=crop&w=1000&q=80", description: "Wildtrak 4x4. Loaded with features. Roll bar, tow bar, sports bar." },
    { id: 18, make: "Ford", model: "EcoSport", year: 2018, price: 195000, mileage: 95000, fuel: "Petrol", transmission: "Automatic", color: "Silver", location: "Gaborone", type: "Local", body: "SUV", engine: "1.5L", owners: 2, image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1000&q=80", description: "Compact SUV EcoSport. Great for city driving." },
    { id: 19, make: "Isuzu", model: "D-Max", year: 2020, price: 385000, mileage: 62000, fuel: "Diesel", transmission: "Automatic", color: "White", location: "Francistown", type: "Local", body: "Bakkie", engine: "3.0L", owners: 1, image: "https://images.unsplash.com/photo-1623366302587-bca23fbc2d2f?auto=format&fit=crop&w=1000&q=80", description: "Legendary D-Max reliability. LX 4x4. Canopy included." },
    { id: 20, make: "Hyundai", model: "i20", year: 2019, price: 145000, mileage: 68000, fuel: "Petrol", transmission: "Manual", color: "Red", location: "Gaborone", type: "Local", body: "Hatchback", engine: "1.4L", owners: 1, image: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1000&q=80", description: "Stylish i20. Fun to drive. Great fuel economy." },
    { id: 21, make: "Hyundai", model: "Tucson", year: 2020, price: 425000, mileage: 52000, fuel: "Petrol", transmission: "Automatic", color: "Grey", location: "Gaborone", type: "Local", body: "SUV", engine: "2.0L", owners: 1, image: "https://images.unsplash.com/photo-1617469767053-d3b523a0b982?auto=format&fit=crop&w=1000&q=80", description: "Modern Tucson. Panoramic roof, leather, wireless charging." },
    { id: 22, make: "Kia", model: "Sportage", year: 2019, price: 355000, mileage: 72000, fuel: "Petrol", transmission: "Automatic", color: "White", location: "Gaborone", type: "Local", body: "SUV", engine: "2.0L", owners: 2, image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=1000&q=80", description: "Sportage. Great family SUV. Full service history." },
    { id: 23, make: "Mercedes-Benz", model: "C200", year: 2018, price: 395000, mileage: 82000, fuel: "Petrol", transmission: "Automatic", color: "Black", location: "Gaborone", type: "Local", body: "Sedan", engine: "2.0L Turbo", owners: 2, image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=1000&q=80", description: "Elegant C200. Full AMG kit, leather interior, sunroof." },
    { id: 24, make: "BMW", model: "X3", year: 2019, price: 495000, mileage: 68000, fuel: "Petrol", transmission: "Automatic", color: "White", location: "Gaborone", type: "Local", body: "SUV", engine: "2.0L Turbo", owners: 1, image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1000&q=80", description: "X3 xDrive. Luxury SUV. Full BMW service history." },
    { id: 25, make: "Toyota", model: "Etios", year: 2017, price: 105000, mileage: 128000, fuel: "Petrol", transmission: "Manual", color: "White", location: "Gaborone", type: "Local", body: "Sedan", engine: "1.5L", owners: 2, image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=80", description: "Reliable Etios. Great starter sedan. Very economical." }
];

/* ============================================
   HERO SLIDESHOW IMAGES
============================================ */
const HERO_SLIDES = [
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1594502184342-2e12f877aa73?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1920&q=80",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?auto=format&fit=crop&w=1920&q=80"
];

/* ============================================
   STATE
============================================ */
let wishlist = JSON.parse(localStorage.getItem("carlinkWishlist") || "[]");
let listings = JSON.parse(localStorage.getItem("carlinkListings") || "[]");
let activeCategory = "all";
let searchTerm = "";
let maxPrice = 0;
let makeFilter = "";
let sortBy = "newest";
let currentHeroSlide = 0;

/* ============================================
   HELPERS
============================================ */
function formatPula(n) {
    return "P" + Number(n).toLocaleString("en-BW", { maximumFractionDigits: 0 });
}

function formatMileage(n) {
    return Number(n).toLocaleString("en-BW") + " km";
}

function showToast(msg, type) {
    type = type || "success";
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        toast.className = "toast";
        document.body.appendChild(toast);
    }
    const icon = type === "error" ? "fa-circle-exclamation" : "fa-circle-check";
    toast.className = "toast " + type;
    toast.innerHTML = '<i class="fas ' + icon + '"></i> ' + msg;
    toast.classList.add("show");
    clearTimeout(toast._timer);
    toast._timer = setTimeout(function() { toast.classList.remove("show"); }, 2400);
}

/* Combine base cars + user listings */
function getAllCars() {
    return listings.concat(CARS);
}

/* ============================================
   HERO SLIDESHOW
============================================ */
function initHero() {
    const container = document.getElementById("hero-slides");
    const dotsEl = document.getElementById("hero-dots");
    if (!container) return;

    container.innerHTML = "";
    dotsEl.innerHTML = "";

    HERO_SLIDES.forEach(function(url, i) {
        const slide = document.createElement("div");
        slide.className = "hero-slide" + (i === 0 ? " active" : "");
        slide.style.backgroundImage = "url('" + url + "')";
        container.appendChild(slide);

        const dot = document.createElement("button");
        dot.className = "hero-dot" + (i === 0 ? " active" : "");
        dot.setAttribute("aria-label", "Slide " + (i + 1));
        dot.onclick = function() { goToHeroSlide(i); };
        dotsEl.appendChild(dot);
    });

    setInterval(function() { nextHeroSlide(); }, 6000);
}

function goToHeroSlide(index) {
    const slides = document.querySelectorAll(".hero-slide");
    const dots = document.querySelectorAll(".hero-dot");
    if (!slides.length) return;

    slides.forEach(function(s, i) { s.classList.toggle("active", i === index); });
    dots.forEach(function(d, i) { d.classList.toggle("active", i === index); });
    currentHeroSlide = index;
}

function nextHeroSlide() {
    goToHeroSlide((currentHeroSlide + 1) % HERO_SLIDES.length);
}

/* ============================================
   RENDER CARS
============================================ */
function renderCars() {
    const grid = document.getElementById("cars-grid");
    if (!grid) return;

    let cars = getAllCars();

    // Category
    if (activeCategory !== "all") {
        cars = cars.filter(function(c) { return c.body.toLowerCase() === activeCategory.toLowerCase(); });
    }

    // Make filter
    if (makeFilter) {
        cars = cars.filter(function(c) { return c.make.toLowerCase() === makeFilter.toLowerCase(); });
    }

    // Max price
    if (maxPrice > 0) {
        cars = cars.filter(function(c) { return c.price <= maxPrice; });
    }

    // AI-style search
    if (searchTerm) {
        const terms = searchTerm.toLowerCase().split(/\s+/).filter(Boolean);
        cars = cars.filter(function(c) {
            const haystack = (
                c.make + " " + c.model + " " + c.year + " " + c.body + " " + c.fuel + " " +
                c.transmission + " " + c.color + " " + c.location + " " + c.description + " " +
                c.type + " " + c.engine
            ).toLowerCase();
            return terms.every(function(t) { return haystack.includes(t); });
        });
    }

    // Sort
    if (sortBy === "price-low") cars.sort(function(a, b) { return a.price - b.price; });
    else if (sortBy === "price-high") cars.sort(function(a, b) { return b.price - a.price; });
    else if (sortBy === "mileage") cars.sort(function(a, b) { return a.mileage - b.mileage; });
    else if (sortBy === "year") cars.sort(function(a, b) { return b.year - a.year; });
    else cars.sort(function(a, b) { return b.id - a.id; });

    if (cars.length === 0) {
        grid.innerHTML =
            '<div class="no-results" style="grid-column:1/-1;">' +
                '<i class="fas fa-car-side"></i>' +
                '<h3>No cars match your search</h3>' +
                '<p>Try different keywords or clear the filters.</p>' +
                '<button class="btn btn-outline" onclick="clearFilters()"><i class="fas fa-times"></i> Clear Filters</button>' +
            '</div>';
        return;
    }

    grid.innerHTML = cars.map(function(car) {
        const isWished = wishlist.includes(car.id);
        const badge = car.type === "Import" ?
            '<span class="car-badge import">Import</span>' :
            '<span class="car-badge local">Local</span>';

        return '<div class="car-card" onclick="openCarModal(' + car.id + ')">' +
            '<div class="car-image" style="background-image:url(\'' + car.image + '\')">' +
                badge +
                '<button class="car-wishlist ' + (isWished ? 'active' : '') + '" data-wish="' + car.id + '" onclick="toggleWishlist(event, ' + car.id + ')">' +
                    '<i class="fa' + (isWished ? 's' : 'r') + ' fa-heart"></i>' +
                '</button>' +
            '</div>' +
            '<div class="car-info">' +
                '<h3 class="car-title">' + car.year + ' ' + car.make + ' ' + car.model + '</h3>' +
                '<span class="car-subtitle">' + car.engine + ' · ' + car.transmission + ' · ' + car.fuel + '</span>' +
                '<div class="car-price">' + formatPula(car.price) + '</div>' +
                '<div class="car-specs">' +
                    '<div class="car-spec"><i class="fas fa-road"></i> ' + formatMileage(car.mileage) + '</div>' +
                    '<div class="car-spec"><i class="fas fa-gas-pump"></i> ' + car.fuel + '</div>' +
                    '<div class="car-spec"><i class="fas fa-cog"></i> ' + car.transmission + '</div>' +
                    '<div class="car-spec"><i class="fas fa-palette"></i> ' + car.color + '</div>' +
                '</div>' +
                '<div class="car-footer">' +
                    '<span class="car-location"><i class="fas fa-map-marker-alt"></i> ' + car.location + '</span>' +
                    '<div class="car-actions">' +
                        '<button class="car-action-btn" onclick="event.stopPropagation(); whatsappCar(' + car.id + ')"><i class="fab fa-whatsapp"></i></button>' +
                        '<button class="car-action-btn" onclick="event.stopPropagation(); openCarModal(' + car.id + ')"><i class="fas fa-arrow-right"></i></button>' +
                    '</div>' +
                '</div>' +
            '</div>' +
        '</div>';
    }).join("");
}

/* ============================================
   CAR MODAL
============================================ */
function openCarModal(carId) {
    const car = getAllCars().find(function(c) { return c.id === carId; });
    if (!car) return;

    let modal = document.getElementById("car-modal");
    if (!modal) {
        modal = document.createElement("div");
        modal.id = "car-modal";
        modal.className = "modal-overlay";
        modal.onclick = function(e) { if (e.target === modal) closeCarModal(); };
        document.body.appendChild(modal);
    }

    modal.innerHTML =
        '<div class="car-modal">' +
            '<button class="modal-close" onclick="closeCarModal()"><i class="fas fa-times"></i></button>' +
            '<div class="car-modal-img" style="background-image:url(\'' + car.image + '\')"></div>' +
            '<div class="car-modal-body">' +
                '<h2>' + car.year + ' ' + car.make + ' ' + car.model + '</h2>' +
                '<p class="car-modal-sub">' + car.body + ' · ' + car.engine + ' · ' + car.type + ' Vehicle</p>' +
                '<div class="car-modal-price">' + formatPula(car.price) + '</div>' +
                '<div class="specs-table">' +
                    '<div class="spec-row"><span class="label">Mileage</span><span class="value">' + formatMileage(car.mileage) + '</span></div>' +
                    '<div class="spec-row"><span class="label">Year</span><span class="value">' + car.year + '</span></div>' +
                    '<div class="spec-row"><span class="label">Fuel</span><span class="value">' + car.fuel + '</span></div>' +
                    '<div class="spec-row"><span class="label">Transmission</span><span class="value">' + car.transmission + '</span></div>' +
                    '<div class="spec-row"><span class="label">Engine</span><span class="value">' + car.engine + '</span></div>' +
                    '<div class="spec-row"><span class="label">Colour</span><span class="value">' + car.color + '</span></div>' +
                    '<div class="spec-row"><span class="label">Owners</span><span class="value">' + car.owners + '</span></div>' +
                    '<div class="spec-row"><span class="label">Location</span><span class="value">' + car.location + '</span></div>' +
                '</div>' +
                '<p style="color:var(--muted); line-height:1.75; margin-bottom: 24px;">' + car.description + '</p>' +
                '<div class="modal-actions">' +
                    '<button class="btn" onclick="whatsappCar(' + car.id + ')"><i class="fab fa-whatsapp"></i> Enquire on WhatsApp</button>' +
                    '<button class="btn btn-outline" onclick="copyCarDetails(' + car.id + ')"><i class="fas fa-share-alt"></i> Share Details</button>' +
                '</div>' +
            '</div>' +
        '</div>';

    modal.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeCarModal() {
    const modal = document.getElementById("car-modal");
    if (modal) modal.classList.remove("open");
    document.body.style.overflow = "";
}

/* ============================================
   WHATSAPP
============================================ */
function whatsappCar(carId) {
    const car = getAllCars().find(function(c) { return c.id === carId; });
    if (!car) return;
    const msg = "Hi CarLink Botswana! I'm interested in the " + car.year + " " + car.make + " " + car.model + " (" + formatPula(car.price) + "). Is it still available?";
    window.open("https://wa.me/26771234567?text=" + encodeURIComponent(msg), "_blank");
}

function copyCarDetails(carId) {
    const car = getAllCars().find(function(c) { return c.id === carId; });
    if (!car) return;
    const text = car.year + " " + car.make + " " + car.model + "\n" +
        "Price: " + formatPula(car.price) + "\n" +
        "Mileage: " + formatMileage(car.mileage) + "\n" +
        "Fuel: " + car.fuel + " | Transmission: " + car.transmission + "\n" +
        "Location: " + car.location + "\n\n" +
        car.description + "\n\n" +
        "Via CarLink Botswana";
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(function() {
            showToast("Details copied", "success");
        });
    }
}

/* ============================================
   WISHLIST
============================================ */
function toggleWishlist(e, carId) {
    e.stopPropagation();
    const idx = wishlist.indexOf(carId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast("Removed from favourites");
    } else {
        wishlist.push(carId);
        showToast("Added to favourites");
    }
    localStorage.setItem("carlinkWishlist", JSON.stringify(wishlist));
    renderCars();
    updateWishlistCount();
}

function updateWishlistCount() {
    const el = document.getElementById("wishlist-count");
    if (el) {
        el.textContent = wishlist.length;
        el.style.display = wishlist.length > 0 ? "flex" : "none";
    }
}

/* ============================================
   SEARCH & FILTERS
============================================ */
function applySearch() {
    searchTerm = (document.getElementById("search-input").value || "").trim();
    maxPrice = parseInt(document.getElementById("price-filter").value) || 0;
    makeFilter = document.getElementById("make-filter").value || "";
    sortBy = document.getElementById("sort-filter").value || "newest";
    renderCars();
}

function clearFilters() {
    document.getElementById("search-input").value = "";
    document.getElementById("price-filter").value = "";
    document.getElementById("make-filter").value = "";
    document.getElementById("sort-filter").value = "newest";
    searchTerm = "";
    maxPrice = 0;
    makeFilter = "";
    sortBy = "newest";
    activeCategory = "all";
    document.querySelectorAll(".cat-btn").forEach(function(b) {
        b.classList.toggle("active", b.dataset.cat === "all");
    });
    renderCars();
}

function filterCategory(cat, btn) {
    activeCategory = cat;
    document.querySelectorAll(".cat-btn").forEach(function(b) { b.classList.remove("active"); });
    if (btn) btn.classList.add("active");
    renderCars();
}

/* ============================================
   SELL YOUR CAR
============================================ */
function submitListing(e) {
    e.preventDefault();
    const car = {
        id: Date.now(),
        make: document.getElementById("s-make").value.trim(),
        model: document.getElementById("s-model").value.trim(),
        year: parseInt(document.getElementById("s-year").value),
        price: parseInt(document.getElementById("s-price").value),
        mileage: parseInt(document.getElementById("s-mileage").value),
        fuel: document.getElementById("s-fuel").value,
        transmission: document.getElementById("s-transmission").value,
        color: document.getElementById("s-color").value.trim() || "Unspecified",
        location: document.getElementById("s-location").value.trim() || "Gaborone",
        type: "Local",
        body: document.getElementById("s-body").value,
        engine: document.getElementById("s-engine").value.trim() || "—",
        owners: parseInt(document.getElementById("s-owners").value) || 1,
        image: document.getElementById("s-image").value.trim() || "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=80",
        description: document.getElementById("s-desc").value.trim() || "Contact for more details.",
        submittedAt: new Date().toISOString()
    };

    if (!car.make || !car.model || !car.year || !car.price || !car.mileage) {
        showToast("Please fill in all required fields", "error");
        return;
    }

    listings.unshift(car);
    localStorage.setItem("carlinkListings", JSON.stringify(listings));

    showToast("Your car has been submitted!", "success");
    e.target.reset();

    // Scroll to listings
    document.getElementById("cars").scrollIntoView({ behavior: "smooth" });
    renderCars();
}

/* ============================================
   INIT
============================================ */
document.addEventListener("DOMContentLoaded", function() {
    initHero();
    renderCars();
    updateWishlistCount();

    const searchInput = document.getElementById("search-input");
    if (searchInput) {
        searchInput.addEventListener("input", function() {
            clearTimeout(window._searchTimer);
            window._searchTimer = setTimeout(applySearch, 300);
        });
    }
});
