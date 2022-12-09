/*
Question 1
Given the following array and implement the table dynamically
*/
const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

// Q1-----------------------------------------------------------------
const createElementHelper = (type, textContent, className) => {
  const newElement = document.createElement(type);
  newElement.textContent = textContent;
  newElement.className = className;
  return newElement;
};

const createRowHelper = (arr, thOrTd) => {
  const row = createElementHelper("tr", "", "");
  const len = arr.length;
  const eles = arr.map((ele) => {
    if (ele === arr[len - 1]) {
      return thOrTd === "th"
        ? createElementHelper("th", ele, "longCell")
        : createElementHelper("td", ele, "longCell");
    } else {
      return thOrTd === "th"
        ? createElementHelper("th", ele, "cell")
        : createElementHelper("td", ele, "cell");
    }
  });
  row.append(...eles);
  return row;
};

const createTableHelper = () => {
  const table = createElementHelper("table", "", "table");
  const th = createRowHelper(tableInfo.tableHeader, "th");
  table.appendChild(th);
  for (const key of Object.keys(tableInfo.tableContent)) {
    const tr = createRowHelper(
      Object.values(tableInfo.tableContent[key]),
      "td"
    );
    table.appendChild(tr);
  }
  return table;
};

document.body.appendChild(createTableHelper());

// Q2-----------------------------------------------------------------
/*
Question 2
Given the array and generate order list and unordered list dynamically as following:
*/

const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];

const createListHelper = (list, type) => {
  const li =
    type === "orderedList"
      ? createElementHelper("ol", "", "ordered-list")
      : createElementHelper("ul", "", "ordered-list");
  const lis = list.map((ele) => {
    return createElementHelper("li", ele, "");
  });
  li.append(...lis);
  return li;
};

document.body.appendChild(createListHelper(list, "orderedList"));
document.body.appendChild(createListHelper(list, "unOrderedList"));

/*
Question 3
Given a array and implement a dropdown list with the following options dynamically 
FYI: use 'value' in the object as the value attribute in the option tag when you create the dropdown list
*/

const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

const createDropDownListHelper = (enter) => {
  const dropDownList = createElementHelper("Select", "", "dropDownList");
  const eles = enter.map((obj) => {
    const option = createElementHelper("option", obj.content, "");
    option.setAttribute("value", obj.value);
    return option;
  });
  dropDownList.append(...eles);
  return dropDownList;
};

document.body.appendChild(createDropDownListHelper(dropDownList));
