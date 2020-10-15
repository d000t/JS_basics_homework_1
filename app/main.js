    function whats_your_name() {
        const name = prompt('Введи своё имя');
        const family = prompt('Введи свою фамилию');
        alert('Привет, ' + name + ' ' + family);
    }

    function find_out_age() {
        const date = new Date();
        const birth_year = prompt('Введите ваш год рождения');
        let age = date.getFullYear()-birth_year;
        alert('Вам возраст '+age);
    }

    function square_and_perimeter_of_square() {
        const sqr_length = prompt('Введите длину стороны квадрата');
        const sqr_perimeter = 4 * sqr_length;
        const square_square = sqr_length**2;
        alert(' Периметр квадрата равен ' + sqr_perimeter + '\n Площадь квадрата равна ' + square_square);
    }
    function circle_square() {
        const circle_radius = prompt('Введите радиус окружности');
        const circle_square = Math.PI * circle_radius ^ 2;
        alert('Площадь окружности равна ' + circle_square);
    }
    function covering_distance() {
        const distance = prompt('Введите расстояние между городами');
        const required_hours = prompt('За сколько часов вы хотите добраться?');
        const avg_speed = distance/required_hours;
        alert('Необходимая средняя скорость - ' + avg_speed + ' км/час');
    }

    function convertUSD_to_euro_uah() {
        const usd = prompt('Введите количество долларов');
        const euro = usd*0.85;
        const uah = usd*28.32;
        alert(usd + ' долларов\n'+ euro + " евро \n" + uah + ' гривен');
    }
    function memory_calculation() {
        const capacity = 1024 * prompt('Введите обьем флешки в Гб');
        const number_of_files = Math.floor(capacity/820);
        alert(number_of_files + ' файлов поместится на флешку');
    }

    function buying_chocolate() {
        let money = prompt('Введите сумму доступных средств');
        let price = prompt('Какая цена одной шоколадки');
        if (price > money) {
            alert('У вас недостаточно денег для покупки')
        } else {
            let amount = Math.floor(Number(money) / Number(price));
            if (amount < 0) {
                amount = 0;
            }
            let odd_money = money - (amount * price);
            if (odd_money < 0) {
                odd_money = 0;
            }
            alert(money + '- количество денег\n' + price + ' - цена за штуку' + '\nКоличество шоколадок - ' + amount + "\nСдача - " + odd_money);
    }
    }
    function reverse_string(){
        let str = prompt('Введите число');
        let final_str='';
        if (str.includes('-')){
            str=str.slice(1, str.length);
            final_str='-';
        }
        for (let i = 2; i >= 0; i--) {
            final_str = String(final_str) + str%10;
            str=str.substring(0,i);
        }
        alert(final_str);
}