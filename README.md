## Thông tin cá nhân
- Gen 52
- **Nguyễn Hồng Lợi**
## Kiến thức ề HTML
1. Code html để liên kết file js & css từ page.html & index.html.
2. Sự khác biệt giữa `textarea` & `input` elements:

   |  | `textarea` | `input` |
   |-------|-------|-------|
   | Đinh dạng | Cho phép nhiều dòng | Chỉ 1 dòng |
   | Độ rộng | Có thể được chỉ định kích thước theo chiều dài và chiều rộng |chỉ có thể được chỉ định chiều rộng |
   | Loại nhập | Có nhiều loại khác nhau, ví dụ như text, password, email, date, number...| Chỉ hỗ trợ nhập văn bản|
   |Thẻ đóng| phải có thẻ đóng | Không cần|
3. Thực hiện làm combobox:
- [html](https://github.com/Nguyen-Loi/Technical_Front_end/blob/main/html_bai_3.html)
## KiếN thức về CSS
1. Liệt kê 5 CSS pseudo class/element:
- `:hover`được sử dụng để tạo kiểu cho một phần tử khi người dùng di chuột qua nó.
- `:active`được sử dụng để tạo kiểu cho một phần tử khi nó đang được kích hoạt bởi người dùng, thường là khi được nhấn vào.
- `:visited` được sử dụng để tạo kiểu cho một liên kết đã được người dùng truy cập.
- `:nth-child()` được sử dụng để chọn và tạo kiểu cho các phần tử con cụ thể dựa trên vị trí của chúng trong phần tử cha.
- `::before` được sử dụng để chèn nội dung trước nội dung của một phần tử, có thể được tạo kiểu riêng biệt so với nội dung chính.
2. Hãy nêu sự khác nhau của hệ màu RGBA so với RGB 
- RGBA bao gồm các giá trị màu đỏ, xanh lá cây, xanh dương và độ trong suốt (Alpha), trong khi RGB chỉ bao gồm các giá trị màu đỏ, xanh lá cây và xanh dương.
3. Sử dụng thuộc tính CSS phù hợp khiến một hình ảnh (vuông) trở thành hình tròn.
```html
 <div class="rounded"></div>
```

```css
   div{
       width: 500px;
       height: 500px;
       background-color:yellow;
       border-radius: 50%;
      }
```
4. Chỉ sử dụng CSS, hãy di chuyển vị trí các ô trở nên sang như hình mẫu với cấu trúc HTML/CSS cho sẵn.
- [Trả lời CSS](https://github.com/Nguyen-Loi/Technical_Front_end/blob/main/css_bai_4.html)
## Kiến thức về JS
1. Có bao nhiêu cách viết vòng lặp for? Nêu cấu trúc phù hợp với các loại vòng lặp?
- Có khá nhiều vòng lặp nên sẽ nêu những vòng lặp phổ biến (cụ thể là 3):
        1. Vòng lặp `for`
        -  Cấu trúc: `for (giá trị khởi tạo; điều kiện; thay đổi giá trị khởi tạo)` 
        -  Phù hợp cho việc vòng lặp có điều kiện
        2. Vòng lặp `for..in`
        - Cấu trúc: `for (variable in object) `
        - Phù hợp để lặp qua các thuộc tính đối tượng `for..in`
        3. Vòng lặp `forEach`
        - Cấu trúc:` array.forEach(function(currentValue, index, arr), thisValue)`
        - Phù hợp để lặp qua array (mảng)
2. Kết quả của đoạn code và giải thích
 ```js
   function f (){
     let b = 9
    return ++b < 10 ? b : 'Yah'
  }
  let a = f()
  console.log(a)
 ```
 - Kết quả là 10
 - Giải thích: Trong hàm f(), biến b được thiết lập bằng giá trị 9. Sau đó, biểu thức ++b được tính toán, giá trị của b được tăng lên một đơn vị và trả về giá trị mới này (10). Biểu thức so sánh ++b < 10 được kiểm tra, và vì giá trị 10 không nhỏ hơn 10, biểu thức trả về giá trị false.
3. Đề xuất giải pháp thay thế cấu trúc if else sau đây để khiến code trở nên gọn gàng. Chữ La Mã hàng đơn vị. Sửa đổi hàm roman_unit.
- Sử dụng một mảng để lưu các giá trị chữ số La Mã tương ứng với các số thập phân từ 1 đến 10. Sau đó, trả về giá trị tương ứng trong mảng với chỉ số là **decimal_number - 1**. Điều này hoạt động bởi vì chỉ số đầu tiên trong mảng là 0, vì vậy chúng ta cần trừ 1 từ decimal_number để lấy được chỉ số chính xác trong mảng.
4. Viết một regular expression có thể match được email?
-  const regex = `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`;
5. Hãy cho biết kết quả đoạn code sau và giải thích (bất đồng bộ)
-  Đầu tiên, hàm `resolveAfter2Seconds()` và `resolveAfter1Second()` trả về một promise (lời nhắn) với thời gian chờ là 2 giây và 1 giây tương ứng. Hàm `sequentialStart()` sẽ chạy hai hàm promise này lần lượt theo thứ tự và chờ kết quả trả về của từng promise. Vì sử dụng `await`
- Hàm `concurrentStart()` sẽ chạy hai promise đồng thời, nhưng sử dụng từ khóa `await` để chờ kết quả trả về của từng promise theo thứ tự.
- Hàm `concurrentPromise()` cũng chạy hai promise đồng thời, nhưng sử dụng `Promise.all()` để chờ cả hai promise trả về kết quả trước khi in kết quả. (Đợi tất cả đã xong)
- Hàm `parallel()` sử dụng `Promise.all()` và `async/await` để thực hiện các promise đồng thời và chờ kết quả trả về của từng promise.
- Kết quả: Khi chạy đoạn code trên, kết quả được in ra trên console sẽ được hiển thị theo thứ tự chạy của các hàm. Đầu tiên là kết quả của hàm `sequentialStart()`, sau đó là `concurrentStart()`, `concurrentPromise()`, và cuối cùng là `parallel()`.
6. Giải thích phương thức element.insertAdjacentHTML(). Viết một hàm 10 nút tương ứng, đi kèm với eventListener là in ra màn hình giá trị của nút đó (được cung cấp trong mảng) và chèn vào trong element có id là container.
- Phương thức `element.insertAdjacentHTML()` là một phương thức của đối tượng Element trong JavaScript, được sử dụng để chèn HTML vào trong một phần tử HTML. Nó cho phép thêm HTML vào trước, sau, trong và thay thế nội dung của phần tử.
- Các vị trí chèn HTML có thể được chọn bằng cách truyền một chuỗi đại diện cho vị trí chèn vào phương thức insertAdjacentHTML(). Các vị trí chèn HTML bao gồm:
    - `beforebegin`: chèn HTML vào trước phần tử hiện tại
    - `afterbegin`: chèn HTML vào đầu phần tử hiện tại
    - `beforeend`: chèn HTML vào cuối phần tử hiện tại
    - `afterend`: chèn HTML vào sau phần tử hiện tại
- Viết hàm tương ứng:
    - let animals = ['cat','rabbit','dog','fox','fish','racoon','tiger','bear','parrot','snake']
    - Result: [JS](https://github.com/Nguyen-Loi/Technical_Front_end/blob/main/js_bai_6.js)
7. Từ câu tiếp theo trở đi sẽ sử dụng chung source code như sau. Đoạn code trên có thể chọn ngẫu nhiên 10 pokemon. Cập nhật hàm ở` main` để có thể kết thúc hàm công việc đang chạy (lấy dữ liệu) nếu thời gian chạy quá chậm  (> 2000ms)
- [js](https://github.com/Nguyen-Loi/Technical_Front_end/blob/main/js_bai_7_c.js)
        
