document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Ngăn chặn hành vi mặc định của form (tải lại trang)

    // Lấy file ảnh từ input
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];  // Lấy file đầu tiên được chọn

    // Lấy nhãn của ảnh từ input
    const labelInput = document.getElementById('imageLabel');
    const labelText = labelInput.value.trim();  // Lấy nhãn và loại bỏ khoảng trắng ở đầu và cuối

    // Kiểm tra xem người dùng đã chọn ảnh chưa
    if (!file) {
        alert('Vui lòng chọn một file ảnh.');  // Thông báo nếu chưa chọn file
        return;
    }
    
    // Kiểm tra xem người dùng đã nhập nhãn chưa
    if (!labelText) {
        alert('Vui lòng nhập nhãn cho ảnh.');  // Thông báo nếu chưa nhập nhãn
        return;
    }
    
    // Tạo một đối tượng FileReader để đọc nội dung của file ảnh
    const reader = new FileReader();
    
    // Khi FileReader hoàn thành việc đọc file
    reader.onload = function(e) {
        const imageUrl = e.target.result;  // Lấy đường dẫn URL của ảnh đã đọc
        const gallery = document.getElementById('gallery');  // Tham chiếu đến phần gallery để hiển thị ảnh

        // Tạo container cho ảnh và bình luận
        const imageContainer = document.createElement('div');
        imageContainer.className = 'image-container';  // Thêm class để dễ dàng CSS

        // Tạo một phần tử div để hiển thị nhãn của ảnh
        const imageLabel = document.createElement('div');
        imageLabel.className = 'image-label';  // Thêm class cho nhãn
        imageLabel.textContent = labelText;  // Đặt nhãn cho ảnh

        // Tạo phần tử img để hiển thị ảnh
        const img = document.createElement('img');
        img.src = imageUrl;  // Đặt đường dẫn URL của ảnh vào thuộc tính src

        // Tạo form cho người dùng nhập bình luận
        const commentForm = document.createElement('form');
        commentForm.className = 'comment-form';  // Thêm class cho form bình luận

        // Tạo input để người dùng nhập bình luận
        const commentInput = document.createElement('input');
        commentInput.type = 'text';
        commentInput.placeholder = 'Nhập bình luận...';  // Gợi ý người dùng nhập bình luận

        // Tạo nút gửi bình luận
        const commentButton = document.createElement('button');
        commentButton.textContent = 'Đăng';  // Nhãn của nút
        commentButton.type = 'button';  // Đặt kiểu nút là button để tránh hành vi submit form

        // Thêm input và nút vào form bình luận
        commentForm.appendChild(commentInput);
        commentForm.appendChild(commentButton);

        // Tạo container để hiển thị các bình luận
        const commentsContainer = document.createElement('div');
        commentsContainer.className = 'comments';  // Thêm class cho container bình luận

        // Xử lý sự kiện khi người dùng nhấn nút "Gửi"
        commentButton.addEventListener('click', function() {
            const commentText = commentInput.value.trim();  // Lấy nội dung bình luận và loại bỏ khoảng trắng
            if (commentText) {
                const comment = document.createElement('div');  // Tạo div để chứa bình luận mới
                comment.className = 'comment';  // Thêm class cho bình luận
                comment.textContent = commentText;  // Đặt nội dung của bình luận
                commentsContainer.appendChild(comment);  // Thêm bình luận vào container
                commentInput.value = '';  // Xóa nội dung input sau khi gửi bình luận
            }
        });

        // Thêm nhãn ảnh, ảnh, form bình luận và container bình luận vào container chính của ảnh
        imageContainer.appendChild(imageLabel);  // Thêm nhãn trên đầu ảnh
        imageContainer.appendChild(img);  // Thêm ảnh vào container
        imageContainer.appendChild(commentForm);  // Thêm form bình luận
        imageContainer.appendChild(commentsContainer);  // Thêm container chứa bình luận

        // Thêm container ảnh vào gallery
        gallery.appendChild(imageContainer);

        // Reset form sau khi ảnh đã được tải lên
        fileInput.value = '';  // Xóa file đã chọn
        labelInput.value = '';  // Xóa nhãn đã nhập
    };
    
    // Đọc file ảnh dưới dạng URL để hiển thị trên trang
    reader.readAsDataURL(file);
});