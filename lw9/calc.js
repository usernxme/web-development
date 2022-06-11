function calc(expression) 
{
    const operators = ['+', '-', '*', '/'];
    let countL = 0, countR = 0;
    let stack = [];
    let x = 0, y = 0;
    let digitN = 0, operatorsN = 0;

    if (expression.length === 0 || typeof expression != 'string')
    {
        console.log('Ошибка: Входное выражение введенено неправильно');
        return;
    }

    for (let i = 0; i < expression.length; i++)
    {
        if (expression[i] === '(') countL++;
        if (expression[i] === ')') countR++;
    }
    if (countL != countR) // Проверка на количество скобок 
    {
        console.log('Ошибка: Неравное количество скобок');
        return;
    } 

    expression = expression.replace(/[(,)]/g, ' ');
    expression = expression.replace(/ +/g, ' ').trim().split(' ').reverse();
    // console.log(expression);

    for (let i = 0; i < expression.length; i++)
    {
        (isFinite(expression[i])) ? digitN++ : null;
        (operators.includes(expression[i])) ? operatorsN++ : null;
    }
    (operatorsN === 0) ? console.log('Ошибка: В выражении нет операндов') : null;
    (digitN === 0) ? console.log('Ошибка: В выражении нет слагаемых') : null;
    if (digitN - operatorsN > 1)
    {
        console.log('Ошибка: Слагаемых значительно больше чем операндов');
        return;
    }

    for (let i = 0; i < expression.length; i++)
    {
        // console.log(stack);
        if (!isFinite(expression[i]) && !operators.includes(expression[i]))
        {
            console.log('Ошибка: Одно из слагаемых не число и не операнд');
            return;
        }
        if (operators.includes(expression[i]))
        {
            if (stack.length < 2)
            {
                console.log('Ошибка: Для выполнения операции нехватает аргументов');
                return;
            }
            switch (expression[i])
            {
                case '+':
                    y = stack.pop();
                    x = stack.pop();
                    stack.push(y + x);
                    break;
                case '-':
                    y = stack.pop();
                    x = stack.pop();
                    stack.push(y - x);
                    break;
                case '/':
                    y = stack.pop();
                    x = stack.pop();
                    stack.push(y / x);
                    break;
                case '*':
                    y = stack.pop();
                    x = stack.pop();
                    stack.push(y * x);
                    break;
            }
        }
        if (isFinite(expression[i])) 
            stack.push(parseFloat(expression[i]));
    }

    if (stack.length != 1)
    {
        console.log('Ошибка: !');
        return;
    }
    return stack.pop();
}