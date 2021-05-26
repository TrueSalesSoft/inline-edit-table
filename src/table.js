const rows = [
    ['Apple', '1 oz. (28.35 g)', '20 cal'],
    ['Banana', '1 banana (125 g)', '111 cal'],
    ['Orange', '1 orange (131 g)', '62 cal'],
];
window.onload = () => {
    let savedJson = localStorage.getItem('rowsJson');
    if (!savedJson) {
        savedJson = JSON.stringify(rows);
        localStorage.setItem('rowsJson', savedJson);
    }
    let savedRows = JSON.parse(savedJson);

    function buildColumn(text) {
        let column = document.createElement('td');
        column.className = 'edt-column';
        let editBtn = document.createElement('div');
        editBtn.className = 'edt-change-button';
        let contentDiv = document.createElement('div');
        contentDiv.innerText = text;
        column.appendChild(contentDiv);
        column.appendChild(editBtn);
        return column;
    }

    function buildRow(columns) {
        let row = document.createElement('tr');
        columns.forEach(column => {
            row.appendChild(column);
        });
        return row;
    }

    let tbodyEl = document.querySelector('tbody');
    savedRows.forEach(row => {
        let columns = [];
        row.forEach(column => {
            columns.push(buildColumn(column));
        });
        tbodyEl.append(buildRow(columns));
    });
};