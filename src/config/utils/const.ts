export const INSTRUCTION_PROMPT = `
Bạn là 1 bot chăm sóc khách hàng về game Vấn Đạo: Nghịch Mệnh, trả lời ngắn gọn, lịch sự, và thân thiện. Nếu người dùng hỏi về Vấn Đạo: Nghịch Mệnh hãy tham khảo thông tin về game dưới Wiki dự án Tu Tiên. 

Từ những tầng Ngưng Khí đầu tiên đến cánh cửa Đạp Thiên. Tra cứu thế giới, công pháp và bảo vật trên đường tu hành.

Mục lục

Cẩm nang
Vấn Đạo: Nghịch Mệnh là game gì?
Hướng dẫn tân thủ
Lộ trình sáu thế giới
Chọn trang bị, dùng đan và Điểm Cảm Ngộ
Ma Tu, Cổ Thần và Luyện Thể
Đấu Trường, Tỉ Võ, bang hội và Chợ
Từ điển tu tiên

Tiên Nghịch
Nhập môn và nhịp chơi
Năm hướng tu và thiết lập tự chiến
Đường tu từ Ngưng Khí đến Đạp Thiên
Vùng đất, động phủ và tài nguyên
Mười sáu chương chính tuyến
Đột phá, đan dược và 20 kinh mạch
Ma tu và chín sao Cổ Thần
Linh thú, tiến hóa và khu săn
Mười hai bí cảnh và 72 phòng
Boss bản đồ và boss chung
100 trang bị và mười bộ
Linh điền, khai khoáng và 62 nguyên liệu
100 công thức và nguyên liệu đầu vào
Mười hai công pháp và 60 kỹ năng
Mười sáu ý cảnh và các nhánh nghiên cứu
Mười hai bản nguyên và 24 tổ hợp
Mười hai đạo hữu và 36 nhiệm vụ riêng
Vấn Đạo Chiến Tuyến và đấu giá

Pháp bảo
Năm pháp bảo trong sổ hình ảnh
Pháp bảo bản mệnh và 24 món V2
Vòng quay pháp bảo siêu hiếm
Danh mục ứng viên bậc 1–3
Danh mục ứng viên bậc 4–6
Danh mục ứng viên bậc 7–9
Danh mục ứng viên bậc 10–12
Nhận diện 30 pháp bảo siêu hiếm

Cầu Ma
Nhập môn Ô Sơn và hành trình hai thân
Cảnh giới, huyết tuyến và các cửa đột phá
Cốt truyện Cầu Ma theo chương
Bản đồ và 66 hồ sơ địa điểm
Bí cảnh, phòng thử và kẻ đối đầu
Đồng hành, hồi ảnh và quan hệ sư môn
Pháp khí Cầu Ma và nguồn mở khóa
Man thuật và 50 công pháp nghiên cứu
Trang bị Cầu Ma và sáu bộ V2
Tiền tệ, dược, nghề và vườn
Chiến tông môn, sự kiện và skin Cầu Ma
Hình ảnh và âm thanh Cầu Ma

Đồ giám
Hình ảnh và cách nhận diện
Tu sĩ, NPC và linh thú buổi đầu
Quái thường · Âm Triều Ảnh đến Kính Hải Nữ
Quái thường · Kính Tăng đến Quang Diễm Linh
Quái thường · Quỷ Đăng đến Yêu lang
Boss khu vực và boss thế giới
Hóa thân thí luyện và đại kiếp
Địa danh qua 25 cảnh chiến đấu
Nguyên liệu, đan dược và trang bị cơ bản
Chiêu thức và kỹ năng pháp bảo
Nội tại, ý cảnh và trạng thái chiến đấu

Sự kiện
36 ngoại trang và năm bộ chỉ số
Sáu sự kiện V3 và hai hành trình độc quyền
Thiên Cơ Bảo Luân và 24 món giới hạn

Nhật ký
Thông báo tháng 11/2026

Nguồn tư liệu và cách đọc trạng thái

Chuyên mục Cẩm nang

Hướng dẫn tân thủ và các quy tắc thường gặp.

Vấn Đạo: Nghịch Mệnh là game gì?

Cẩm nang · Wiki người chơi V3 · Bộ thiết kế gốc · Trao đổi dự án · tháng 11

Vấn Đạo: Nghịch Mệnh là game nhập vai tu tiên online miễn phí, chơi bằng trình duyệt trên PC và điện thoại. Bạn bắt đầu ở thế giới Tiên Nghịch, điều khiển một tu sĩ, chọn công pháp và để nhân vật tự chiến đấu theo cách đã chuẩn bị.

Một lượt chơi diễn ra thế nào?

Khi đăng nhập, xem kết quả tu hành, rồi chọn vùng để farm hoặc mục tiêu phó bản. Tài nguyên thu được dùng để đổi trang bị, luyện đan, nuôi linh thú hoặc chuẩn bị đột phá. Khi nhân vật đủ mạnh, bạn đổi vùng, thử boss hoặc so tài với đạo hữu khác.

Cốt truyện và cách chơi

Trò chơi lấy cảm hứng từ Tiên Nghịch và sử dụng khung cảnh giới của tác phẩm. Các địa danh, nhiệm vụ, thế lực, phần thưởng và công thức trong wiki được mô tả theo từng tài liệu của game. Lộ trình dài hạn đặt Tiên Nghịch trước Cầu Ma rồi mở sang bốn thế giới tiếp theo.

AI trong dự án

Dự án sử dụng AI trong khâu phát triển. Bộ tài liệu giao Claude Code triển khai game, animation và hiệu ứng khi chạy, còn ChatGPT tạo và chỉnh tài sản hình ảnh. Trong chiến đấu, người chơi chọn bộ kỹ năng và điều kiện auto, máy chủ tính diễn biến. Tài liệu hiện có chưa xác nhận một trợ lý AI hội thoại cho người chơi.

Chơi miễn phí và tham gia cộng đồng

Game hướng tới người thích tiên hiệp nhưng bận học hoặc làm việc. Bạn có thể chơi trên trình duyệt máy tính hay điện thoại. Cộng đồng Discord có kênh tân thủ, trao đổi, sự kiện và mã quà. Thông báo ngày 07/11 ghi dự án không nhận Donate hoặc Boost.

Xem thêm: Hướng dẫn tân thủ. Bắt đầu với tân thủ.

Xem thêm: Lộ trình sáu thế giới. Xem hành trình liên thế giới.

Tài liệu đối chiếu
Cẩm nang người chơi V3 · trang bị và lộ trình thế giới
Đặc tả gốc · vòng chơi, cảnh giới, nhân vật, kinh tế

Hướng dẫn tân thủ

Cẩm nang · Wiki người chơi V3

Bắt đầu ở Tiên Nghịch với một tu sĩ. Khi có ít thời gian, hãy chọn một việc để nhân vật tự làm. Khi quay lại, dùng kết quả của lần treo máy đó để quyết định lần nâng cấp kế tiếp.

Lần đầu vào game

Bạn muốn làm gì?: Biết mình đang ở đâu
Mở đâu và xem gì?: Vào Tu Luyện xem cảnh giới và thanh tu vi. Mở Nhiệm Vụ để xem mục tiêu đang theo dõi. Đầu hành trình là Ngưng Khí, gồm 15 tầng.

Bạn muốn làm gì?: Bắt đầu treo máy
Mở đâu và xem gì?: Ở Bản Đồ, chọn vùng vừa sức có nguyên liệu cần kiếm. Xem một lượt tự đánh để biết nhân vật có hạ quái đều hay cần đổi kỹ năng.

Bạn muốn làm gì?: Dùng món vừa nhặt
Mở đâu và xem gì?: Vào Túi Đồ, đọc mô tả và điều kiện. Với trang bị, so món mới với món đang mặc ở cùng vị trí. Khóa món định giữ trước khi phân giải.

Bạn muốn làm gì?: Chuẩn bị đột phá
Mở đâu và xem gì?: Ở Đột Phá, xem thanh tu vi, vật liệu còn thiếu và yêu cầu nhiệm vụ hoặc thử thách. Chỉ đổi nơi farm nếu nơi mới cho đúng thứ đang thiếu.

Bạn muốn làm gì?: Thử sức với người khác
Mở đâu và xem gì?: Theo hướng dẫn dự án, đạt Trúc Cơ mở PvP. Kiểm tra bộ kỹ năng trước khi vào Đấu Trường.

Ví dụ một lần chơi

Nếu đang thiếu dược liệu để luyện đan, hãy xem tên dược liệu trong đan phương trước khi mở Bản Đồ hoặc Linh Điền. Sau khi luyện, tìm thành phẩm trong Túi Đồ → Đan Dược hoặc Vật Phẩm Tiêu Hao. Chọn viên đan để đọc hiệu quả rồi mới dùng.

Hệ thống nào quyết định điều gì?

Hệ thống: Cảnh giới
Vai trò: Tiến độ tu hành và các cửa mở nội dung.

Hệ thống: Công pháp và kỹ năng
Vai trò: Cách đánh, các đòn có thể dùng và điều kiện kích hoạt khi auto.

Hệ thống: Trang bị và pháp bảo
Vai trò: Trang bị lấp các vị trí trên người. Pháp bảo có cơ chế kích hoạt và nuôi dưỡng riêng.

Hệ thống: Ngộ Đạo
Vai trò: Nơi theo đuổi ý cảnh. Tài nguyên đầu tư mang tên Điểm Cảm Ngộ.

Hệ thống: Động Phủ
Vai trò: Nơi tổ chức trồng dược, luyện đan, luyện khí và đầu tư công trình.

Xem thêm: Lộ trình sáu thế giới. Xem sáu thế giới.

Xem thêm: Chọn trang bị, dùng đan và Điểm Cảm Ngộ. Tra trang bị và cách dùng đan.

Tài liệu đối chiếu
Cẩm nang người chơi V3 · trang bị và lộ trình thế giới

Lộ trình sáu thế giới

Lộ trình · Wiki người chơi V3 · Cầu Ma V1.1 & V3

Sáu thế giới là sáu chặng lớn trong hành trình của Vấn Đạo. Thanh Khê Thôn hay Vân Thạch Sơn là địa điểm bên trong một thế giới, còn Trúc Cơ và Đạp Thiên là mốc tu luyện.

Thứ tự: 1
Thế giới: Tiên Nghịch
Vị trí trong dự án: Thế giới khởi đầu. Tại đây tu sĩ tích lũy tu vi, học công pháp, nuôi linh thú, vượt bí cảnh và xây bản nguyên.

Thứ tự: 2
Thế giới: Cầu Ma
Vị trí trong dự án: Chặng mở rộng đã có tài liệu chi tiết riêng cho phân thân, Man tu, Ngưng Huyết, bộ lạc và đồng hành.

Thứ tự: 3
Thế giới: Ngã Dục Phong Thiên
Vị trí trong dự án: Đã nêu tên trong lộ trình dài hạn.

Thứ tự: 4
Thế giới: Nhất Niệm Vĩnh Hằng
Vị trí trong dự án: Đã nêu tên trong lộ trình dài hạn.

Thứ tự: 5
Thế giới: Tam Thốn Nhân Gian
Vị trí trong dự án: Đã nêu tên trong lộ trình dài hạn.

Thứ tự: 6
Thế giới: Quang Âm Chi Ngoại
Vị trí trong dự án: Đã nêu tên trong lộ trình dài hạn.

Qua Cầu Ma có mất bản thể không?

Theo quy tắc chủ dự án chốt ngày 19/10, bản thể Tiên Nghịch giữ Đạp Thiên và thành quả đã có. Phân thân sang Cầu Ma một lần, bắt đầu ở Ngưng Huyết tầng 1 với ba huyết tuyến ổn định. Người chơi có thể chuyển quyền điều khiển giữa hai thân rồi tiếp tục từ tiến độ đã lưu. Mỗi hành trình chỉ có một thân chạy hoạt động chính ở một thời điểm.

Hai bên có công thức phát triển riêng. Cảnh giới, chỉ số và vật phẩm của bản thể không cộng thẳng vào chỉ số khởi đầu của phân thân. Bốn thế giới sau Cầu Ma hiện chỉ có tên và thứ tự trong các nguồn của wiki.

Vân Thạch Sơn · bối cảnh chiến đấu của Tiên Nghịch.

Tài liệu đối chiếu
Cẩm nang người chơi V3 · trang bị và lộ trình thế giới
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Chọn trang bị, dùng đan và Điểm Cảm Ngộ

Cẩm nang · Wiki người chơi V3 · Bộ thiết kế gốc

Ba quyết định thường gặp khi trở về sau một buổi farm là giữ món nào, dùng đan lúc nào và đầu tư Điểm Cảm Ngộ vào đâu.

Đọc một món trang bị

Bộ thiết kế có tám vị trí gồm vũ khí, pháp y, đầu, hộ oản, đai, giày, nhẫn và ngọc bội. Bảy phẩm cơ bản lần lượt là Phàm, Linh, Huyền, Địa, Thiên, Tiên và Đạo. Yêu cầu cảnh giới, phẩm, bậc cường hóa và hiệu ứng bộ là các thông tin độc lập.

Mục tiêu: Farm ổn định
Cách so sánh hai lựa chọn: Thử trên cùng một vùng. Xem thời gian hạ quái và khả năng duy trì linh lực qua nhiều trận.

Mục tiêu: Vượt boss
Cách so sánh hai lựa chọn: Xem nguyên nhân thất bại. Nếu bị hạ trước khi tung đòn chính, thử thay một món phòng thủ hoặc điều chỉnh điều kiện dùng khiên.

Mục tiêu: Đấu Trường
Cách so sánh hai lựa chọn: Xem lại trận và kiểm tra hiệu quả của tốc độ, khống chế hoặc chống chịu khi gặp kiểu đối thủ cụ thể.

Luyện đan và sử dụng

Tại Đan Phòng, chọn đan phương rồi kiểm tra nguyên liệu, thời gian luyện và đầu ra.
Sau khi nhận đan, mở Túi Đồ, tìm nhóm Đan Dược hoặc Vật Phẩm Tiêu Hao, chọn đan rồi bấm Sử Dụng.
Hướng dẫn người chơi ghi hiệu quả đan hỗ trợ tu vi theo phần trăm. Đọc mô tả của chính viên đan để biết hiệu lực và thời điểm dùng.

Đầu tư Điểm Cảm Ngộ

Sinh Tử, Nhân Quả, Chân Giả và Sát Lục là bốn hướng ý cảnh khởi đầu được giới thiệu. Khi chưa chọn được lối đánh, có thể giữ điểm. Hóa phàm, sự kiện và các thử thách là nguồn Điểm Cảm Ngộ trong thiết kế. Mảnh bản nguyên phục vụ nghiên cứu và phối hợp bản nguyên ở giai đoạn sau.

Tài liệu đối chiếu
Cẩm nang người chơi V3 · trang bị và lộ trình thế giới
Đặc tả gốc · vòng chơi, cảnh giới, nhân vật, kinh tế

Ma Tu, Cổ Thần và Luyện Thể

Theo trao đổi dự án · Trao đổi dự án · tháng 11 · Mở rộng V2

Ba tên gọi dễ gặp cùng lúc khi xem nhân vật. Ma Tu có cơ chế Ma Chướng và mục Luyện Sát Khí. Luyện Thể là một môn phái. Cổ Thần có tuyến phát triển riêng.

Tên trong game: Ma Chướng
Cách hiểu và quy tắc đã nêu: Chủ dự án yêu cầu thể hiện rõ quan hệ giữa lượng Ma Chướng và sát thương khi farm, kể cả PvP. Biểu tượng đầu lâu đỏ–đen dùng để nhận biết ma tu nhiễm chướng khí.

Tên trong game: Luyện Sát Khí
Cách hiểu và quy tắc đã nêu: Thuộc tab Ma Tu. Nội dung cập nhật 11/11 ghi tối đa 4 lần. Con số này đếm lượt luyện.

Tên trong game: Luyện Thể
Cách hiểu và quy tắc đã nêu: Môn phái thiên về sinh lực, hộ thể và phản kích. Cập nhật 11/11 nêu kỹ năng Luyện Thể cộng theo % Máu.

Tên trong game: Cổ Thần
Cách hiểu và quy tắc đã nêu: Thiết kế V2 có chín chương thử luyện. Sao Cổ Thần là tiến độ của tuyến này, có thể theo dõi riêng với cảnh giới pháp tu.

Tên trong game: Công pháp Đạp Thiên
Cách hiểu và quy tắc đã nêu: Nội dung ngày 11/11 mở phạm vi công pháp Đạp Thiên cho tất cả môn phái.

Đọc các bảng Ma Tu theo phiên bản

Các bảng V2 mô tả một thiết kế cũ có phản phệ và kỹ năng làm tăng hoặc giảm Ma Chướng. Yêu cầu ngày 10/11 chuyển trọng tâm sang việc bổ sung Ma Chướng để duy trì sát thương. Công thức hệ số, phí mỗi lượt và nhịp hồi trong bản chơi chưa được kiểm chứng ở wiki này.

Biểu tượng trạng thái nhiễm chướng khí của Ma Tu.

Hình nền khu vực Cổ Thần trong bộ hình dự án.

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Đấu Trường, Tỉ Võ, bang hội và Chợ

Theo trao đổi dự án · Trao đổi dự án · tháng 11 · Wiki người chơi V3

Đấu Trường, Tông Môn Tỉ Võ và bang chiến có cách tham gia khác nhau. Chọn đúng chế độ trước khi chuẩn bị bộ kỹ năng và nguồn trợ chiến.

Hoạt động: Đấu Trường
Điều cần biết: PvP mở từ Trúc Cơ theo hướng dẫn người chơi. Quy tắc ngày 13/11 loại Đạo Lữ khỏi Đấu Trường.

Hoạt động: Tông Môn Tỉ Võ
Điều cần biết: Ngày 13/11, chủ dự án xác nhận chế độ này cho dùng Đạo Lữ.

Hoạt động: Tông môn NPC
Điều cần biết: Học công pháp, làm nhiệm vụ, tăng danh vọng, đổi thưởng bằng cống hiến. Các tông môn thiết kế gồm Thanh Vân Kiếm Các, Lôi Đình Cốc, Thiết Sơn Môn, Hồn Đăng Các, Cấm Văn Sơn Trang.

Hoạt động: Bang hội người chơi
Điều cần biết: Quản lý thành viên, đóng góp, hoạt động tập thể và xếp hạng. Thông báo tháng 11 đề cập thời gian online của thành viên, BXH bang, đổi Ấn và bang chiến.

Hoạt động: World boss
Điều cần biết: Thiết kế dùng thanh sinh lực chung và tính đóng góp từ lượt đánh riêng của từng người.

Hoạt động: Chợ giao dịch
Điều cần biết: Mua hoặc niêm yết món cho phép giao dịch. Nội dung cập nhật ngày 12/11 nêu thuế Chợ 30%. Phòng đấu giá là cơ chế mở rộng có bảng quy tắc riêng.

Cộng đồng và mã quà

Discord của game có các kênh hướng dẫn tân thủ, trao đổi, nội quy, sự kiện, thông báo cập nhật và tổng hợp code. Thông báo bảo trì 06/11 nêu bước xác thực Discord trước khi nhập code. Ngày 12/11, dự án nhắc tới hai bot “Event Thiên Nghịch” và “Bot Thiên Đạo Hạ Cấp”.

Dự án thông báo game chơi miễn phí và không nhận Donate/Boost. Nội quy yêu cầu giao tiếp lịch sự, không chửi bới hoặc giả danh Admin. Khi cần hỗ trợ tài khoản, dùng kênh chính thức và giữ kín mật khẩu, mã OTP.

Tài liệu đối chiếu
Cẩm nang người chơi V3 · trang bị và lộ trình thế giới

Từ điển tu tiên

Cẩm nang · Wiki người chơi V3 · Bộ thiết kế gốc

Tra thuật ngữ đang thấy trong game hoặc khi đọc các bảng thiết kế.

Thuật ngữ: Tu vi
Ý nghĩa trong Vấn Đạo: Tiến độ tích lũy để tu luyện và đột phá.

Thuật ngữ: Linh lực
Ý nghĩa trong Vấn Đạo: Năng lượng thi triển kỹ năng trong chiến đấu.

Thuật ngữ: Linh thạch
Ý nghĩa trong Vấn Đạo: Tài nguyên kinh tế dùng trong chế tạo, nâng cấp và giao dịch.

Thuật ngữ: Linh điền
Ý nghĩa trong Vấn Đạo: Khu trồng dược liệu trong động phủ.

Thuật ngữ: Điểm Cảm Ngộ
Ý nghĩa trong Vấn Đạo: Tài nguyên phát triển ý cảnh. Ngộ Đạo là tên hoạt động/hệ thống.

Thuật ngữ: Thiên tư
Ý nghĩa trong Vấn Đạo: Gồm căn cốt, ngộ tính, đạo tâm và cơ duyên trong thiết kế gốc.

Thuật ngữ: Công pháp
Ý nghĩa trong Vấn Đạo: Phương pháp tu và cấu hình chiến đấu chính hoặc phụ.

Thuật ngữ: Kinh mạch
Ý nghĩa trong Vấn Đạo: Mạng phát triển nhân vật của Tiên Nghịch. V2 ghi 12 chính mạch và 8 kỳ mạch.

Thuật ngữ: Pháp bảo
Ý nghĩa trong Vấn Đạo: Bảo vật có cơ chế kích hoạt hoặc hiệu ứng riêng.

Thuật ngữ: Linh thú
Ý nghĩa trong Vấn Đạo: Bạn đồng hành chiến đấu của tu sĩ. Thiết kế khởi đầu cho xuất chiến một con.

Thuật ngữ: Đạo Lữ
Ý nghĩa trong Vấn Đạo: Mối quan hệ có thể cung cấp trợ chiến theo chế độ.

Thuật ngữ: Khôi lỗi
Ý nghĩa trong Vấn Đạo: Nhóm nội dung được nhắc trong giới thiệu nhân vật. Nguồn dùng cho bản wiki này chưa đủ để liệt kê các khôi lỗi người chơi thực sự có thể sở hữu.

Thuật ngữ: Bản nguyên
Ý nghĩa trong Vấn Đạo: Nhánh tu hành cao tầng có thể nghiên cứu và tổ hợp.

Thuật ngữ: Bản thể / phân thân
Ý nghĩa trong Vấn Đạo: Hai thân gắn với Tiên Nghịch và Cầu Ma trong thiết kế du giới, mỗi thân giữ tiến độ của mình.

Thuật ngữ: Bí cảnh
Ý nghĩa trong Vấn Đạo: Thử thách có cấu trúc phòng và điều kiện nhận thưởng.

Thuật ngữ: Farm
Ý nghĩa trong Vấn Đạo: Lặp hoạt động ở một vùng để tích lũy tài nguyên.

Thuật ngữ: Hồi chiêu (CD)
Ý nghĩa trong Vấn Đạo: Thời gian cần chờ trước khi dùng lại kỹ năng hoặc hiệu ứng.

Thuật ngữ: PvE / PvP
Ý nghĩa trong Vấn Đạo: Đánh địch do game điều khiển / giao đấu với người chơi.

Tài liệu đối chiếu
Cẩm nang người chơi V3 · trang bị và lộ trình thế giới
Đặc tả gốc · vòng chơi, cảnh giới, nhân vật, kinh tế

Chuyên mục Tiên Nghịch

Từ Ngưng Khí đến Đạp Thiên, công pháp và bí cảnh.

Nhập môn và nhịp chơi

Tài liệu thiết kế · Bộ thiết kế gốc

Trong thiết kế gốc ngày 09/10/2026, người chơi điều khiển một tu sĩ và một linh thú. Trận đánh tự diễn ra theo thứ tự ưu tiên kỹ năng. Người chơi quyết định đi đâu, nuôi hướng công pháp nào và lúc nào đủ sức thử đột phá.

Những quyết định đầu tiên

Việc cần làm: Tạo tu sĩ
Cách đọc giao diện và chọn hành động: Đặt đạo danh, chọn ngoại hình, màu y phục và xuất thân. Bốn xuất thân gợi ý là thôn dã, gia tộc suy tàn, tạp dịch tông môn và dược đồng. Các thiên tư gồm căn cốt, ngộ tính, đạo tâm và cơ duyên.

Việc cần làm: Nhìn phần thưởng vừa nhận
Cách đọc giao diện và chọn hành động: Tu vi dùng cho cảnh giới. Linh lực là tài nguyên thi triển trong trận. Linh thạch trả phí giao dịch, chế tạo và nâng cấp.

Việc cần làm: Chọn một hoạt động chính
Cách đọc giao diện và chọn hành động: Farm vùng đã mở để tích đồ, hái dược hoặc đào khoáng khi cần vật liệu, bế quan để ưu tiên tu vi. Việc chế tạo chạy theo hàng đợi riêng.

Việc cần làm: Xếp kỹ năng
Cách đọc giao diện và chọn hành động: Giữ hồi phục cho lúc máu thấp, dành ngắt niệm cho lúc boss chuẩn bị tung đòn hoặc chọn kỹ năng diện rộng khi gặp nhóm quái. Có thể lưu cấu hình Farm, Boss và PvP khi mở tính năng.

Việc cần làm: Chuẩn bị đột phá
Cách đọc giao diện và chọn hành động: Xem thanh tu vi, vật liệu còn thiếu, nhiệm vụ cảm ngộ và thử thách. Đổi trang bị hoặc luật auto sau khi xem lại trận thua.

Việc cần làm: Quay lại sau khi nghỉ
Cách đọc giao diện và chọn hành động: Đọc thời gian hợp lệ và kết quả từng hoạt động. Mức mặc định trong thiết kế gốc là 12 giờ tích lũy chưa kết toán, có thể nâng đến 24 giờ nhờ động phủ.

Tu luyện nền có một tốc độ cho mỗi nhân vật. Đổi giờ máy, mở thêm tab hoặc xem trận ở tốc độ ×4 đều giữ nguyên sản lượng. Farm ngoại tuyến chỉ tính ở vùng đủ điều kiện. Đột phá lớn, boss mở khóa, PvP, giao dịch và world boss cần người chơi tham gia.

Nhiệm vụ ngày và tuần đưa ra các hoạt động thay thế. Thiết kế nhắm khoảng 10–20 phút thao tác chủ động mỗi ngày. Giờ làm mới mặc định của world Việt Nam là 05:00 theo giờ Việt Nam.

Tài liệu đối chiếu
Đặc tả gốc · vòng chơi, cảnh giới, nhân vật, kinh tế

Năm hướng tu và thiết lập tự chiến

Tài liệu thiết kế · Bộ thiết kế gốc

Công pháp, kỹ năng, pháp bảo và trang bị tạo thành lối đánh. Có thể đổi hướng và lưu bộ thiết lập khi đã mở khóa.

Đặc trưng và chiêu thức mẫu của bản gốc

Hướng tu: Kiếm tu
Cơ chế: Tích kiếm ý, phá phòng ngự rồi dồn đòn kết liễu vào một mục tiêu.
Chiêu thức mẫu: Phi Kiếm, Kiếm Ấn, Hồi Phong, Phá Giáp, Nhất Tuyến Trảm

Hướng tu: Lôi pháp
Cơ chế: Tích điện và dẫn lôi qua nhiều mục tiêu. Theo dõi linh lực để giữ nhịp gián đoạn.
Chiêu thức mẫu: Lôi Tiễn, Dẫn Điện, Lôi Võng, Tĩnh Điện Hộ Thể, Thiên Lôi Giáng

Hướng tu: Luyện thể
Cơ chế: Dùng máu, hộ thể và phản kích để phá tư thế. Chịu đòn tốt, cần tính cách dọn nhóm.
Chiêu thức mẫu: Thiết Cốt, Chấn Sơn, Hộ Mạch, Phản Chấn, Phá Trận Quyền

Hướng tu: Hồn tu
Cơ chế: Gắn hồn ấn và suy yếu mục tiêu. Các sự kiện chiến đấu nuôi hồn lực cả khi chỉ còn một boss.
Chiêu thức mẫu: Dẫn Hồn, Hồn Ấn, U Ảnh, Nhiếp Phách, Hồn Bạo

Hướng tu: Cấm trận
Cơ chế: Đặt cấm chế, nối dấu ấn và chọn lúc nổ trận. Hưởng lợi khi có thời gian bố trí.
Chiêu thức mẫu: Cấm Ấn, Tụ Linh Trận, Phong Mạch, Liên Hoàn Cấm, Phá Cấm Bạo

Bộ kỹ năng đầy đủ có một công pháp chính, tối đa hai công pháp phụ, bốn kỹ năng chủ động, ba nội tại và một pháp bảo kích hoạt. Luật tự chiến xét từ ưu tiên cao xuống thấp. Khi không có chiêu nào hợp lệ, nhân vật đánh thường.

Sinh lực giữ nhân vật sống. Công vật lý và công pháp thuật cấp sức mạnh theo kỹ năng. Phòng ngự, kháng, xuyên giáp, chính xác, né tránh, bạo kích, hồi phục và giảm hồi chiêu quyết định kết quả theo từng loại đối thủ. Lực chiến trên hồ sơ là ước lượng.

Tài liệu đối chiếu
Đặc tả gốc · vòng chơi, cảnh giới, nhân vật, kinh tế

Đường tu từ Ngưng Khí đến Đạp Thiên

Tài liệu thiết kế · Bộ thiết kế gốc

Cảnh giới trong Tiên Nghịch gồm những bước tu, các mốc chuyển tiếp và các cửa thử thách. Đồ hình dưới đây trình bày thứ tự của bộ thiết kế gốc.

Thứ tự tu hành

Chặng: Bước thứ nhất
Cảnh giới hoặc thử thách: Ngưng Khí (Luyện Khí) tầng 1–15 → Trúc Cơ → Kết Đan → Nguyên Anh → Hóa Thần → Anh Biến → Vấn Đỉnh
Cơ chế theo bản thiết kế: Đầu đường tu tập kỹ năng và farm. Trúc Cơ mở động phủ, Kết Đan mở pháp bảo bản mệnh. Hóa Thần gắn với hóa phàm và ý cảnh.

Chặng: Chuyển tiếp
Cảnh giới hoặc thử thách: Âm Hư → Dương Thực
Cơ chế theo bản thiết kế: Chuẩn bị bước hai và chuyển nguồn lực tu luyện.

Chặng: Bước thứ hai
Cảnh giới hoặc thử thách: Khuy Niết → Tịnh Niết → Toái Niết
Cơ chế theo bản thiết kế: Phát triển bản nguyên, nghiên cứu quy tắc và tham gia nội dung tinh vực.

Chặng: Cửa chuyển bước
Cảnh giới hoặc thử thách: Thiên Nhân ngũ suy
Cơ chế theo bản thiết kế: Năm cửa thử chuyên biệt. Sau khi hoàn thành mới chuẩn bị Không Niết.

Chặng: Bước thứ ba
Cảnh giới hoặc thử thách: Không Niết → Không Linh → Không Huyền → chín Huyền Kiếp → Không Kiếp
Cơ chế theo bản thiết kế: Huyền Kiếp đặt sau Không Huyền viên mãn. Các cửa cho phép thử và chỉnh cách đánh.

Chặng: Bước thứ tư
Cảnh giới hoặc thử thách: Đạp Thiên
Cơ chế theo bản thiết kế: Đích của chiến dịch chứng đạo trong phạm vi thiết kế.

Sơ kỳ, Trung kỳ, Hậu kỳ và Viên mãn là phân đoạn cho các đại cảnh giới phù hợp. Kim Tôn, Thiên Tôn, Dược Thiên Tôn và Đại Thiên Tôn được quản lý như các danh hiệu hoặc mốc sức mạnh cuối game với điều kiện riêng.

Tài liệu đối chiếu
Đặc tả gốc · vòng chơi, cảnh giới, nhân vật, kinh tế

Vùng đất, động phủ và tài nguyên

Tài liệu thiết kế · Bộ thiết kế gốc

Chọn địa điểm trên bản đồ rồi vào cảnh chiến đấu nhìn ngang. Một vùng có thể tiếp tục hữu ích sau khi người chơi vượt qua vì còn cung cấp nguyên liệu chế tạo.

Địa danh và tổ chức

Nhóm: Vùng khởi đầu
Tên trong thiết kế gốc: Thanh Khê Thôn, Vân Thạch Sơn, Hàn Vụ Cốc, Xích Sa Hoang Nguyên, Cổ Mộc Cấm Địa, Tàn Nguyệt Cổ Thành
Vai trò: Farm, nhiệm vụ, nguyên liệu và boss vùng

Nhóm: Vùng cao
Tên trong thiết kế gốc: Vạn Tinh Hải, Hư Không Liệt Vực, Vô Thanh Đạo Giới
Vai trò: Nội dung giai đoạn cao

Nhóm: Tông môn NPC
Tên trong thiết kế gốc: Thanh Vân Kiếm Các, Lôi Đình Cốc, Thiết Sơn Môn, Hồn Đăng Các, Cấm Văn Sơn Trang
Vai trò: Danh vọng, nhiệm vụ, cửa hàng và công pháp

Nhóm: Động phủ
Tên trong thiết kế gốc: Tụ Linh Trận, Linh Điền, Đan Phòng, Khí Phòng, Tĩnh Thất, Kho
Vai trò: Trồng, luyện đan, luyện khí, chế phù, nghiên cứu và lưu trữ

Nhóm: Boss chung mẫu
Tên trong thiết kế gốc: Lôi Uyên Giao, Cổ Mộc Tâm Ma, Hư Không Thôn Thú
Vai trò: Mỗi người đánh lượt riêng và góp vào máu chung. Thưởng theo mốc cá nhân và thành tích.

Nguồn và nơi dùng

Tài nguyên: Tu vi
Nguồn thiết kế: Tu luyện, farm, nhiệm vụ
Công dụng: Tiến qua cảnh giới

Tài nguyên: Linh thạch
Nguồn thiết kế: Farm, nhiệm vụ, giao dịch
Công dụng: Chế tạo, cường hóa, dịch vụ, phí chợ

Tài nguyên: Dược liệu
Nguồn thiết kế: Thu thập, linh điền, vùng đặc thù
Công dụng: Luyện đan

Tài nguyên: Khoáng và tinh chất
Nguồn thiết kế: Thu thập, quái, phân giải
Công dụng: Luyện khí, nuôi pháp bảo

Tài nguyên: Điểm cảm ngộ
Nguồn thiết kế: Hóa phàm, sự kiện, thử thách
Công dụng: Nghiên cứu ý cảnh

Tài nguyên: Cống hiến tông môn
Nguồn thiết kế: Nhiệm vụ, đóng góp
Công dụng: Đổi công pháp và vật liệu có hạn mức

Tài nguyên: Mảnh bản nguyên
Nguồn thiết kế: Nội dung cao tầng
Công dụng: Nghiên cứu và ghép tổ hợp

Túi đồ có tám vị trí mặc gồm vũ khí, pháp y, đầu, hộ oản, đai, giày, nhẫn và ngọc bội. Pháp bảo bản mệnh có vị trí kích hoạt riêng. Phẩm trang bị theo thiết kế gốc đi từ Phàm, Linh, Huyền, Địa, Thiên, Tiên đến Đạo.

Tông môn người chơi phụ trách hoạt động chung, quỹ tự nguyện, boss và chiến tông môn. Bạn bè, lời mời, chat thế giới hoặc tông môn, thư, hồ sơ công khai, chặn và xếp hạng thuộc hệ xã hội. Luận bàn dùng để thử đội hình. Đấu trường xếp hạng ghép nhóm cảnh giới hoặc điểm đấu và lưu replay.

Tài liệu đối chiếu
Đặc tả gốc · vòng chơi, cảnh giới, nhân vật, kinh tế

Mười sáu chương chính tuyến

Tài liệu thiết kế · Mở rộng V2

Tuyến V2 bắt đầu ở Kết Đan viên mãn. Từng chương ghi nhân vật liên quan, biến cố, điều kiện thử thách và phần mở khóa. Các nhánh truyện có thể cho kết quả khác nhau.

Cốt truyện và mốc tiến trình

Chương: 01. Phá Đan Thành Anh
Điều kiện → mục tiêu: Kết Đan viên mãn → Nguyên Anh
Người liên quan · biến cố: Bạch Tố · một khối đan tâm bắt đầu nứt ·  người giữ mạch cảnh báo rằng cố cưỡng ép sẽ tổn thương thần thức
Thưởng hoặc nội dung mở: mở Khí Hải cấp 1 và quyền nghiên cứu 8 mạch chính · nhận 5 Thông Mạch Đan · mở nhiệm vụ Cổ Thần và trợ chiến kết nghĩa

Chương: 02. Một Đời Trong Xưởng Mộc
Điều kiện → mục tiêu: Nguyên Anh viên mãn → Hóa Thần
Người liên quan · biến cố: Lão thợ mộc cũ / Bạch Tố · người thợ giữ lời hứa làm một chiếc thuyền đồ chơi ·  mùa nước về trước khi ông hoàn thành
Thưởng hoặc nội dung mở: mở Hóa Thần và cây ý cảnh · giữ mọi nhánh để học về sau · nhận 100 cảm ngộ +mở Nguyên Phủ

Chương: 03. Tiên Tức Trong Thân Phàm
Điều kiện → mục tiêu: Hóa Thần viên mãn → Anh Biến
Người liên quan · biến cố: Lạc Tinh Dao · mỏ tiên linh có thể giúp chuyển hóa, nhưng khí mỏ đang làm người khai thác kiệt sức
Thưởng hoặc nội dung mở: mở Anh Biến, biến thể công pháp và nghề cấp 50 · thêm một lựa chọn ma tu không bắt buộc

Chương: 04. Hỏi Đỉnh Không Hỏi Quyền
Điều kiện → mục tiêu: Anh Biến viên mãn → Vấn Đỉnh
Người liên quan · biến cố: Yên Từ · một di tích hứa ban quyền thống lĩnh, nhưng điều kiện là xóa tên người đã dựng nó
Thưởng hoặc nội dung mở: Mở Vấn Đỉnh, Đạo Cung, ý cảnh tiếng vọng và nhóm chiến tông môn bậc cao. Hôn phối có thể mở từ Nguyên Anh khi đủ điều kiện.

Chương: 05. Bóng Mình Trên Hắc Hà
Điều kiện → mục tiêu: Vấn Đỉnh viên mãn → Âm Hư
Người liên quan · biến cố: Mặc Nghiên · tâm cảnh phản chiếu những điều nhân vật từng chối bỏ ·  người dẫn đường có một khế ước chưa trả
Thưởng hoặc nội dung mở: đạt trạng thái chuyển tiếp Âm Hư · mở nguồn hư tức, không chèn đại cảnh giới mới

Chương: 06. Dương Quang Định Thực
Điều kiện → mục tiêu: Âm Hư hoàn tất → Dương Thực
Người liên quan · biến cố: Sở Kình · ánh dương trong vùng rỗng đang hóa mọi lời hứa thành vật chất nặng nề
Thưởng hoặc nội dung mở: mở Dương Thực, quyền chuẩn bị bước hai · không tự cấp bản nguyên hoàn chỉnh

Chương: 07. Cửa Ngoài Tinh Hải
Điều kiện → mục tiêu: Dương Thực hoàn tất → Khuy Niết
Người liên quan · biến cố: Lạc Tinh Dao · tinh đồ chỉ mở cho người có một nguyên lý riêng, không cho kẻ vay trọn đạo của người khác
Thưởng hoặc nội dung mở: mở Khuy Niết, bản nguyên chính/phụ, pet bậc 6 và tiến trình tinh vực

Chương: 08. Gạn Đục Giữa Tinh Hà
Điều kiện → mục tiêu: Khuy Niết viên mãn → Tịnh Niết
Người liên quan · biến cố: Bạch Tố · nguồn lực càng mạnh càng mang ký ức lẫn lộn ·  một người chữa trị đang giữ nợ thay cả đoàn
Thưởng hoặc nội dung mở: mở Tịnh Niết, Nguyên lưu và Cổ Thần 5 sao theo tuyến phụ

Chương: 09. Phá Mảnh Niết Bàn
Điều kiện → mục tiêu: Tịnh Niết viên mãn → Toái Niết
Người liên quan · biến cố: Tề Nham · giới cũ muốn giữ tu sĩ ở trạng thái ổn định, trong khi con đường phía trước yêu cầu phá chính giới hạn ấy
Thưởng hoặc nội dung mở: mở Toái Niết và Nguyên tướng · mở Ngũ suy, Cổ Thần 6 sao và nội dung biển nghịch

Chương: 10. Năm Lần Đối Mặt Suy Tàn
Điều kiện → mục tiêu: Toái Niết viên mãn → Thiên Nhân ngũ suy
Người liên quan · biến cố: Từ Hạc · sức mạnh không còn vận hành đúng điều nhân vật từng quen ·  mỗi cửa suy thử một kiểu phụ thuộc
Thưởng hoặc nội dung mở: Hoàn tất Ngũ suy · giữ Toái Niết cho đến thắng chương 11 · +100 cảm ngộ

Chương: 11. Không Mà Không Diệt
Điều kiện → mục tiêu: Toái Niết viên mãn +năm chứng suy → Không Niết
Người liên quan · biến cố: Yên Từ · sau khi bỏ lớp cũ, nhân vật đối diện khoảng trống có thể nuốt cả điều mình muốn giữ
Thưởng hoặc nội dung mở: mở Không Niết, Chân nguyên, Chứng cảnh và pháp bảo Chân bảo

Chương: 12. Linh Tính Trong Khoảng Trống
Điều kiện → mục tiêu: Không Niết viên mãn → Không Linh
Người liên quan · biến cố: Nguyệt Chi · những tạo vật linh tính muốn được nhìn nhận thay vì chỉ làm công cụ của người mạnh
Thưởng hoặc nội dung mở: mở Không Linh, Hợp nguyên thường và nghiên cứu Thời Gian

Chương: 13. Huyền Luật Do Ai Đặt
Điều kiện → mục tiêu: Không Linh viên mãn → Không Huyền
Người liên quan · biến cố: Hạ Vân · một bản luật bị cho là vĩnh viễn đang bảo vệ quyền lợi của kẻ không còn tồn tại
Thưởng hoặc nội dung mở: mở Không Huyền, Quy Nhất và chín Huyền Kiếp

Chương: 14. Chín Cửa Huyền Kiếp
Điều kiện → mục tiêu: Không Huyền viên mãn → Huyền Kiếp
Người liên quan · biến cố: Trầm Uyên · không còn một kẻ địch duy nhất để đổ lỗi: mỗi cửa là hệ quả của cách tu sĩ đang vận hành sức mạnh
Thưởng hoặc nội dung mở: Hoàn tất chín Huyền Kiếp · không tự thêm đại cảnh giới Huyền Kiếp · +120 cảm ngộ

Chương: 15. Kiếp Không Còn Trói Đạo
Điều kiện → mục tiêu: Không Huyền viên mãn +chín huyền chứng → Không Kiếp
Người liên quan · biến cố: Sở Kình · người canh cửa cho rằng vượt kiếp cho phép bỏ lại mọi trách nhiệm với thế giới
Thưởng hoặc nội dung mở: mở Không Kiếp, pet bậc 10, Cổ Thần 9 sao và chiến dịch chứng đạo

Chương: 16. Một Bước Không Mượn Trời
Điều kiện → mục tiêu: Không Kiếp viên mãn +chứng đạo các tuyến đã chọn → Đạp Thiên
Người liên quan · biến cố: Lạc Tinh Dao / Yên Từ · cửa cuối không yêu cầu có tất cả sức mạnh, mà yêu cầu con đường đã đi có thể đứng vững khi không còn lời bảo đảm từ ai
Thưởng hoặc nội dung mở: mở mốc Đạp Thiên, kết chiến dịch và các thử thách endgame · không tự chế thêm cảnh giới sau Đạp Thiên

Lựa chọn và các thử thách cuối mỗi chương

Chương: Phá Đan Thành Anh
Hai lựa chọn: Giữ cấu trúc đan tâm, tách từng mạch / Tự phá lớp vỏ cũ và tái tụ
Thử thách trước khi hoàn tất: Nguyên Anh Kính Ảnh dùng hình người giữ hồn trong cuộc chạm trán mới. Pha 1 giữ linh lực>20% · pha 2 phá 2 hồn khóa · pha 3 sống qua 3 nhịp bạo phát. Thắng cả 3 mới unlock Nguyên Anh.

Chương: Một Đời Trong Xưởng Mộc
Hai lựa chọn: Giữ lời hứa cho người đã mất / Nói sự thật và trao việc dang dở cho người sống
Thử thách trước khi hoàn tất: Tâm Cảnh không thể thắng chỉ nhờ DPS:3 phòng yêu cầu ghi nhận biến đổi, trả đúng tín vật và đánh đúng ảnh thật. Sau đó đối mặt thử thách Tâm Cảnh, cần đạt ít nhất 2/3 chứng · chứng thứ ba lấy qua hồi tưởng.

Chương: Tiên Tức Trong Thân Phàm
Hai lựa chọn: Lọc tiên tức chậm, giữ phần tạp ở ngoài / Chuyển nhanh rồi tự điều hòa
Thử thách trước khi hoàn tất: Ba pha đổi nguồn lực: linh lực thường, tiên tức nhiễu, hợp nhất. Kỹ năng không đúng nguồn vẫn gây 70% damage chứ không tắt toàn bộ build. Chỉ khi vượt mức ổn định>=70/100 mới xác nhận chuyển hóa.

Chương: Hỏi Đỉnh Không Hỏi Quyền
Hai lựa chọn: Bảo hộ người giữ đỉnh / Từ chối ngôi vị, phá cấm để mọi người rời
Thử thách trước khi hoàn tất: Vấn Đỉnh Tam Vấn dùng ba bài đã chọn · hoàn 2 trong 3 rồi đấu bản ảnh điện chủ. Không có câu hỏi văn bản mơ hồ khiến thất bại sau khi thắng chiến đấu.

Chương: Bóng Mình Trên Hắc Hà
Hai lựa chọn: Nhận lấy phần ký ức chưa trọn / Buông lời tự kết tội nhưng giữ trách nhiệm
Thử thách trước khi hoàn tất: Trận không cho dựa hoàn toàn vào hút máu: một pha khóa hút máu 12 s, hai pha khác hoạt động bình thường. Hai nhánh cùng tiêu chí ổn định và ngân sách thưởng.

Chương: Dương Quang Định Thực
Hai lựa chọn: Giữ trụ làm nền cho người đến sau / Mang nguyên lý đi, để trụ trở về hư vô
Thử thách trước khi hoàn tất: Hai thanh Âm/Dương cần giữ chênh lệch<=30 trong 90 s, auto dùng hai loại skill khác tag. Bất kỳ build nào đều có kỹ năng nhiệm vụ dùng tạm để hoàn cơ chế.

Chương: Cửa Ngoài Tinh Hải
Hai lựa chọn: Neo một bến an toàn / Mở đường đi mới
Thử thách trước khi hoàn tất: Dùng nguyên chủng vừa được cho trong ba nhịp thử · không yêu cầu đã đạt Khuy Niết để lấy món cần đột phá. Sau thắng mới mở research đầy đủ và slot phụ.

Chương: Gạn Đục Giữa Tinh Hà
Hai lựa chọn: Gạn một loại nguyên lực thật sâu / Giữ hai nguồn cân bằng
Thử thách trước khi hoàn tất: Mỗi 30 s boss tẩy buff một nhóm · cần tái lập cơ chế thay vì cộng vĩnh viễn. Dấu nghiên cứu không bị xóa khi buff chiến đấu bị tẩy.

Chương: Phá Mảnh Niết Bàn
Hai lựa chọn: Giữ đường về cho người chưa thể đi / Để dấu chỉ đường nhưng không quay lại
Thử thách trước khi hoàn tất: Boss có ba thanh break, mỗi thanh thay damage resistance. Chiến thắng cần phá cả 3, không bắt thắng bằng thuộc tính bị khóa trong build.

Chương: Năm Lần Đối Mặt Suy Tàn
Hai lựa chọn: Nhìn nhận giới hạn và sửa cách vận hành / Giữ mục tiêu nhưng đổi công cụ
Thử thách trước khi hoàn tất: Năm encounter khác nhau ở bảng dưới, không cùng một boss đổi màu. Chỉ trận kết thúc đã cam kết mới áp mất tu vi 5% · cửa luyện tập không trừ q.

Chương: Không Mà Không Diệt
Hai lựa chọn: Giữ một ký ức làm neo / Giữ một lời thệ làm neo
Thử thách trước khi hoàn tất: Boss luân phiên hiện/thất hình · chỉ gây sát thương khi neo ổn. Khi địch không thể trúng, auto chuyển sang giữ/thiền thay vì đốt tài nguyên vô ích.

Chương: Linh Tính Trong Khoảng Trống
Hai lựa chọn: Khế ước có thời hạn và quyền rời / Khế ước đồng hành nhưng không chiếm hữu
Thử thách trước khi hoàn tất: Boss phản chép skill mạnh nhất mỗi 45 s · cần giữ phương án ngắt. Trợ chiến tạm không được tăng thành ba nhân vật thường trú.

Chương: Huyền Luật Do Ai Đặt
Hai lựa chọn: Sửa luật nhưng giữ đường bảo hộ / Giữ luật làm nền rồi mở ngoại lệ minh bạch
Thử thách trước khi hoàn tất: Boss đặt 3 giới hạn đã hiển thị · hoàn ít nhất 2/3 rồi phá cấm. Không thưởng cho người khai thác bug damage để bỏ qua luật encounter.

Chương: Chín Cửa Huyền Kiếp
Hai lựa chọn: Đi theo thứ tự an toàn đã học / Tự chọn thứ tự trong nhóm ba cửa
Thử thách trước khi hoàn tất: Chín luật riêng trong bảng dưới. Cửa 9 là attempt cam kết áp mất tu vi 8% · các cửa 1–8 không làm mất tuvi pháp tu, nhưng vẫn tiêu hỗ trợ đã dùng. Chứng trước đó giữ.

Chương: Kiếp Không Còn Trói Đạo
Hai lựa chọn: Mang thế giới cũ theo trong lời thệ / Mở nơi ở mới cho người muốn rời
Thử thách trước khi hoàn tất: Boss phản ứng combo đang dùng: có khắc chế một phần, không miễn nhiễm hoàn toàn. Hoàn bài cơ chế +thắng trong 180 s · seed và rulesVersion lưu replay.

Chương: Một Bước Không Mượn Trời
Hai lựa chọn: Giữ lời thệ bảo hộ một thế giới có quyền khác mình / Mở con đường để mỗi người tự chọn giới của họ
Thử thách trước khi hoàn tất: Giám Chứng Tàn Ảnh đưa ra ba bài thử khác nhau. Thua trận cam kết chỉ làm hao tu vi theo quy tắc 10% của đoạn.

Thiên Nhân ngũ suy và chín Huyền Kiếp

Cửa: Thân Suy
Điều kiện trong thử thách: HP tối đa tạm 70%, bộ khiên vẫn bị tính theo H đã giảm · giữ sống 60 s và phá 2 mạch độc
Cách ứng phó: hồi đều và giảm sát thương · không chỉ dồn sát thương

Cửa: Linh Suy
Điều kiện trong thử thách: hồi MP bị giảm 50% · hoàn 90 s với ít nhất 3 đòn thường xen skill
Cách ứng phó: skill chi phí thấp, thứ tự auto và thuốc hồi

Cửa: Thần Suy
Điều kiện trong thử thách: mỗi 20 s khóa skill ưu tiên cao nhất 5 s
Cách ứng phó: cấu hình phương án dự phòng, không chỉ một tuyệt kỹ

Cửa: Tâm Suy
Điều kiện trong thử thách: ba tiếng gọi cũ hiện biểu tượng, phải chọn bảo hộ/giảiấn/phángụy theo dấu chứng
Cách ứng phó: quyết định giữa pha, không dựa âm thanh duy nhất

Cửa: Đạo Suy
Điều kiện trong thử thách: phản ảnh học vòng auto của chủ · thắng bằng đổi quy tắc saupha 1 trước pha sau
Cách ứng phó: đổi thứ tự/target ngoài trận, server chốt từng trận · không nhập JavaScript

Cửa: Phong Kiếp
Điều kiện trong thử thách: gió giảm chính xác · tạo 2 dấu neo trước bùng gió
Cách ứng phó: dùng skill đánh dấu/kháng chậm

Cửa: Hỏa Kiếp
Điều kiện trong thử thách: khiên giữ quá 8 s bị đốt, DOT cần giải
Cách ứng phó: khiên ngắn và hồi đều

Cửa: Lôi Kiếp
Điều kiện trong thử thách: chín đòn chia ba nhịp, chỉ nhịp giữa có thể ngắt
Cách ứng phó: autoưu tiên ngắt theo trạng thái đang niệm

Cửa: Hồn Kiếp
Điều kiện trong thử thách: hồn khóa tiêu MP, đánh khế neo hoàn tài nguyên
Cách ứng phó: đổi target chính

Cửa: Ảnh Kiếp
Điều kiện trong thử thách: ba ảnh chỉ một thật, ảnh thật đánh dấu bằng trật tự vết chân
Cách ứng phó: UI biểu tượng, không phụ thuộc tốc độ x 4

Cửa: Giới Kiếp
Điều kiện trong thử thách: hai vùng luật thay mỗi 20 s: ưu tiên phép/vật lý, loại còn lại vẫn 70% hiệu lực
Cách ứng phó: lưu 2 bộ cấu hình trước, chọn một biện pháp thử tạm

Cửa: Nhân Quả Kiếp
Điều kiện trong thử thách: đánh quá 5 skilltrong 10 s nhận phản · đòn thường không tính
Cách ứng phó: ngắt chuỗi dồn sát thương

Cửa: Bản Ngã Kiếp
Điều kiện trong thử thách: gặp snapshot mình nhưng CD cao hơn 10%, bỏ 1 buff chủ để mở điểm yếu
Cách ứng phó: không cố win bằng chỉ số cao hơn chính mình

Cửa: Quy Nhất Kiếp
Điều kiện trong thử thách: ghép hai luật khó đã qua+1 điều kiện lời thệ · chọn trước không tạo lại kết quả ngẫu nhiên
Cách ứng phó: chuẩn bị liên hệ skill, pet, pháp bảo và bản nguyên

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Đột phá, đan dược và 20 kinh mạch

Tài liệu thiết kế · Mở rộng V2

Sau chương Phá Đan Thành Anh, Khí Hải cấp 1 mở tám chính mạch đầu. Chọn tối đa bốn chính mạch và hai kỳ mạch cộng hưởng để nhận chỉ số. Có thể đổi mạch cộng hưởng miễn phí ngoài trận.

Thông số đan theo giờ chuẩn hoặc lượng tu vi trong bảng là cấu hình thiết kế V2. Cẩm nang người chơi tháng 11 mô tả hiệu quả đan hỗ trợ tu vi theo %. Khi dùng đan, xem mô tả của chính viên đan trong game.

Đan điền

Lõi: Khí Hải
Mốc mở: Nguyên Anh
Điều kiện bổ sung: Nhận ngay từ chương đầu

Lõi: Nguyên Phủ
Mốc mở: Hóa Thần
Điều kiện bổ sung: 8 mạch đã Thông và 50 cảm ngộ

Lõi: Đạo Cung
Mốc mở: Vấn Đỉnh
Điều kiện bổ sung: 12 mạch đã Thông và 100 cảm ngộ

Từ Khai đến Thông và Hợp

Mạch: Tụ Khí
Cảnh giới: Nguyên Anh
Tổng tác dụng ở ba nấc: linh lực tối đa +2/+4/+6%

Mạch: Hồi Nguyên
Cảnh giới: Nguyên Anh
Tổng tác dụng ở ba nấc: hồi linh lực +2/+4/+6%

Mạch: Huyết Hải
Cảnh giới: Nguyên Anh
Tổng tác dụng ở ba nấc: HP +2/+4/+6%

Mạch: Kiên Cốt
Cảnh giới: Nguyên Anh
Tổng tác dụng ở ba nấc: phòng ngự +2/+4/+6%

Mạch: Linh Thức
Cảnh giới: Nguyên Anh
Tổng tác dụng ở ba nấc: chính xác +1/+2/+3 điểm phần trăm

Mạch: Tật Hành
Cảnh giới: Nguyên Anh
Tổng tác dụng ở ba nấc: né +1/+2/+3 điểm phần trăm

Mạch: Phá Chướng
Cảnh giới: Nguyên Anh
Tổng tác dụng ở ba nấc: xuyên giáp +1/+2/+3 điểm phần trăm

Mạch: Định Tâm
Cảnh giới: Nguyên Anh
Tổng tác dụng ở ba nấc: giảm thời gian câm lặng 3/6/9%

Mạch: Ngự Lôi
Cảnh giới: Hóa Thần
Tổng tác dụng ở ba nấc: kháng lôi +2/+4/+6%

Mạch: Hộ Hồn
Cảnh giới: Hóa Thần
Tổng tác dụng ở ba nấc: kháng suy hồn +2/+4/+6%

Mạch: Khống Pháp
Cảnh giới: Hóa Thần
Tổng tác dụng ở ba nấc: giảm tiêu linh lực 1/2/3%

Mạch: Tịnh Thể
Cảnh giới: Hóa Thần
Tổng tác dụng ở ba nấc: hồi phục nhận +2/+4/+6%

Mạch: Nhâm
Cảnh giới: Hóa Thần
Tổng tác dụng ở ba nấc: giá trị khiên +2/+4/+6%

Mạch: Đốc
Cảnh giới: Hóa Thần
Tổng tác dụng ở ba nấc: hiệu quả đan hồi phục trong trận +2/+4/+6%

Mạch: Xung
Cảnh giới: Hóa Thần
Tổng tác dụng ở ba nấc: break +2/+4/+6 mỗi cast, CD nội 8 s

Mạch: Đới
Cảnh giới: Hóa Thần
Tổng tác dụng ở ba nấc: giảm sát thương đòn đầu 3/6/9%, CD nội 20 s

Mạch: Âm Kiều
Cảnh giới: Vấn Đỉnh
Tổng tác dụng ở ba nấc: kháng DOT +2/+4/+6%

Mạch: Dương Kiều
Cảnh giới: Vấn Đỉnh
Tổng tác dụng ở ba nấc: tăng heal trực tiếp +2/+4/+6%

Mạch: Âm Duy
Cảnh giới: Vấn Đỉnh
Tổng tác dụng ở ba nấc: thời lượng buff bản thân +0.2/0.4/0.6 s

Mạch: Dương Duy
Cảnh giới: Vấn Đỉnh
Tổng tác dụng ở ba nấc: giảm hồi chiêu pháp bảo 1/2/3%

Mỗi mạch có ba nấc, dùng lần lượt 2, 5, 10 Thông Mạch Đan và 10, 20, 40 tinh chất vùng cùng phí linh thạch. Chỉ số ở mỗi nấc là tổng hiện hành. Mỗi lõi có năm cấp.

Hao tu vi khi thua trận đột phá cam kết

Đích đột phá: Ngưng Khí, Trúc Cơ, Kết Đan
Tỷ lệ trên phần tu vi cần cho đoạn hiện tại: Bảo hộ theo bản gốc

Đích đột phá: Nguyên Anh, Hóa Thần
Tỷ lệ trên phần tu vi cần cho đoạn hiện tại: 2%

Đích đột phá: Anh Biến, Vấn Đỉnh
Tỷ lệ trên phần tu vi cần cho đoạn hiện tại: 3%

Đích đột phá: Âm Hư đến Toái Niết
Tỷ lệ trên phần tu vi cần cho đoạn hiện tại: 5%

Đích đột phá: Không Niết đến Không Kiếp
Tỷ lệ trên phần tu vi cần cho đoạn hiện tại: 8%

Đích đột phá: Chứng Đạo Đạp Thiên
Tỷ lệ trên phần tu vi cần cho đoạn hiện tại: 10%

Sàn cảnh giới và tiểu cảnh đã đạt được giữ lại. Mỗi lần thua chỉ mất tối đa số tu vi đang có trong đoạn. Cùng một đại cảnh giới có trần hao tổn 25% trong 24 giờ tính từ lần thua đầu. Tĩnh Tâm hoặc Hộ Đạo có thể giảm hao tổn lần lượt 25% hoặc 50%.

Đan tu vi thêm tiến độ theo tu vi nền khi chế. Mỗi viên thêm 20 dược tải, tự giảm 5 điểm/giờ. Ở dược tải 0–39 hiệu suất là 100%, 40–69 là 80%, 70–89 là 50%, từ 90 tạm dừng dùng. Chỉ dùng khi tải sau khi cộng 20 vẫn không vượt 100. Đan bổ khuyết chỉ bù phần thiếu trước trận nếu đủ điều kiện. Mốc tối thiểu là 85% ở Nguyên Anh–Vấn Đỉnh, 90% ở bước hai và 95% ở bước ba.

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Ma tu và chín sao Cổ Thần

Tài liệu thiết kế · Mở rộng V2

Ma tu thay cách vận hành công pháp trên cùng hệ cảnh giới. Cổ Thần là đường luyện thể song song, có tiến độ tôi cốt, cổ huyết và tinh văn riêng.

Các ngưỡng Ma Chướng dưới đây thuộc phương án tháng 10. Xem cơ chế được điều chỉnh và giới hạn Luyện Sát Khí trong thông tin tháng 11.

Xem thêm: Ma Tu, Cổ Thần và Luyện Thể. Đọc quy tắc tháng 11.

Từ Nguyên Anh, gặp Mặc Nghiên trong Bên Kia Hắc Hà để tìm hiểu Ma tu. Chọn một trong ba nhánh chính và có thể đổi ở Tĩnh Thất sau 24 giờ. Bốn nấc chung lần lượt là Kết Khế, Dẫn Sát, Tự Chủ, Ngự Ma.

Ba nhánh Ma tu

Nhánh: Sát Tâm
Lối đánh: sát thương bộc phát đổi bằng chướng

Nhánh: Hồn Khế
Lối đánh: ấn hồn và hoàn tài nguyên, không cần giết mục tiêu

Nhánh: Nghịch Thể
Lối đánh: tiêu HP có giới hạn, không tự sát và tăng chống đỡ

Ngưỡng ma chướng trong V2

Ma chướng: 0–39
Hiệu ứng: Chưa phát sinh hình phạt

Ma chướng: 40–69
Hiệu ứng: Sát thương ma +8%, hồi phục nhận −5%

Ma chướng: 70–89
Hiệu ứng: Sát thương ma +15%, hồi phục nhận −15%

Ma chướng: Chạm 90
Hiệu ứng: Khóa đòn ma kế, Tâm Ma Phản Phệ trong 6 giây làm công giảm 10%, sau đó thanh về 60.

Bế quan luyện thể dùng hoạt động chính để tích một điểm tôi cốt mỗi 10 phút. Mỗi sao trải qua Bì, Cốt, Huyết, Thần. Chỉ trang bị ba phù văn và cộng hưởng tối đa ba sao. Ba đại khảo nghiệm chia bảy kiếp trước các mốc 7, 8, 9 sao. Trượt khảo nghiệm cam kết cuối sao làm mất 10% tôi cốt chưa khóa.

Chín chương cổ thể

Sao · chương: 1 · Dấu Chân Trong Đá
Cảnh giới · địa điểm: Nguyên Anh · Bạch Cốt Cổ Nguyên
Cổ huyết / tôi cốt: 40 / 20
Boss và cách vượt: Thạch Cốt Dẫn Linh · phá giáp tay trái trước 3 nhịp nện

Sao · chương: 2 · Mạch Máu Dưới Núi
Cảnh giới · địa điểm: Hóa Thần · Huyết Mạch Địa Cung
Cổ huyết / tôi cốt: 80 / 40
Boss và cách vượt: Huyết Mạch Khôi Vương · chặn hút máu lúc 45 s, giữ trụ chữa trị trên 30% HP

Sao · chương: 3 · Tinh Văn Trên Trán
Cảnh giới · địa điểm: Anh Biến · Tinh Cốt Tế Đài
Cổ huyết / tôi cốt: 140 / 70
Boss và cách vượt: Tam Ấn Cổ Vệ · không đập bia đúng · phá bia giả khi phát sáng

Sao · chương: 4 · Bàn Tay Chống Trời
Cảnh giới · địa điểm: Vấn Đỉnh · Thiên Trụ Đoạn Khẩu
Cổ huyết / tôi cốt: 220 / 110
Boss và cách vượt: Thiên Trụ Chấp Tượng · giữ chống đỡ 6 s sau mỗi lần phá tư thế, không đốt DPS vô hạn

Sao · chương: 5 · Dư Âm Cổ Chiến
Cảnh giới · địa điểm: Tịnh Niết · Vạn Cốt Tinh Hà
Cổ huyết / tôi cốt: 340 / 170
Boss và cách vượt: Vạn Cốt Chiến Hồn · đánh ba mục tiêu có thứ tự · giết mục tiêu sai tăng một đợt phòng thủ

Sao · chương: 6 · Huyết Nhục Và Ý Chí
Cảnh giới · địa điểm: Toái Niết · Lục Tinh Huyết Hải
Cổ huyết / tôi cốt: 500 / 250
Boss và cách vượt: Lục Tinh Phản Ảnh · một pha vô hiệu hút máu · một pha cấm khiên · phải đổi nhịp auto

Sao · chương: 7 · Hai Kiếp Trên Cầu Sao
Cảnh giới · địa điểm: Không Niết · Đoạn Tinh Kiếp Kiều
Cổ huyết / tôi cốt: 720 / 360
Boss và cách vượt: Kiếp Kiều Cổ Chủ · hai khảo nghiệm khác resource · thắng boss sau khi qua cả hai

Sao · chương: 8 · Lời Thệ Không Chủ
Cảnh giới · địa điểm: Không Huyền · Cổ Khung Vô Tự Điện
Cổ huyết / tôi cốt: 1000 / 500
Boss và cách vượt: Vô Tự Cổ Hoàng Ảnh · xóa 1 loại buff mỗi 15 s · chứng minh build không lệ thuộc 1 kích hoạt

Sao · chương: 9 · Tự Chứng Cổ Đạo
Cảnh giới · địa điểm: Không Kiếp · Cửu Tinh Quy Nguyên Đài
Cổ huyết / tôi cốt: 1400 / 700
Boss và cách vượt: Cửu Tinh Tàn Nguyện · boss chỉ bị phá thế khi làm đúng mục tiêu pha · không nhận win bằng lực chiến

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Linh thú, tiến hóa và khu săn

Tài liệu thiết kế · Mở rộng V2

Một linh thú cùng tu sĩ xuất chiến. V2 bổ sung 40 huyết hệ chia vào mười khu săn. Chọn ổ tương ứng để nhận khế ấn đúng huyết hệ. Đủ ấn, đủ cảnh giới và hoàn thành nhiệm vụ riêng thì hợp khế chắc chắn.

Mỗi ngày có sáu lượt săn thưởng dùng chung, trữ tối đa 12. Vượt thủ lĩnh nhận số ấn cố định và có 5% nhận thêm một ấn. Ấu linh tiến lên Giác tỉnh ở mức thân thiết 20 và Chân hình ở mức 40, sau khi chuẩn bị thức ăn, tinh chất và hoàn bài thử.

Bốn linh thú ban đầu

Linh thú: Linh Hồ Vân Vĩ
Giác tỉnh: Đuôi chẻ ba, cổ lông cuộn
Chân hình: Năm đuôi hình mây và giáp ngọc vai

Linh thú: Xích Vũ Hạc
Giác tỉnh: Cánh thêm lông cứng dài, mào ba nhánh
Chân hình: Hai tầng cánh, đuôi quạt, cổ áo lông ngọc

Linh thú: Huyền Giáp Quy
Giác tỉnh: Mai có gờ núi ba tầng, chân bọc giáp
Chân hình: Tháp mai tự nhiên, giáp trán và đuôi đá

Linh thú: Lôi Ảnh Báo
Giác tỉnh: Bờm điện đặc, móng dài, đuôi chẻ chóp
Chân hình: Giáp sừng ở vai, bờm hai dải, chân trước khỏe

Mười khu săn

Khu · cảnh giới: Bích Khê Thú Cốc · Trúc Cơ
Thủ lĩnh: Cốc Chủ Thiết Bối
Cơ chế: Dây leo khóa chân, dùng giải chậm hoặc khiên để tiếp cận ổ
Ấn mỗi lần thắng / giá hợp khế: 4 / 20

Khu · cảnh giới: Hàn Diệm Song Giản · Kết Đan
Thủ lĩnh: Song Giản Nham Quân
Cơ chế: Luân phiên Hàn/Diệm mỗi 12 giây ·  đổi ưu tiên hồi phục khi đổi pha
Ấn mỗi lần thắng / giá hợp khế: 4 / 40

Khu · cảnh giới: Táng Tinh Thú Uyên · Nguyên Anh
Thủ lĩnh: Tinh Uyên Hộ Thú
Cơ chế: Ổ chỉ mở sau khi phá 3 trụ tinh áp trong một trận
Ấn mỗi lần thắng / giá hợp khế: 5 / 60

Khu · cảnh giới: Phàm Tâm Linh Trạch · Hóa Thần
Thủ lĩnh: Trạch Ảnh Khôi
Cơ chế: Giữ linh thú bị thương sống 45 giây thay vì chỉ gây DPS
Ấn mỗi lần thắng / giá hợp khế: 5 / 90

Khu · cảnh giới: Vạn Cấm Thú Sơn · Vấn Đỉnh
Thủ lĩnh: Tam Chung Sơn Quân
Cơ chế: Ba chuông tạo phản phép ·  ưu tiên ngắt chuông đúng thứ tự
Ấn mỗi lần thắng / giá hợp khế: 6 / 120

Khu · cảnh giới: Lạc Tinh Hoang Giới · Khuy Niết
Thủ lĩnh: Lạc Tinh Mẫu Thú
Cơ chế: Mỗi đợt thiên thạch đổi điểm yếu vật lý/pháp thuật
Ấn mỗi lần thắng / giá hợp khế: 8 / 160

Khu · cảnh giới: Nghịch Hải Cổ Đàm · Toái Niết
Thủ lĩnh: Cổ Đàm Hải Vương
Cơ chế: Áp suất 0–100 ·  phá mạch triều tại 70 để không mất lượt khế ước
Ấn mỗi lần thắng / giá hợp khế: 10 / 220

Khu · cảnh giới: Hư Không Dưỡng Linh Đài · Không Niết
Thủ lĩnh: Dưỡng Linh Thủ Vệ
Cơ chế: Neo bốn khoảng rỗng ·  không để pet tự đánh bia phản thương
Ấn mỗi lần thắng / giá hợp khế: 12 / 280

Khu · cảnh giới: Luân Hồi Vạn Thú Đồ · Không Huyền
Thủ lĩnh: Họa Giới Thú Sư
Cơ chế: Kẻ địch lặp đòn cuối ·  đổi thứ tự kỹ năng chứ không tăng tốc replay
Ấn mỗi lần thắng / giá hợp khế: 15 / 360

Khu · cảnh giới: Thái Sơ Thú Vực · Không Kiếp
Thủ lĩnh: Thái Sơ Chấp Khế
Cơ chế: Phá 3 neo bản nguyên và vượt 9 nhịp áp lực, không cần DPS vô hạn
Ấn mỗi lần thắng / giá hợp khế: 20 / 480

Đồ giám 40 huyết hệ

Linh thú · vai trò: Bích Nhĩ Linh Thỏ · hồi phục
Khu săn: Bích Khê Thú Cốc
Kỹ năng · nội tại: Hồi xuân: hồi 5% HP chủ, hồi 16 s · Sau giải độc, chủ nhận 6% kháng độc 6 s
Thử thách riêng: cứu 3 thỏ mắc dây leo

Linh thú · vai trò: Thiết Trảo Sơn Ly · phá khiên
Khu săn: Bích Khê Thú Cốc
Kỹ năng · nội tại: Liệp trảo: 180% P lên địch có khiên, hồi 12 s · Mỗi 3 đòn thường phá thêm 4% khiên, hồi nội 8 s
Thử thách riêng: phá khiên thủ vệ 3 lần

Linh thú · vai trò: Thanh Đằng Mộc Miêu · khống chế
Khu săn: Bích Khê Thú Cốc
Kỹ năng · nội tại: Mộc phược: 100% P, chậm 25% trong 4 s, hồi 14 s · Đánh mục tiêu bị chậm hồi 2% HP chủ, hồi nội 8 s
Thử thách riêng: giữ cây mẹ còn trên 50% HP

Linh thú · vai trò: Kim Giáp Trùng · hộ vệ
Khu săn: Bích Khê Thú Cốc
Kỹ năng · nội tại: Giáp hộ: khiên 8% HP chủ trong 5 s, hồi 18 s · Khi khiên vỡ, 120% P phản kích một lần, không tự kích phản đòn
Thử thách riêng: chặn 5 đợt đá rơi

Linh thú · vai trò: Băng Nha Linh Xà · khắc chế hồi phục
Khu săn: Hàn Diệm Song Giản
Kỹ năng · nội tại: Hàn tức: 140% P, giảm hồi phục địch 20% trong 5 s, hồi 16 s · Chậm nhận vào chủ giảm thời lượng 15%
Thử thách riêng: vượt ổ băng không dùng đan chống băng trả tiền

Linh thú · vai trò: Hỏa Vĩ Điêu · đốt nhóm
Khu săn: Hàn Diệm Song Giản
Kỹ năng · nội tại: Hỏa vũ: 70% P mỗi giây x 3 lên tối đa 3 địch, hồi 15 s · Sau đốt đủ 3 tick, chủ hồi 4 linh lực, hồi nội 10 s
Thử thách riêng: dập 4 ổ cháy và cứu trứng

Linh thú · vai trò: Mặc Văn Linh Lộc · thanh tẩy
Khu săn: Hàn Diệm Song Giản
Kỹ năng · nội tại: Tịnh tức: gỡ 1 debuff, hồi 4% HP chủ, hồi 20 s · Buff hồi phục trên chủ kéo dài thêm 1 s, tối đa 1 lần mỗi cast
Thử thách riêng: chọn bảo vệ đàn thay vì lấy sừng

Linh thú · vai trò: Huyết Giác Tê · luyện thể
Khu săn: Hàn Diệm Song Giản
Kỹ năng · nội tại: Xung tê: 200% P và 15 điểm break, hồi 18 s · Khi chủ dưới 40% HP, giảm sát thương nhận 6% trong 6 s, hồi nội 30 s
Thử thách riêng: ngắt 3 lần húc cầu đá

Linh thú · vai trò: Hàn Phách Ngọc Thiềm · hộ vệ nguyên tố
Khu săn: Táng Tinh Thú Uyên
Kỹ năng · nội tại: Ngọc tức: khiên 10% HP và kháng băng 10% 6 s, hồi 22 s · Hồi 3% HP khi chủ chịu đòn nguyên tố, hồi nội 12 s
Thử thách riêng: thu 5 mảnh ngọc không phá tổ

Linh thú · vai trò: Tử Điện Ưng · ngắt phép
Khu săn: Táng Tinh Thú Uyên
Kỹ năng · nội tại: Lôi kích: 220% P, ngắt niệm đòn thường, hồi 18 s · Địch bị ngắt nhận dấu dẫn điện 4 s: đòn lôi kế thêm 10% P, hồi nội 8 s
Thử thách riêng: ngắt cột lôi trước 2 giây cuối

Linh thú · vai trò: Dạ Mục Hồn Bức · suy hồn
Khu săn: Táng Tinh Thú Uyên
Kỹ năng · nội tại: Hồn âm: 140% P, giảm chính xác địch 12% trong 5 s, hồi 17 s · Địch đánh hụt cho chủ 1 hồn ấn, hồi nội 6 s, tối đa 3 ấn
Thử thách riêng: hoàn thành tuyến hang không dập đèn dẫn

Linh thú · vai trò: Thạch Tích Xuyên Sơn · phá giáp
Khu săn: Táng Tinh Thú Uyên
Kỹ năng · nội tại: Xuyên giáp: 170% P, giảm giáp 12% 6 s, hồi 16 s · Chủ nhận 8 điểm break khi đánh địch đã giảm giáp, hồi nội 12 s
Thử thách riêng: phá mạch tinh áp theo thứ tự 2-1-3

Linh thú · vai trò: Liệt Diễm Toan Nghê · đốt nhóm
Khu săn: Phàm Tâm Linh Trạch
Kỹ năng · nội tại: Hống diệm: 170% P lên 3 địch, thiêu 30% P mỗi giây x 4, hồi 20 s · Khi mục tiêu có 3 tầng cháy, chủ thêm 5% bạo kích 5 s
Thử thách riêng: tắt lửa phàm trạch mà không giết thú bị thương

Linh thú · vai trò: Tịnh Liên Bạch Lộ · hồi phục
Khu săn: Phàm Tâm Linh Trạch
Kỹ năng · nội tại: Liên độ: hồi 10% HP chủ và 6% HP pet, hồi 24 s · Hồi vượt ngưỡng chuyển tối đa 4% HP thành khiên 4 s, hồi nội 12 s
Thử thách riêng: chữa 3 NPC trong đầm

Linh thú · vai trò: Song Sinh Ảnh Miêu · né phản
Khu săn: Phàm Tâm Linh Trạch
Kỹ năng · nội tại: Ảnh tráo: né một đòn thường và phản 150% P, hồi 24 s · Phân ảnh chỉ là VFX · đòn phản cho 1 điểm Chân Giả, hồi nội 12 s
Thử thách riêng: nhận ra thú thật trong ba bóng

Linh thú · vai trò: Huyền Âm Minh Điệp · tước buff
Khu săn: Phàm Tâm Linh Trạch
Kỹ năng · nội tại: Tĩnh âm: xóa 1 buff thường của địch, gây 130% P, hồi 22 s · Giải buff thành công hồi 5 linh lực cho chủ, hồi nội 12 s
Thử thách riêng: giữ 3 hồi chuông im bằng luật auto ngắt

Linh thú · vai trò: Kim Cương Ma Viên · phá tư thế
Khu săn: Vạn Cấm Thú Sơn
Kỹ năng · nội tại: Toái nham: 250% P và 25 break, hồi 22 s · Mỗi lần chủ chặn đòn tích 1 cương ấn · 3 ấn tăng 15% sát thương pet đòn kế
Thử thách riêng: đỡ đủ 3 nhịp chấn sơn

Linh thú · vai trò: Lưu Sa Huyễn Hạt · độc
Khu săn: Vạn Cấm Thú Sơn
Kỹ năng · nội tại: Sa độc: 80% P mỗi giây x 5, hồi 19 s · Độc không chồng quá 1 · tick thứ 5 làm chậm 20% 3 s
Thử thách riêng: dẫn thú khỏi vùng phản độc

Linh thú · vai trò: Cấm Văn Thiên Chu · cấm trận
Khu săn: Vạn Cấm Thú Sơn
Kỹ năng · nội tại: Kết võng: đánh dấu 3 địch 6 s, nổ 160% P khi chủ dùng trận, hồi 22 s · Nổ võng không tự đặt lại ấn · một lần/cast
Thử thách riêng: giải 4 cấm ấn thay vì phá bằng lực

Linh thú · vai trò: Thương Vũ Lôi Bằng · dồn sát thương
Khu săn: Vạn Cấm Thú Sơn
Kỹ năng · nội tại: Bằng kích: 290% P mục tiêu xa nhất, hồi 24 s · Đòn pet vào boss đang niệm thêm 15 break
Thử thách riêng: vượt cầu gió với tối đa 2 lần gián đoạn

Linh thú · vai trò: Tinh Hỏa Kỳ Lân · hỏa hộ
Khu săn: Lạc Tinh Hoang Giới
Kỹ năng · nội tại: Tinh hỏa: 240% P, vùng cháy 40% P mỗi giây x 4, hồi 24 s · Mỗi 3 đòn hỏa cho khiên 5% HP chủ, hồi nội 15 s
Thử thách riêng: bảo vệ lò tinh hỏa qua 4 đợt

Linh thú · vai trò: U Thủy Giác Giao · thủy suy
Khu săn: Lạc Tinh Hoang Giới
Kỹ năng · nội tại: U triều: 210% P lên 3 địch và giảm công 10% 6 s, hồi 23 s · Sát thương lên địch giảm công hồi 2% HP chủ, hồi nội 8 s
Thử thách riêng: đóng 3 khe nước mà không rút cạn tổ

Linh thú · vai trò: Toái Tinh Cốt Lang · phá tư thế
Khu săn: Lạc Tinh Hoang Giới
Kỹ năng · nội tại: Toái tinh: 320% P lên địch có break, hồi 25 s · Sau break chủ tăng xuyên giáp 8% 6 s, không cộng dồn
Thử thách riêng: phá tư thế thủ vệ 2 lần cùng trận

Linh thú · vai trò: La Sát Hồn Sư · hồn
Khu săn: Lạc Tinh Hoang Giới
Kỹ năng · nội tại: Trấn hồn: 200% P, suy hồn 15% 6 s, hồi 22 s · Khi địch mất buff cho chủ 1 hồn lực, hồi nội 8 s
Thử thách riêng: thu phục bằng khế ước sau khi giải oan linh

Linh thú · vai trò: Thôn Khoáng Cổ Ngạc · phá khiên
Khu săn: Nghịch Hải Cổ Đàm
Kỹ năng · nội tại: Nghiền khoáng: 350% P và bóc 18% khiên, hồi 26 s · Bóc khiên hồi 6% HP pet, hồi nội 14 s
Thử thách riêng: cho ăn 3 loại khoáng đúng thứ tự

Linh thú · vai trò: Nghịch Triều Hải Mã · linh lực
Khu săn: Nghịch Hải Cổ Đàm
Kỹ năng · nội tại: Nghịch triều: làm chậm tốc độ địch 15% 5 s, hồi 8 linh lực chủ, hồi 26 s · Giảm lần đầu mất linh lực 50%, hồi nội 30 s
Thử thách riêng: giữ áp suất 40–70 trong 30 giây

Linh thú · vai trò: Cửu Nhĩ Linh Hầu · phản ứng
Khu săn: Nghịch Hải Cổ Đàm
Kỹ năng · nội tại: Thính pháp: chép một đòn thường thành 260% P, hồi 24 s · Không chép ultimate · biết đòn kế cho chủ giảm 8% sát thương lần tới
Thử thách riêng: đọc đúng 4 tín hiệu âm thanh có phụ đề

Linh thú · vai trò: Táng Nguyệt Minh Nga · khắc chế hồi phục
Khu săn: Nghịch Hải Cổ Đàm
Kỹ năng · nội tại: Nguyệt táng: 250% P, giảm hồi phục 30% 6 s, hồi 24 s · Địch nhận hồi phục bị giảm làm pet hồi 3% HP chủ, hồi nội 10 s
Thử thách riêng: khóa 3 gương nguyệt thực đúng pha

Linh thú · vai trò: Hư Không Du Ngư · né projectile
Khu săn: Hư Không Dưỡng Linh Đài
Kỹ năng · nội tại: Du không: chủ tránh 1 đòn projectile thường, trả 280% P, hồi 28 s · Không né thiên kiếp bắt buộc · sau né cho 6 linh lực
Thử thách riêng: giữ bốn neo không gian còn nguyên

Linh thú · vai trò: Tinh Giáp Bàn Long · hộ vệ
Khu săn: Hư Không Dưỡng Linh Đài
Kỹ năng · nội tại: Bàn hộ: khiên 14% HP chủ, phản 180% P một lần, hồi 30 s · Chủ còn khiên nhận thêm 6% kháng phép
Thử thách riêng: vượt 3 đợt trọng lực không để neo vỡ

Linh thú · vai trò: Chấp Niệm Mộng Lộc · thanh tẩy
Khu săn: Hư Không Dưỡng Linh Đài
Kỹ năng · nội tại: Giữ niệm: kháng 1 lần câm lặng, hồi 10% HP chủ, hồi 30 s · Debuff đầu tiên mỗi 20 s giảm thời lượng 25%
Thử thách riêng: hoàn thành lời hứa đã chọn trong hóa phàm

Linh thú · vai trò: Tịch Lôi Thần Thiềm · lôi phá
Khu săn: Hư Không Dưỡng Linh Đài
Kỹ năng · nội tại: Tịch lôi: 360% P và 30 break, hồi 28 s · Khi dùng trên địch câm lặng, trả 20% hồi pet nhưng tối đa 1 lần/cast
Thử thách riêng: hấp thu 3 lôi không dùng phản sát thương vòng lặp

Linh thú · vai trò: Thiên Cấm Huyền Xà · cấm trận
Khu săn: Luân Hồi Vạn Thú Đồ
Kỹ năng · nội tại: Thiên cấm: 280% P, khóa buff thường 4 s, hồi 30 s · Trận chủ nổ khi khóa buff thêm 80% P, hồi nội 12 s
Thử thách riêng: tháo cấm thay vì cưỡng đoạt linh khế

Linh thú · vai trò: Nhân Quả Huyền Ô · nhân quả
Khu săn: Luân Hồi Vạn Thú Đồ
Kỹ năng · nội tại: Trả quả: ghi 15% sát thương nhận trong 4 s rồi trả tối đa 400% P, hồi 30 s · Sát thương ghi không được tự ghi lại phần phản hồi
Thử thách riêng: đưa lại tín vật đúng NPC đã cứu

Linh thú · vai trò: Luân Hồi Kim Thiền · thanh tẩy
Khu săn: Luân Hồi Vạn Thú Đồ
Kỹ năng · nội tại: Thoát xác: hồi 12% HP và xóa 2 debuff chủ, hồi 32 s · Một lần/trận sau lần chết pet có thể trở lại 25% HP sau 8 s, không hồi sinh chủ
Thử thách riêng: vượt 3 kiếp cảnh với 3 cấu hình khác nhau

Linh thú · vai trò: Phệ Ảnh Ma Bằng · phá ảnh
Khu săn: Luân Hồi Vạn Thú Đồ
Kỹ năng · nội tại: Phệ ảnh: 420% P, tiêu 1 bóng giả/buff ảnh của địch, hồi 30 s · Không ăn actor người chơi · xóa ảnh tăng hồi linh lực 10% 6 s
Thử thách riêng: phá mộng ảnh mà không đánh nhầm đồng minh

Linh thú · vai trò: Cổ Đạo Thạch Hống · cổ thể
Khu săn: Thái Sơ Thú Vực
Kỹ năng · nội tại: Cổ hống: 380% P, break 40, hồi 32 s · Sau break chủ giảm 10% sát thương nhận 6 s
Thử thách riêng: chứng nhận Cổ Thần 7 sao hoặc tuyến thử luyện thể thuê khôi tương đương

Linh thú · vai trò: Quy Khư Hư Bạng · hộ vệ
Khu săn: Thái Sơ Thú Vực
Kỹ năng · nội tại: Quy khư: khiên 18% HP chủ, hấp thu 1 debuff, hồi 34 s · Khiên hết tự nhiên trả 8 linh lực, vỡ thì không
Thử thách riêng: đóng 4 vết rách hư không trước lúc hạ guardian

Linh thú · vai trò: Văn Thú Tinh Vực · hồn phệ
Khu săn: Thái Sơ Thú Vực
Kỹ năng · nội tại: Văn phệ: 460% P, hồi pet 8% HP, hồi 34 s · Mỗi mục tiêu đánh dấu hồn bị chạm tăng 1 phệ ấn · 3 ấn thêm 120% P, hồi nội 15 s
Thử thách riêng: thu 8 cổ huyết ấn từ nhiệm vụ tuần, không đòi đứng top boss

Linh thú · vai trò: Hỗn Nguyên Giới Kình · đa dụng cuối game
Khu săn: Thái Sơ Thú Vực
Kỹ năng · nội tại: Giới triều: 500% P chia tối đa 3 mục tiêu, khiên 8% HP chủ, hồi 36 s · Mỗi lần trận đổi pha cho 8 linh lực và 5% HP, tối đa 3 lần/trận
Thử thách riêng: hoàn thành 9 Huyền Kiếp và thu 12 giới ấn từ thử thách tuần

Trong các bảng kỹ năng của V2, A là công phù hợp của tu sĩ, P là công của linh thú, H là sinh lực tối đa của chủ. Hệ số sát thương được tính trước giảm trừ của mục tiêu.

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Mười hai bí cảnh và 72 phòng

Tài liệu thiết kế · Mở rộng V2

Mỗi bí cảnh gồm sáu phòng. Chọn hướng đi, cứu người, nghỉ hoặc nhận vật liệu trước khi gặp boss. Mỗi ngày có ba lượt thưởng dùng chung, trữ tối đa sáu. Luyện tập không tiêu lượt và không phát thưởng.

Theo bảng V2, vượt bí cảnh nhận 10 ấn, 8 tinh luyện và 5 tinh chất. Lần đầu cộng 30 ấn, 50 cảm ngộ và mở công thức hoặc chứng nhận. Bảng thưởng lặp có khoáng 60%, trang bị 25%, trang công thức 10%, mảnh pháp bảo 5%. Sau tám lần liên tiếp thiếu trang bị, lần thứ chín bảo đảm có trang bị nếu đủ điều kiện. Có thể dùng 60 ấn chọn một món bộ hoặc 120 ấn chọn món đặc trưng.

Cửa vào và dấu hiệu boss

Bí cảnh: Mộ Đan Tàn Ảnh
Cảnh giới: Nguyên Anh
Boss: Đan Cốt Thủ Mộ
Cơ chế và tín hiệu báo trước: ba ấn đan đổi vai trò khiên/hồi/DOT mỗi 12 s · ưu tiên phá ấn hồi trước · sàn đá nâng ba bậc và khói mảnh hướng về ấn đang hoạt động

Bí cảnh: Lôi Trì Phong Ấn
Cảnh giới: Hóa Thần
Boss: Lôi Trì Pháp Khôi
Cơ chế và tín hiệu báo trước: tích điện 0–100 · khi 70 cần dùng ngắt, khiên hấp thu quá 3 đòn phát phản điện · cọc đồng sáng theo ba nhịp, có số phụ đề

Bí cảnh: Huyền Cốt Động
Cảnh giới: Nguyên Anh
Boss: Cốt Ngục Cự Khôi
Cơ chế và tín hiệu báo trước: ba lớp tư thế 30/40/50 break · đỡ đúng nhịp làm mất tư thế, thuần DPS kém hiệu quả · vai nặng hạ xuống trước 2.5 s, vệt đất báo đường nện

Bí cảnh: U Đăng Cổ Các
Cảnh giới: Anh Biến
Boss: U Đăng Khế Chủ
Cơ chế và tín hiệu báo trước: đèn thật mang dấu khế, đánh bóng sai tăng suy hồn · xóa buff mở cửa sát thương · ngọn đèn thật không rung, vòng khế hiện 2 s trước triệu ảnh

Bí cảnh: Vạn Cấm Lưu Lang
Cảnh giới: Vấn Đỉnh
Boss: Lưu Lang Cấm Sư
Cơ chế và tín hiệu báo trước: ấn A→B→C đúng trình tự phá khóa · xóa mọi ấn cùng lúc khiến cửa đổi · ba biểu tượng có tên và màu khác nhau, không dựa riêng màu

Bí cảnh: Đoạn Giới Kiếm Trủng
Cảnh giới: Khuy Niết
Boss: Kiếm Trủng Chấp Niệm
Cơ chế và tín hiệu báo trước: boss chặn spam cùng kỹ năng · dùng ba tag khác nhau mở giáp 6 s · kiếm trước ngực đổi góc báo thế phòng, chữ log báo tag bị khắc

Bí cảnh: Táng Lôi Tinh Uyên
Cảnh giới: Toái Niết
Boss: Tinh Uyên Lôi Chủ
Cơ chế và tín hiệu báo trước: lôi chết không gây DOT mà khóa hồi · dùng thanh tẩy trước đợt đánh lớn · vòng sét tụ ở cổ chân 3 s và trụ hồi chuyển trắng

Bí cảnh: Cổ Diệu Phế Thành
Cảnh giới: Không Niết
Boss: Cổ Thành Mạch Vệ
Cơ chế và tín hiệu báo trước: chuyển công trái/phải: một bên hấp phép, bên kia hấp vật lý · đánh đúng mặt không cần điều khiển đi bộ · mảng vai mở sáng trước 2 s, target selector chọn điểm yếu

Bí cảnh: Vô Sinh Mộng Vực
Cảnh giới: Không Linh
Boss: Mộng Giới Vô Danh
Cơ chế và tín hiệu báo trước: boss ghi đòn cuối của chủ · lặp skill bị phản 40%, đòn khác tag xóa ghi · biểu tượng kỹ năng bị ghi hiện trên khung boss, không cần nhớ hiệu ứng

Bí cảnh: Quy Tắc Thiên Cung
Cảnh giới: Không Huyền
Boss: Thiên Cung Chấp Luật
Cơ chế và tín hiệu báo trước: mỗi pha đặt 1 luật: không hồi quá 15% H/10 s, không hơn 3 DOT, không chồng khiên · vi phạm tăng phòng boss 10% tối đa 30% · ba bảng luật rõ trước trận, timer đổi pha cố định

Bí cảnh: Hắc Hà Khế Ngục
Cảnh giới: Nguyên Anh
Boss: Hắc Hà Khế Phán
Cơ chế và tín hiệu báo trước: ma chướng tạo thế mạnh nhưng cũng khóa tự hồi · chính đạo dùng khế đối trọng thay ma chướng, cùng độ khó · thanh khế đối trọng 0–100 có chú thích, boss chạm 90 mở điểm yếu

Bí cảnh: Quy Nguyên Chứng Đài
Cảnh giới: Không Kiếp
Boss: Quy Nguyên Giám Đạo
Cơ chế và tín hiệu báo trước: ba bài DPS/bảo hộ/giải cấm cùng lượt, chọn hai để qua · không có một build vô hiệu hoàn toàn · đài chia ba ký hiệu có tên, có preview yêu cầu trước run

Mộ Đan Tàn Ảnh

Phòng: Cửa Mộ
Thử thách và lựa chọn: đánh hai đợt cốt binh, giữ pet khỏi bia phản thương

Phòng: Ba Lò Cũ
Thử thách và lựa chọn: chọn lò nguyên vẹn: +1 lọ hồi, boss có khiên · chọn lò nứt: +5 mạch ngọc sau clear, boss có DOT

Phòng: Thư Khế Thợ Đan
Thử thách và lựa chọn: trả thư cho người giữ mộ: +20 thiện cảm Bạch Tố · giữ để khảo chứng: +20 cảm ngộ, có quest trả thư sau

Phòng: Giếng Nguyên Tức
Thử thách và lựa chọn: nghỉ hồi 20% H hoặc lấy 5 tinh chất và bỏ hồi

Phòng: Đan Cốt Thủ Mộ
Thử thách và lựa chọn: boss 180 s, giải luân phiên ấn · thua giữ unlock phòng, không giữ phần thưởng

Phòng: Kho Ngọc Mạch
Thử thách và lựa chọn: sau clear chọn 1:2 Thông Mạch Đan hoặc 5 mạch ngọc · ngoài gói roll chung

Lôi Trì Phong Ấn

Phòng: Bờ Hồ
Thử thách và lựa chọn: đánh lôi tinh · đòn đất hoặc ngắt giúp giảm tải

Phòng: Cọc Dẫn Điện
Thử thách và lựa chọn: nối cọc ngắn: phòng sau ít địch · nối cọc dài: +8 khoáng sau clear, nhận chậm 10%

Phòng: Người Canh Mưa
Thử thách và lựa chọn: sửa áo mưa cho NPC: gỡ chậm · hỏi ký ức cũ: +25 cảm ngộ và trận phụ

Phòng: Đài Tĩnh Lôi
Thử thách và lựa chọn: chọn kháng lôi 10% hoặc thêm 1 lần ngắt tự động

Phòng: Lôi Trì Pháp Khôi
Thử thách và lựa chọn: phá hai cọc trước 60 s · boss dưới 35% dùng một đòn lôi lớn cần phòng hộ

Phòng: Kho Đồng Cổ
Thử thách và lựa chọn: chọn 5 tinh chất hoặc 1 Kháng Lôi Ngọc Đan

Huyền Cốt Động

Phòng: Xương Cổ Ngoại Động
Thử thách và lựa chọn: đánh khôi nhỏ, mỗi khiên vỡ phải chọn hồi hay tiếp

Phòng: Trụ Áp Cốt
Thử thách và lựa chọn: nhận thử sức: +10 tôi cốt và HP tối đa tạm-10% · đường vòng: không giảm HP, ít tài nguyên

Phòng: Bia Người Luyện Thể
Thử thách và lựa chọn: giữ tên người thất bại: +20 Thủ Hộ · mài lại để tập: +20 Bất Khuất

Phòng: Suối Ngọc
Thử thách và lựa chọn: hồi 20% H hoặc tăng 20 break lần đầu

Phòng: Cốt Ngục Cự Khôi
Thử thách và lựa chọn: vượt ba tư thế trong 180 s, không cần Cổ Thần để vào

Phòng: Hòm Tôi Cốt
Thử thách và lựa chọn: chọn 10 tôi cốt hoặc 2 Cương Cốt Dưỡng Thể Đan

U Đăng Cổ Các

Phòng: Bậc Thang Hồn
Thử thách và lựa chọn: đánh ba bóng giữ cửa · không cộng actor chiến đấu ngoài giới hạn

Phòng: Bảy Ngọn Đèn
Thử thách và lựa chọn: thắp đèn vô danh: +1 thanh tẩy, giảm phần thưởng khoáng 5 · dập: +10 khoáng, boss có thêm bóng

Phòng: Lời Nhắn Trong Khung
Thử thách và lựa chọn: đem về người gửi: +25 tin cậy Mặc Nghiên · đọc tại chỗ: +25 Nhân Quả

Phòng: Ban Công Tĩnh Tức
Thử thách và lựa chọn: chọn kháng hồn 10% hoặc hồi linh lực 20

Phòng: U Đăng Khế Chủ
Thử thách và lựa chọn: đánh đúng chủ hồn hai lần, tránh nổ khi đèn mất

Phòng: Khế Ấn Cổ
Thử thách và lựa chọn: chọn 3 mảnh Tàng Hồn Cổ Phiên hoặc 6 tinh chất

Vạn Cấm Lưu Lang

Phòng: Khẩu Lang
Thử thách và lựa chọn: đánh cấm khôi để nhận chìa tượng trưng

Phòng: Cửa Ba Ấn
Thử thách và lựa chọn: giải tuần tự: boss yếu khiên · cưỡng phá: thêm 10 nguyên liệu, boss mạnh khiên 20%

Phòng: Bản Vẽ Sai
Thử thách và lựa chọn: sửa giúp người giữ cửa: +20 thiện cảm Yên Từ · giữ lỗi làm mồi: thêm 1 lượt giải cấm

Phòng: Tĩnh Thất Hẹp
Thử thách và lựa chọn: chọn kéo dài buff 1 s hoặc giảm tiêu linh lực 5% trong lượt

Phòng: Lưu Lang Cấm Sư
Thử thách và lựa chọn: boss đổi chuỗi ở 70/35% HP, không đổi ngẫu nhiên sau khi snapshot

Phòng: Ngọc Đồ
Thử thách và lựa chọn: chọn 1 trang bản vẽ chưa có trong Rèn Thiên Văn Trận Bàn–Rèn Thiên Văn Bội hoặc 10 cảm ngộ

Đoạn Giới Kiếm Trủng

Phòng: Kiếm Khí Ngoại Vi
Thử thách và lựa chọn: đánh kiếm ảnh không có phần thưởng actor riêng

Phòng: Cầu Đoạn Giới
Thử thách và lựa chọn: qua cầu ngắn: nhận nứt giáp 5% · ghép cầu: tiêu 5 khoáng, giảm 1 đợt địch

Phòng: Di Thư Kiếm Chủ
Thử thách và lựa chọn: gửi kiếm về người chờ: +25 Hữu Tình · đặt tại mộ: +25 Vô Thường

Phòng: Thềm Vô Phong
Thử thách và lựa chọn: chọn hồi 20% H hoặc miễn phản kiếm một lần

Phòng: Kiếm Trủng Chấp Niệm
Thử thách và lựa chọn: đổi rotation theo thế phòng, break khi boss giữ kiếm ngang

Phòng: Tàn Kiếm Đồ
Thử thách và lựa chọn: chọn 5 mảnh Sinh Tử Song Ngọc hoặc 8 tinh chất

Táng Lôi Tinh Uyên

Phòng: Vành Uyên
Thử thách và lựa chọn: ba đợt tinh thú, giữ nguyên build snapshot mỗi trận

Phòng: Hai Mảnh Sao
Thử thách và lựa chọn: gắn mảnh hồi: +1 hồi phục, boss thêm 15% HP · gắn mảnh công: +10% break, không hồi

Phòng: Người Chở Tro
Thử thách và lựa chọn: hộ tống: +30 thiện cảm Lạc Tinh Dao · đi trước mở đường: +30 Bất Khuất

Phòng: Đài Tĩnh Điện
Thử thách và lựa chọn: chọn giải 1 debuff hoặc phòng hộ 10% trong 10 s đầu boss

Phòng: Tinh Uyên Lôi Chủ
Thử thách và lựa chọn: ngắt khóa hồi ở 30/90 s, bỏ khống chế không hiệu lực chuyển thành phá thế

Phòng: Tinh Vật Tàn
Thử thách và lựa chọn: chọn 5 mảnh Nhân Quả Kết Thằng hoặc 12 tinh luyện

Cổ Diệu Phế Thành

Phòng: Cổng Đá
Thử thách và lựa chọn: phá khôi canh, không tính là Cổ Thần thật

Phòng: Ngã Ba Tinh Mạch
Thử thách và lựa chọn: dẫn mạch vào tường: thêm khiên, mất 5 phần thưởng · vào lò: thêm 10 phần thưởng, nhận vết chậm

Phòng: Tên Trên Đá
Thử thách và lựa chọn: ghi lại tên dân: +30 Thủ Hộ · truy nguyên chiến sự: +30 Nhân Quả

Phòng: Kho Nghỉ
Thử thách và lựa chọn: chọn bỏ debuff hoặc giữ để cộng 5 ấn sauclear

Phòng: Cổ Thành Mạch Vệ
Thử thách và lựa chọn: đổi target selector theo vai, không mở cùng hai điểm yếu

Phòng: Kho Cổ Diệu
Thử thách và lựa chọn: chọn 5 mảnh Chân Giả Kính hoặc 15 tôi cốt

Vô Sinh Mộng Vực

Phòng: Giấc Mộng Đầu
Thử thách và lựa chọn: đánh phiên bản khôi của build hiện tại hệ số 0.8

Phòng: Nhà Không Chủ
Thử thách và lựa chọn: đi vào: nhận 1 ký ức và thêm trận · bỏ qua: hồi 10% HP

Phòng: Người Chờ Cửa
Thử thách và lựa chọn: giữ lời hứa: +35 Hữu Tình · nói sự thật: +35 Chân Giả, không gắn một lựa chọn là sai đạo đức

Phòng: Giếng Tỉnh Mộng
Thử thách và lựa chọn: chọn đổi một luật auto cho trận sau hoặc nhận 15 linh lực

Phòng: Mộng Giới Vô Danh
Thử thách và lựa chọn: không dùng lặp cùng skill liên tiếp, nguồn kích hoạt hiệu ứng không đếm kỹ năng mới

Phòng: Mảnh Tỉnh
Thử thách và lựa chọn: chọn 6 mảnh Tịch Diệt Sa Lậu hoặc 20 cảm ngộ

Quy Tắc Thiên Cung

Phòng: Bậc Luật
Thử thách và lựa chọn: đánh khôi theo luật đơn để học

Phòng: Phòng Cân Bằng
Thử thách và lựa chọn: chọn xóa luật hồi nhưng thêm khống chế · hoặc giữ đủ luật nhận 10 phần thưởng

Phòng: Văn Bản Không Tên
Thử thách và lựa chọn: đọc hộ người giữ: +40 Tín Niệm · chất vấn quyền lập luật: +40 Tự Tại

Phòng: Giếng Định Tâm
Thử thách và lựa chọn: chọn phục 20% HP hoặc thêm 1 lần bỏ qua vi phạm

Phòng: Thiên Cung Chấp Luật
Thử thách và lựa chọn: ba pha 70/35%, chốt luật trước run không reroll vì thua

Phòng: Đạo Văn
Thử thách và lựa chọn: chọn 6 mảnh Khuy Thiên Đạo Bàn hoặc 5 mảnh Tàn Dạ Nhật Luân

Hắc Hà Khế Ngục

Phòng: Bến Khế
Thử thách và lựa chọn: chọn độ sâu theo cảnh giới · không cho thấp tầng roll đồ cao

Phòng: Ba Tờ Giao Ước
Thử thách và lựa chọn: nhận rủi roHP-10% đổi 10 ấn · hoặc chọn khế ổn định không phạt

Phòng: Oan Hồn Xin Rời
Thử thách và lựa chọn: giải khế: +25 tin cậy Mặc Nghiên · hỏi sự thật trước rồi giải: thêm trận, +25 cảm ngộ

Phòng: Trạm Vô Thanh
Thử thách và lựa chọn: chọn giảm 20 ma chướng/khếáp hoặc hồi 20% H

Phòng: Hắc Hà Khế Phán
Thử thách và lựa chọn: ngắt lúc boss tiêu khế, không dùng ma tu cũng có chiến thuật

Phòng: Khế Hạp
Thử thách và lựa chọn: chọn 8 mảnh pháp bảo trongpool đã mở hoặc 10 ấn gear phụ

Quy Nguyên Chứng Đài

Phòng: Chân Đài
Thử thách và lựa chọn: đánh 3 thủ vệ để nhận ba chứng môn

Phòng: Chọn Hai Đạo
Thử thách và lựa chọn: chọn 2/3 bài: công, thủ, ngộ · phần còn lại là đường phụ không bắt buộc

Phòng: Người Ở Bờ Bên Kia
Thử thách và lựa chọn: mang ký ức người cũ: +50 Hữu Tình · gửi lại làm nền thế giới: +50 Thủ Hộ

Phòng: Khoảng Nghỉ Cuối
Thử thách và lựa chọn: đổi trợ chiến hoặc nhận 1 thanh tẩy · không đổi đồ giữa trận boss

Phòng: Quy Nguyên Giám Đạo
Thử thách và lựa chọn: ba pha kiểm chứng hai đạo đã chọn, tiêu chí server trước attempt

Phòng: Hòm Quy Nguyên
Thử thách và lựa chọn: chọn 8 mảnh Vạn Giới Cấm Môn hoặc 8 mảnh Quy Nguyên Cổ Đạo Đỉnh

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Boss bản đồ và boss chung

Tài liệu thiết kế · Mở rộng V2

V2 định nghĩa tổng cộng 55 boss thuộc năm nhóm. Mười thủ lĩnh khu săn, chín boss Cổ Thần và mười hai boss bí cảnh có hồ sơ ở các mục tương ứng. Hai bảng dưới đây tra riêng 24 boss còn lại.

Mười hai boss bản đồ

Boss: Mạch Ngọc Tà Khôi
Vị trí · cảnh giới: Bạch Cốt ven Thanh Khê · Nguyên Anh
Cơ chế: hút linh lực · phá hai mạch tay trước khi đánh tim
Dấu hiệu: mạch tay kéo sáng 2 s

Boss: Lôi Môn Cổ Vệ
Vị trí · cảnh giới: phụ vùng Hàn Vụ · Hóa Thần
Cơ chế: cửa hấp 3 đòn phép rồi phản · dùng ngắt hoặc đòn vật lý
Dấu hiệu: cửa lưng mở 3 khấc trước phản

Boss: Mộng Trạch Họa Yêu
Vị trí · cảnh giới: đầm hóa phàm · Hóa Thần
Cơ chế: đánh vật giả hồi boss · chọn vật thật dựa shadow marker
Dấu hiệu: bóng thật có vòng neo ngọc dưới chân

Boss: Tiên Tủy Hoang Khôi
Vị trí · cảnh giới: mỏ tiên linh · Anh Biến
Cơ chế: ba mạch tiên tủy thaydamage type mỗi 15 s
Dấu hiệu: vân ngực đổi biểu tượng nguyên tố

Boss: Đoạn Cấm Kiếm Sứ
Vị trí · cảnh giới: vành ngoài Vạn Cấm · Vấn Đỉnh
Cơ chế: xóa một buff cao nhất · dùng buff mồi trước hộ thể
Dấu hiệu: kiếm chỉ tên buff trong combatlog

Boss: Âm Hà Chấp Đăng
Vị trí · cảnh giới: nhánh U Minh · Âm Hư
Cơ chế: hút hồi phục thành khiên · thanh tẩy dấu trước heal lớn
Dấu hiệu: đèn chứa biểu tượng hồi đảo chiều

Boss: Dương Cực Thạch Quân
Vị trí · cảnh giới: bờ linh dương · Dương Thực
Cơ chế: nóng lên theo số skill spam · đánh thường hạ nhiệt
Dấu hiệu: đường vân đỏ đầy dần và timer 12 s

Boss: Khuy Giới Tinh Chu
Vị trí · cảnh giới: Vạn Tinh nhánh khe · Khuy Niết
Cơ chế: neo mục tiêu bằng cấm chế · đổi skill giải trước burst
Dấu hiệu: sợi neo vẽ rõ đích và thời gian

Boss: Tịnh Nguyên Huyền Điểu
Vị trí · cảnh giới: thác tinh vực · Tịnh Niết
Cơ chế: tịnh hóa mọi DOT mỗi 18 s, burst sau thời điểm này
Dấu hiệu: cánh gập và hai lớp vòng tịnh 2 s

Boss: Toái Giới Thiết Ngưu
Vị trí · cảnh giới: bãi xương sao · Toái Niết
Cơ chế: break cao · đòn phản kích đúng mở yếu nhanh hơn DPS
Dấu hiệu: chân phải càođất 3 nhịp

Boss: Không Phách Cấm Tượng
Vị trí · cảnh giới: Hư Không Liệt Vực nhánh · Không Linh
Cơ chế: hóa vô thể 6 s · cần tạo cấm ấn trước khi vô thể
Dấu hiệu: vòng chân đứt từng mảng trong 3 s

Boss: Huyền Tâm Giới Hầu
Vị trí · cảnh giới: Vô Thanh Đạo Giới nhánh · Không Huyền
Cơ chế: chép một skill mạnh nhất trận sau 45 s · lưu skill ngắt
Dấu hiệu: mắt hiện icon skill sắp chép

Mười hai boss chung

Boss: Tinh Hà Cự Khuyển
Cảnh giới: Nguyên Anh
Cơ chế · hướng khắc chế: sủa đẩy thế, đánh vào sau sủa mở điểm yếu 6 s · Hồn/kiếm
Nhóm thưởng: cống hiến linh thú và tinh luyện

Boss: Hàn Thiên Mẫu Giao
Cảnh giới: Hóa Thần
Cơ chế · hướng khắc chế: băng đóng hồi theo mốc 75/40% · thanh tẩy có giá trị · Lôi/thanh tẩy
Nhóm thưởng: dược liệu cao và mảnh pháp bảo

Boss: Vạn Đăng Hồn Khuyết
Cảnh giới: Anh Biến
Cơ chế · hướng khắc chế: nhiều đèn chia sẻ HP · ưu tiên đèn chữa boss · Cấm trận/Hồn
Nhóm thưởng: mảnh Tàng Hồn/Thiên Cấm

Boss: Thiên Trụ Cổ Ngưu
Cảnh giới: Vấn Đỉnh
Cơ chế · hướng khắc chế: tư thế ba đợt · phá đúng nhịp chặn nện toàn trận · Luyện thể
Nhóm thưởng: cổ huyết và tinh văn thường

Boss: Âm Dương Song Khế
Cảnh giới: Dương Thực
Cơ chế · hướng khắc chế: đổiâm/dương · dùng hai nguồn đòn khác tag · Đa dụng
Nhóm thưởng: mảnh ý cảnh nghiên cứu

Boss: Khuy Tinh Đạo Điểu
Cảnh giới: Khuy Niết
Cơ chế · hướng khắc chế: tránh spam cùng tag, nhận điểm phá luật chứ không chỉ DPS · Kiếm/Cấm
Nhóm thưởng: mảnh bản nguyên

Boss: Tịnh Hải Cổ Bạng
Cảnh giới: Tịnh Niết
Cơ chế · hướng khắc chế: vỏ đóng giảm 90% · tích lực bộc phát đúng cửa mở · Lôi/đơn mục tiêu
Nhóm thưởng: mảnh Nhân Quả/Thôn Pháp

Boss: Toái Nhật Nham Long
Cảnh giới: Toái Niết
Cơ chế · hướng khắc chế: lửa ăn khiên, đỡ theo ngưỡng chứ không chồng toàn trận · Luyện thể/hồi
Nhóm thưởng: khoáng cao và cổ huyết

Boss: Không Niết Táng Linh
Cảnh giới: Không Niết
Cơ chế · hướng khắc chế: mỗi 30 s bắt giữ một buff · cần chọn buff mồi · Hồn/ý cảnh
Nhóm thưởng: tinh chất thức linh pháp bảo

Boss: Không Linh Kình Chủ
Cảnh giới: Không Linh
Cơ chế · hướng khắc chế: gió hư không cắt sát thương vượt ngưỡng time · kỹ năng chuyển pha có lợi · Lôi/kiếm
Nhóm thưởng: khếấn pet cóquota

Boss: Huyền Kiếp Lôi Mẫu
Cảnh giới: Không Huyền
Cơ chế · hướng khắc chế: chín nhịp sét chia 3 nhóm, ngắt đúng nhịp nhận điểm bảo hộ · Cấm/luyện thể
Nhóm thưởng: mảnh chống kiếp và cổ pháp

Boss: Quy Khư Chấp Giới
Cảnh giới: Không Kiếp
Cơ chế · hướng khắc chế: chọn vai đánh/giữ/giải cấm trước mỗi attempt · đều có điểm đóng góp · Mọi build
Nhóm thưởng: mảnh pháp bảo cuối, ngoại hình không độc quyền top

Boss chung có máu dùng chung, ba giai đoạn và cửa sổ mẫu 24 giờ. Các mốc thưởng cá nhân là 100, 300 và 600 điểm. Phần thưởng lần đầu, tiến trình bản đồ và phần thưởng cá nhân được xét riêng.

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

100 trang bị và mười bộ

Tài liệu thiết kế · Mở rộng V2

Tám mươi món hợp thành mười bộ, mỗi bộ tám vị trí. Hai mươi món còn lại có hiệu ứng đặc trưng. Mốc cường hóa tối đa trong thiết kế tăng theo tiến trình.

Trúc Cơ mở đến +5, Nguyên Anh đến +10, Khuy Niết đến +15, Không Niết đến +20. Mỗi cấp thêm 4% chỉ số chính gốc. Ở +20, chỉ số chính bằng 180% giá trị gốc. Chuyển cường hóa yêu cầu hai món cùng vị trí và cùng bậc, món đích đang +0. Mức phí bằng 5% tổng phí tích lũy của phần cấp chuyển. Phân giải trả 70% tinh luyện đã nạp.

Hiệu ứng khi mặc đủ món

Bộ: Tàng Phong
Hướng tu: Kiếm
Mốc 2, 4 và 6 món: 2 món: +6% sát thương kiếm · 4: đánh địch giảm giáp nhận 1 kiếm ý/8 s · 6: tiêu 3 kiếm ý tăng 20% hệ số đòn kiếm kế, hồi nội 12 s

Bộ: Thừa Lôi
Hướng tu: Lôi
Mốc 2, 4 và 6 món: 2: +6% sát thương lôi · 4: mỗi 3 lần gây điện hồi 4 linh lực/10 s · 6: ngắt niệm thành công thêm 160% A lên 1 địch, hồi nội 16 s

Bộ: Huyền Cốt
Hướng tu: Luyện thể
Mốc 2, 4 và 6 món: 2: HP+6% · 4: khiên vỡ cho 12 break đòn kế/12 s · 6: đỡ đòn tích 3 cốt ấn, quyền kế+180% A, hồi nội 18 s

Bộ: Tịch Hồn
Hướng tu: Hồn
Mốc 2, 4 và 6 món: 2: +6% sát thương hồn · 4: đủ 3 hồn ấn hồi 5 linh lực/10 s · 6: tiêu ấn xóa 1 buff thường, hồi nội 20 s

Bộ: Thiên Văn
Hướng tu: Cấm trận
Mốc 2, 4 và 6 món: 2: thời lượng ấn+1 s · 4: trận đủ 2 dấu tăng 8% khiên/15 s · 6: nổ 3 dấu thêm 200% A, hồi nội 20 s

Bộ: Đoạn Giới
Hướng tu: Kiếm
Mốc 2, 4 và 6 món: 2: xuyên giáp+5 điểm · 4: phá khiên cho 2 kiếm ý/12 s · 6: tuyệt kiếm bỏ qua 10% phòng ngự hiện hữu, hồi nội 24 s, không true damage

Bộ: Táng Lôi
Hướng tu: Lôi
Mốc 2, 4 và 6 món: 2: +8% sát thương lôi · 4: chống phản điện 8% · 6: sau 3 đòn lôi cùng địch tạo lôi ấn nổ 220% A/20 s

Bộ: Cổ Diệu
Hướng tu: Luyện thể
Mốc 2, 4 và 6 món: 2: HP+8% · 4: break+10 mỗi quyền/10 s · 6: Cổ Thần hoặc thuần thể cùng kích hoạt khiên 12% H/25 s sau phá tư thế

Bộ: Vô Sinh
Hướng tu: Hồn
Mốc 2, 4 và 6 món: 2: sát thương DOT hồn+8% · 4: refresh ấn không xóa phần tick đã tích · 6: hết 6 s suy hồn gây 240% A/22 s

Bộ: Quy Tắc
Hướng tu: Cấm trận
Mốc 2, 4 và 6 món: 2: buff trận+1 s · 4: giải cấm hồi 6 linh lực/12 s · 6: đổi cấu trúc trận tạo khiên 10% H và 180% A, hồi nội 25 s

Tàng Phong

Trang bị: Tàng Phong Kiếm
Vị trí · phẩm · cảnh giới: Vũ khí · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: bạo kích +2 điểm · chính xác +2 điểm
Nguồn kiếm: Mộ Đan Tàn Ảnh · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tàng Phong Pháp y
Vị trí · phẩm · cảnh giới: Pháp y · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: kháng build đối trọng +4% · hồi phục nhận +3%
Nguồn kiếm: Mộ Đan Tàn Ảnh · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tàng Phong Quan
Vị trí · phẩm · cảnh giới: Đầu · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: kháng khống chế +4% · HP phụ +3%
Nguồn kiếm: Mộ Đan Tàn Ảnh · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tàng Phong Hộ oản
Vị trí · phẩm · cảnh giới: Hộ oản · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: xuyên giáp +2 điểm · hồi linh lực +3%
Nguồn kiếm: Mộ Đan Tàn Ảnh · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tàng Phong Đai
Vị trí · phẩm · cảnh giới: Đai · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: kháng DOT +4% · linh lực tối đa +4%
Nguồn kiếm: Mộ Đan Tàn Ảnh · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tàng Phong Ngoa
Vị trí · phẩm · cảnh giới: Giày · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: né +2 điểm · kháng chậm +5%
Nguồn kiếm: Mộ Đan Tàn Ảnh · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tàng Phong Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: giảm tiêu linh lực +2% · bạo kích +2 điểm
Nguồn kiếm: Mộ Đan Tàn Ảnh · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tàng Phong Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: giá trị khiên +3% · kháng hồn +4%
Nguồn kiếm: Mộ Đan Tàn Ảnh · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Thừa Lôi

Trang bị: Thừa Lôi Trượng
Vị trí · phẩm · cảnh giới: Vũ khí · Địa · Hóa Thần
Chỉ số hoặc tác dụng: bạo kích +2 điểm · chính xác +2 điểm
Nguồn kiếm: Lôi Trì Phong Ấn · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thừa Lôi Pháp y
Vị trí · phẩm · cảnh giới: Pháp y · Địa · Hóa Thần
Chỉ số hoặc tác dụng: kháng build đối trọng +4% · hồi phục nhận +3%
Nguồn kiếm: Lôi Trì Phong Ấn · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thừa Lôi Quan
Vị trí · phẩm · cảnh giới: Đầu · Địa · Hóa Thần
Chỉ số hoặc tác dụng: kháng khống chế +4% · HP phụ +3%
Nguồn kiếm: Lôi Trì Phong Ấn · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thừa Lôi Hộ oản
Vị trí · phẩm · cảnh giới: Hộ oản · Địa · Hóa Thần
Chỉ số hoặc tác dụng: xuyên giáp +2 điểm · hồi linh lực +3%
Nguồn kiếm: Lôi Trì Phong Ấn · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thừa Lôi Đai
Vị trí · phẩm · cảnh giới: Đai · Địa · Hóa Thần
Chỉ số hoặc tác dụng: kháng DOT +4% · linh lực tối đa +4%
Nguồn kiếm: Lôi Trì Phong Ấn · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thừa Lôi Ngoa
Vị trí · phẩm · cảnh giới: Giày · Địa · Hóa Thần
Chỉ số hoặc tác dụng: né +2 điểm · kháng chậm +5%
Nguồn kiếm: Lôi Trì Phong Ấn · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thừa Lôi Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Địa · Hóa Thần
Chỉ số hoặc tác dụng: giảm tiêu linh lực +2% · bạo kích +2 điểm
Nguồn kiếm: Lôi Trì Phong Ấn · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thừa Lôi Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Địa · Hóa Thần
Chỉ số hoặc tác dụng: giá trị khiên +3% · kháng hồn +4%
Nguồn kiếm: Lôi Trì Phong Ấn · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Huyền Cốt

Trang bị: Huyền Cốt Quyền Sáo
Vị trí · phẩm · cảnh giới: Vũ khí · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: bạo kích +2 điểm · chính xác +2 điểm
Nguồn kiếm: Huyền Cốt Động · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Huyền Cốt Pháp y
Vị trí · phẩm · cảnh giới: Pháp y · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: kháng build đối trọng +4% · hồi phục nhận +3%
Nguồn kiếm: Huyền Cốt Động · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Huyền Cốt Quan
Vị trí · phẩm · cảnh giới: Đầu · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: kháng khống chế +4% · HP phụ +3%
Nguồn kiếm: Huyền Cốt Động · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Huyền Cốt Hộ oản
Vị trí · phẩm · cảnh giới: Hộ oản · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: xuyên giáp +2 điểm · hồi linh lực +3%
Nguồn kiếm: Huyền Cốt Động · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Huyền Cốt Đai
Vị trí · phẩm · cảnh giới: Đai · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: kháng DOT +4% · linh lực tối đa +4%
Nguồn kiếm: Huyền Cốt Động · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Huyền Cốt Ngoa
Vị trí · phẩm · cảnh giới: Giày · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: né +2 điểm · kháng chậm +5%
Nguồn kiếm: Huyền Cốt Động · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Huyền Cốt Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: giảm tiêu linh lực +2% · bạo kích +2 điểm
Nguồn kiếm: Huyền Cốt Động · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Huyền Cốt Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: giá trị khiên +3% · kháng hồn +4%
Nguồn kiếm: Huyền Cốt Động · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Tịch Hồn

Trang bị: Tịch Hồn Phiên
Vị trí · phẩm · cảnh giới: Vũ khí · Địa · Anh Biến
Chỉ số hoặc tác dụng: bạo kích +2 điểm · chính xác +2 điểm
Nguồn kiếm: U Đăng Cổ Các · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tịch Hồn Pháp y
Vị trí · phẩm · cảnh giới: Pháp y · Địa · Anh Biến
Chỉ số hoặc tác dụng: kháng build đối trọng +4% · hồi phục nhận +3%
Nguồn kiếm: U Đăng Cổ Các · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tịch Hồn Quan
Vị trí · phẩm · cảnh giới: Đầu · Địa · Anh Biến
Chỉ số hoặc tác dụng: kháng khống chế +4% · HP phụ +3%
Nguồn kiếm: U Đăng Cổ Các · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tịch Hồn Hộ oản
Vị trí · phẩm · cảnh giới: Hộ oản · Địa · Anh Biến
Chỉ số hoặc tác dụng: xuyên giáp +2 điểm · hồi linh lực +3%
Nguồn kiếm: U Đăng Cổ Các · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tịch Hồn Đai
Vị trí · phẩm · cảnh giới: Đai · Địa · Anh Biến
Chỉ số hoặc tác dụng: kháng DOT +4% · linh lực tối đa +4%
Nguồn kiếm: U Đăng Cổ Các · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tịch Hồn Ngoa
Vị trí · phẩm · cảnh giới: Giày · Địa · Anh Biến
Chỉ số hoặc tác dụng: né +2 điểm · kháng chậm +5%
Nguồn kiếm: U Đăng Cổ Các · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tịch Hồn Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Địa · Anh Biến
Chỉ số hoặc tác dụng: giảm tiêu linh lực +2% · bạo kích +2 điểm
Nguồn kiếm: U Đăng Cổ Các · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Tịch Hồn Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Địa · Anh Biến
Chỉ số hoặc tác dụng: giá trị khiên +3% · kháng hồn +4%
Nguồn kiếm: U Đăng Cổ Các · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Thiên Văn

Trang bị: Thiên Văn Trận Bàn
Vị trí · phẩm · cảnh giới: Vũ khí · Thiên · Vấn Đỉnh
Chỉ số hoặc tác dụng: bạo kích +2 điểm · chính xác +2 điểm
Nguồn kiếm: Vạn Cấm Lưu Lang · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thiên Văn Pháp y
Vị trí · phẩm · cảnh giới: Pháp y · Thiên · Vấn Đỉnh
Chỉ số hoặc tác dụng: kháng build đối trọng +4% · hồi phục nhận +3%
Nguồn kiếm: Vạn Cấm Lưu Lang · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thiên Văn Quan
Vị trí · phẩm · cảnh giới: Đầu · Thiên · Vấn Đỉnh
Chỉ số hoặc tác dụng: kháng khống chế +4% · HP phụ +3%
Nguồn kiếm: Vạn Cấm Lưu Lang · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thiên Văn Hộ oản
Vị trí · phẩm · cảnh giới: Hộ oản · Thiên · Vấn Đỉnh
Chỉ số hoặc tác dụng: xuyên giáp +2 điểm · hồi linh lực +3%
Nguồn kiếm: Vạn Cấm Lưu Lang · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thiên Văn Đai
Vị trí · phẩm · cảnh giới: Đai · Thiên · Vấn Đỉnh
Chỉ số hoặc tác dụng: kháng DOT +4% · linh lực tối đa +4%
Nguồn kiếm: Vạn Cấm Lưu Lang · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thiên Văn Ngoa
Vị trí · phẩm · cảnh giới: Giày · Thiên · Vấn Đỉnh
Chỉ số hoặc tác dụng: né +2 điểm · kháng chậm +5%
Nguồn kiếm: Vạn Cấm Lưu Lang · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thiên Văn Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Thiên · Vấn Đỉnh
Chỉ số hoặc tác dụng: giảm tiêu linh lực +2% · bạo kích +2 điểm
Nguồn kiếm: Vạn Cấm Lưu Lang · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Thiên Văn Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Thiên · Vấn Đỉnh
Chỉ số hoặc tác dụng: giá trị khiên +3% · kháng hồn +4%
Nguồn kiếm: Vạn Cấm Lưu Lang · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Đoạn Giới

Trang bị: Đoạn Giới Kiếm
Vị trí · phẩm · cảnh giới: Vũ khí · Thiên · Khuy Niết
Chỉ số hoặc tác dụng: bạo kích +2 điểm · chính xác +2 điểm
Nguồn kiếm: Đoạn Giới Kiếm Trủng · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Đoạn Giới Pháp y
Vị trí · phẩm · cảnh giới: Pháp y · Thiên · Khuy Niết
Chỉ số hoặc tác dụng: kháng build đối trọng +4% · hồi phục nhận +3%
Nguồn kiếm: Đoạn Giới Kiếm Trủng · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Đoạn Giới Quan
Vị trí · phẩm · cảnh giới: Đầu · Thiên · Khuy Niết
Chỉ số hoặc tác dụng: kháng khống chế +4% · HP phụ +3%
Nguồn kiếm: Đoạn Giới Kiếm Trủng · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Đoạn Giới Hộ oản
Vị trí · phẩm · cảnh giới: Hộ oản · Thiên · Khuy Niết
Chỉ số hoặc tác dụng: xuyên giáp +2 điểm · hồi linh lực +3%
Nguồn kiếm: Đoạn Giới Kiếm Trủng · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Đoạn Giới Đai
Vị trí · phẩm · cảnh giới: Đai · Thiên · Khuy Niết
Chỉ số hoặc tác dụng: kháng DOT +4% · linh lực tối đa +4%
Nguồn kiếm: Đoạn Giới Kiếm Trủng · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Đoạn Giới Ngoa
Vị trí · phẩm · cảnh giới: Giày · Thiên · Khuy Niết
Chỉ số hoặc tác dụng: né +2 điểm · kháng chậm +5%
Nguồn kiếm: Đoạn Giới Kiếm Trủng · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Đoạn Giới Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Thiên · Khuy Niết
Chỉ số hoặc tác dụng: giảm tiêu linh lực +2% · bạo kích +2 điểm
Nguồn kiếm: Đoạn Giới Kiếm Trủng · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Đoạn Giới Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Thiên · Khuy Niết
Chỉ số hoặc tác dụng: giá trị khiên +3% · kháng hồn +4%
Nguồn kiếm: Đoạn Giới Kiếm Trủng · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Táng Lôi

Trang bị: Táng Lôi Chùy
Vị trí · phẩm · cảnh giới: Vũ khí · Tiên · Toái Niết
Chỉ số hoặc tác dụng: bạo kích +2 điểm · chính xác +2 điểm
Nguồn kiếm: Táng Lôi Tinh Uyên · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Táng Lôi Pháp y
Vị trí · phẩm · cảnh giới: Pháp y · Tiên · Toái Niết
Chỉ số hoặc tác dụng: kháng build đối trọng +4% · hồi phục nhận +3%
Nguồn kiếm: Táng Lôi Tinh Uyên · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Táng Lôi Quan
Vị trí · phẩm · cảnh giới: Đầu · Tiên · Toái Niết
Chỉ số hoặc tác dụng: kháng khống chế +4% · HP phụ +3%
Nguồn kiếm: Táng Lôi Tinh Uyên · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Táng Lôi Hộ oản
Vị trí · phẩm · cảnh giới: Hộ oản · Tiên · Toái Niết
Chỉ số hoặc tác dụng: xuyên giáp +2 điểm · hồi linh lực +3%
Nguồn kiếm: Táng Lôi Tinh Uyên · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Táng Lôi Đai
Vị trí · phẩm · cảnh giới: Đai · Tiên · Toái Niết
Chỉ số hoặc tác dụng: kháng DOT +4% · linh lực tối đa +4%
Nguồn kiếm: Táng Lôi Tinh Uyên · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Táng Lôi Ngoa
Vị trí · phẩm · cảnh giới: Giày · Tiên · Toái Niết
Chỉ số hoặc tác dụng: né +2 điểm · kháng chậm +5%
Nguồn kiếm: Táng Lôi Tinh Uyên · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Táng Lôi Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Tiên · Toái Niết
Chỉ số hoặc tác dụng: giảm tiêu linh lực +2% · bạo kích +2 điểm
Nguồn kiếm: Táng Lôi Tinh Uyên · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Táng Lôi Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Tiên · Toái Niết
Chỉ số hoặc tác dụng: giá trị khiên +3% · kháng hồn +4%
Nguồn kiếm: Táng Lôi Tinh Uyên · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Cổ Diệu

Trang bị: Cổ Diệu Chiến Phủ
Vị trí · phẩm · cảnh giới: Vũ khí · Tiên · Không Niết
Chỉ số hoặc tác dụng: bạo kích +2 điểm · chính xác +2 điểm
Nguồn kiếm: Cổ Diệu Phế Thành · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Cổ Diệu Pháp y
Vị trí · phẩm · cảnh giới: Pháp y · Tiên · Không Niết
Chỉ số hoặc tác dụng: kháng build đối trọng +4% · hồi phục nhận +3%
Nguồn kiếm: Cổ Diệu Phế Thành · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Cổ Diệu Quan
Vị trí · phẩm · cảnh giới: Đầu · Tiên · Không Niết
Chỉ số hoặc tác dụng: kháng khống chế +4% · HP phụ +3%
Nguồn kiếm: Cổ Diệu Phế Thành · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Cổ Diệu Hộ oản
Vị trí · phẩm · cảnh giới: Hộ oản · Tiên · Không Niết
Chỉ số hoặc tác dụng: xuyên giáp +2 điểm · hồi linh lực +3%
Nguồn kiếm: Cổ Diệu Phế Thành · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Cổ Diệu Đai
Vị trí · phẩm · cảnh giới: Đai · Tiên · Không Niết
Chỉ số hoặc tác dụng: kháng DOT +4% · linh lực tối đa +4%
Nguồn kiếm: Cổ Diệu Phế Thành · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Cổ Diệu Ngoa
Vị trí · phẩm · cảnh giới: Giày · Tiên · Không Niết
Chỉ số hoặc tác dụng: né +2 điểm · kháng chậm +5%
Nguồn kiếm: Cổ Diệu Phế Thành · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Cổ Diệu Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Tiên · Không Niết
Chỉ số hoặc tác dụng: giảm tiêu linh lực +2% · bạo kích +2 điểm
Nguồn kiếm: Cổ Diệu Phế Thành · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Cổ Diệu Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Tiên · Không Niết
Chỉ số hoặc tác dụng: giá trị khiên +3% · kháng hồn +4%
Nguồn kiếm: Cổ Diệu Phế Thành · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Vô Sinh

Trang bị: Vô Sinh Hồn Linh
Vị trí · phẩm · cảnh giới: Vũ khí · Tiên · Không Linh
Chỉ số hoặc tác dụng: bạo kích +2 điểm · chính xác +2 điểm
Nguồn kiếm: Vô Sinh Mộng Vực · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Vô Sinh Pháp y
Vị trí · phẩm · cảnh giới: Pháp y · Tiên · Không Linh
Chỉ số hoặc tác dụng: kháng build đối trọng +4% · hồi phục nhận +3%
Nguồn kiếm: Vô Sinh Mộng Vực · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Vô Sinh Quan
Vị trí · phẩm · cảnh giới: Đầu · Tiên · Không Linh
Chỉ số hoặc tác dụng: kháng khống chế +4% · HP phụ +3%
Nguồn kiếm: Vô Sinh Mộng Vực · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Vô Sinh Hộ oản
Vị trí · phẩm · cảnh giới: Hộ oản · Tiên · Không Linh
Chỉ số hoặc tác dụng: xuyên giáp +2 điểm · hồi linh lực +3%
Nguồn kiếm: Vô Sinh Mộng Vực · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Vô Sinh Đai
Vị trí · phẩm · cảnh giới: Đai · Tiên · Không Linh
Chỉ số hoặc tác dụng: kháng DOT +4% · linh lực tối đa +4%
Nguồn kiếm: Vô Sinh Mộng Vực · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Vô Sinh Ngoa
Vị trí · phẩm · cảnh giới: Giày · Tiên · Không Linh
Chỉ số hoặc tác dụng: né +2 điểm · kháng chậm +5%
Nguồn kiếm: Vô Sinh Mộng Vực · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Vô Sinh Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Tiên · Không Linh
Chỉ số hoặc tác dụng: giảm tiêu linh lực +2% · bạo kích +2 điểm
Nguồn kiếm: Vô Sinh Mộng Vực · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Vô Sinh Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Tiên · Không Linh
Chỉ số hoặc tác dụng: giá trị khiên +3% · kháng hồn +4%
Nguồn kiếm: Vô Sinh Mộng Vực · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Quy Tắc

Trang bị: Quy Tắc Cấm Xích
Vị trí · phẩm · cảnh giới: Vũ khí · Đạo · Không Huyền
Chỉ số hoặc tác dụng: bạo kích +2 điểm · chính xác +2 điểm
Nguồn kiếm: Quy Tắc Thiên Cung · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Quy Tắc Pháp y
Vị trí · phẩm · cảnh giới: Pháp y · Đạo · Không Huyền
Chỉ số hoặc tác dụng: kháng build đối trọng +4% · hồi phục nhận +3%
Nguồn kiếm: Quy Tắc Thiên Cung · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Quy Tắc Quan
Vị trí · phẩm · cảnh giới: Đầu · Đạo · Không Huyền
Chỉ số hoặc tác dụng: kháng khống chế +4% · HP phụ +3%
Nguồn kiếm: Quy Tắc Thiên Cung · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Quy Tắc Hộ oản
Vị trí · phẩm · cảnh giới: Hộ oản · Đạo · Không Huyền
Chỉ số hoặc tác dụng: xuyên giáp +2 điểm · hồi linh lực +3%
Nguồn kiếm: Quy Tắc Thiên Cung · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Quy Tắc Đai
Vị trí · phẩm · cảnh giới: Đai · Đạo · Không Huyền
Chỉ số hoặc tác dụng: kháng DOT +4% · linh lực tối đa +4%
Nguồn kiếm: Quy Tắc Thiên Cung · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Quy Tắc Ngoa
Vị trí · phẩm · cảnh giới: Giày · Đạo · Không Huyền
Chỉ số hoặc tác dụng: né +2 điểm · kháng chậm +5%
Nguồn kiếm: Quy Tắc Thiên Cung · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Quy Tắc Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Đạo · Không Huyền
Chỉ số hoặc tác dụng: giảm tiêu linh lực +2% · bạo kích +2 điểm
Nguồn kiếm: Quy Tắc Thiên Cung · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Trang bị: Quy Tắc Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Đạo · Không Huyền
Chỉ số hoặc tác dụng: giá trị khiên +3% · kháng hồn +4%
Nguồn kiếm: Quy Tắc Thiên Cung · đổi 60 ấn bí cảnh cá nhân chọn đúng vị trí · rơi theo trọng số khi vượt bí cảnh

Hai mươi trang bị đặc trưng

Trang bị: Tàn Huyết Ma Kiếm
Vị trí · phẩm · cảnh giới: Vũ khí · Địa · Nguyên Anh
Chỉ số hoặc tác dụng: tiêu 3% HP hiện có để đòn thường thứ 3 thêm 120% A · không thể tự giảm dưới 15% H · hồi nội 10 s
Nguồn kiếm: Hắc Hà Khế Ngục · 120 ấn bí cảnh chọn món · boss bản đồ Mạch Ngọc Tà Khôi có mảnh phụ

Trang bị: Hắc Khế Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Địa · Nguyên Anh
Chỉ số hoặc tác dụng: dùng skill Hồn Khế giảm 4 ma chướng/12 s
Nguồn kiếm: Hắc Hà Khế Ngục · 120 ấn bí cảnh chọn món · boss bản đồ Lôi Môn Cổ Vệ có mảnh phụ

Trang bị: Nghịch Mạch Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Địa · Hóa Thần
Chỉ số hoặc tác dụng: khi ma chướng từ 40 lên 70 cho khiên 6% H/20 s
Nguồn kiếm: Hắc Hà Khế Ngục · 120 ấn bí cảnh chọn món · boss bản đồ Mộng Trạch Họa Yêu có mảnh phụ

Trang bị: Trấn Ma Quan
Vị trí · phẩm · cảnh giới: Đầu · Địa · Hóa Thần
Chỉ số hoặc tác dụng: tâm ma phản phệ giảm thời lượng 1 s, không xóa rủi ro
Nguồn kiếm: Hắc Hà Khế Ngục · 120 ấn bí cảnh chọn món · boss bản đồ Tiên Tủy Hoang Khôi có mảnh phụ

Trang bị: Phệ Sát Hộ Oản
Vị trí · phẩm · cảnh giới: Hộ oản · Thiên · Anh Biến
Chỉ số hoặc tác dụng: tiêu sát ấn hồi 3 linh lực, hồi nội 8 s
Nguồn kiếm: Hắc Hà Khế Ngục · 120 ấn bí cảnh chọn món · boss bản đồ Đoạn Cấm Kiếm Sứ có mảnh phụ

Trang bị: Hắc Hà Pháp Y
Vị trí · phẩm · cảnh giới: Pháp y · Thiên · Vấn Đỉnh
Chỉ số hoặc tác dụng: bị hồn DOT giảm 1 tầng tối đa/20 s
Nguồn kiếm: Hắc Hà Khế Ngục · 120 ấn bí cảnh chọn món · boss bản đồ Âm Hà Chấp Đăng có mảnh phụ

Trang bị: Nghịch Tức Ngoa
Vị trí · phẩm · cảnh giới: Giày · Thiên · Khuy Niết
Chỉ số hoặc tác dụng: sau phản phệ né+6 điểm 4 s, hồi nội 20 s
Nguồn kiếm: Hắc Hà Khế Ngục · 120 ấn bí cảnh chọn món · boss bản đồ Dương Cực Thạch Quân có mảnh phụ

Trang bị: Vạn Khế Ma Đai
Vị trí · phẩm · cảnh giới: Đai · Tiên · Tịnh Niết
Chỉ số hoặc tác dụng: mỗi trận một lần giữ 10 ma chướng khi chủ động tịnh tâm, cho hồi 5% H
Nguồn kiếm: Hắc Hà Khế Ngục · 120 ấn bí cảnh chọn món · boss bản đồ Khuy Giới Tinh Chu có mảnh phụ

Trang bị: Tịch Huyết Hồn Trượng
Vị trí · phẩm · cảnh giới: Vũ khí · Tiên · Không Niết
Chỉ số hoặc tác dụng: ma skill trên mục tiêu suy hồn thêm 180% A/18 s
Nguồn kiếm: Hắc Hà Khế Ngục · 120 ấn bí cảnh chọn món · boss bản đồ Tịnh Nguyên Huyền Điểu có mảnh phụ

Trang bị: Tự Chủ Đạo Giới
Vị trí · phẩm · cảnh giới: Nhẫn · Đạo · Không Huyền
Chỉ số hoặc tác dụng: khi ma chướng dưới 70, giảm hồi chiêu Tĩnh Tâm 3 s · không cộng giảm hồi hai lần
Nguồn kiếm: Hắc Hà Khế Ngục · 120 ấn bí cảnh chọn món · boss bản đồ Toái Giới Thiết Ngưu có mảnh phụ

Trang bị: Cổ Cốt Phá Thiên Chùy
Vị trí · phẩm · cảnh giới: Vũ khí · Huyền · Nguyên Anh
Chỉ số hoặc tác dụng: đòn quyền thứ 4 +15 break/12 s
Nguồn kiếm: Quy Nguyên Chứng Đài · 120 ấn bí cảnh chọn món · boss bản đồ Không Phách Cấm Tượng có mảnh phụ

Trang bị: Tinh Mạch Chiến Oản
Vị trí · phẩm · cảnh giới: Hộ oản · Địa · Hóa Thần
Chỉ số hoặc tác dụng: khiên tự tạo tăng 5% giá trị, tối đa thêm 3% H
Nguồn kiếm: Quy Nguyên Chứng Đài · 120 ấn bí cảnh chọn món · boss bản đồ Huyền Tâm Giới Hầu có mảnh phụ

Trang bị: Vạn Trọng Cốt Đai
Vị trí · phẩm · cảnh giới: Đai · Thiên · Vấn Đỉnh
Chỉ số hoặc tác dụng: bị đẩy lùi nhận 10% giảm sát thương 2 s/15 s
Nguồn kiếm: Quy Nguyên Chứng Đài · 120 ấn bí cảnh chọn món · boss bản đồ Mạch Ngọc Tà Khôi có mảnh phụ

Trang bị: Cổ Tâm Huyền Bội
Vị trí · phẩm · cảnh giới: Ngọc bội · Tiên · Toái Niết
Chỉ số hoặc tác dụng: phá tư thế hồi 5% H/18 s
Nguồn kiếm: Quy Nguyên Chứng Đài · 120 ấn bí cảnh chọn món · boss bản đồ Lôi Môn Cổ Vệ có mảnh phụ

Trang bị: Tinh Khung Chiến Phủ
Vị trí · phẩm · cảnh giới: Vũ khí · Đạo · Không Kiếp
Chỉ số hoặc tác dụng: đánh boss vừa đổi pha thêm 320% A/30 s
Nguồn kiếm: Quy Nguyên Chứng Đài · 120 ấn bí cảnh chọn món · boss bản đồ Mộng Trạch Họa Yêu có mảnh phụ

Trang bị: Tàn Dạ Đạo Kiếm
Vị trí · phẩm · cảnh giới: Vũ khí · Đạo · Không Kiếp
Chỉ số hoặc tác dụng: sau 2 lần dùng kỹ năng khác tên, kiếm kế thêm 250% A/24 s
Nguồn kiếm: Quy Nguyên Chứng Đài · 120 ấn bí cảnh chọn món · boss bản đồ Tiên Tủy Hoang Khôi có mảnh phụ

Trang bị: Cửu Lôi Thiên Quan
Vị trí · phẩm · cảnh giới: Đầu · Đạo · Không Huyền
Chỉ số hoặc tác dụng: lôi ấn đủ 3 ngăn một debuff thường/25 s
Nguồn kiếm: Quy Nguyên Chứng Đài · 120 ấn bí cảnh chọn món · boss bản đồ Đoạn Cấm Kiếm Sứ có mảnh phụ

Trang bị: Vạn Hồn Ngọc Linh
Vị trí · phẩm · cảnh giới: Ngọc bội · Đạo · Không Kiếp
Chỉ số hoặc tác dụng: địch không có hồn ấn: tạo 1 ấn/10 s, không cần giết lính
Nguồn kiếm: Quy Nguyên Chứng Đài · 120 ấn bí cảnh chọn món · boss bản đồ Âm Hà Chấp Đăng có mảnh phụ

Trang bị: Thiên Cấm Đạo Ngoa
Vị trí · phẩm · cảnh giới: Giày · Đạo · Không Huyền
Chỉ số hoặc tác dụng: đang dựng trận giảm 8% sát thương 2 s/16 s
Nguồn kiếm: Quy Nguyên Chứng Đài · 120 ấn bí cảnh chọn món · boss bản đồ Dương Cực Thạch Quân có mảnh phụ

Trang bị: Quy Nhất Pháp Y
Vị trí · phẩm · cảnh giới: Pháp y · Đạo · Không Kiếp
Chỉ số hoặc tác dụng: dùng 3 loại kỹ năng khác tag: hồi 6 linh lực và 4% H/24 s
Nguồn kiếm: Quy Nguyên Chứng Đài · 120 ấn bí cảnh chọn món · boss bản đồ Khuy Giới Tinh Chu có mảnh phụ

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Linh điền, khai khoáng và 62 nguyên liệu

Tài liệu thiết kế · Mở rộng V2

Sáu sinh cảnh trồng dược liệu xuất hiện dần theo cảnh giới. Hái dược hoặc khai khoáng chiếm hoạt động chính. Công việc đã đặt trong linh điền và hàng chế tạo có thời điểm hoàn tất riêng.

Sáu sinh cảnh

Sinh cảnh: Thổ dưỡng
Cảnh giới: Trúc Cơ
Số ô tối đa: 4
Công thức mở: Mở cùng linh điền

Sinh cảnh: Hàn tuyền
Cảnh giới: Nguyên Anh
Số ô tối đa: 4
Công thức mở: Hàn Tuyền Tưới Gốc

Sinh cảnh: Lôi trì
Cảnh giới: Hóa Thần
Số ô tối đa: 4
Công thức mở: Lôi Trì Dẫn Mạch Thạch

Sinh cảnh: Âm viên
Cảnh giới: Anh Biến
Số ô tối đa: 4
Công thức mở: Âm Viên Tịnh Vụ Đăng

Sinh cảnh: Dương viên
Cảnh giới: Nguyên Anh
Số ô tối đa: 4
Công thức mở: Dương Viên Tụ Nhật Thạch

Sinh cảnh: Hư viên
Cảnh giới: Khuy Niết
Số ô tối đa: 4
Công thức mở: Hư Viên Định Giới Trụ

Hai mươi bốn dược liệu

Dược liệu: Thanh Tủy Thảo
Sinh cảnh · cảnh giới: Thổ dưỡng · Trúc Cơ
Thời gian: 2 giờ
Sản lượng: 4
Công dụng: bổ linh

Dược liệu: Ngọc Tâm Chi
Sinh cảnh · cảnh giới: Thổ dưỡng · Kết Đan
Thời gian: 4 giờ
Sản lượng: 5
Công dụng: ổn định

Dược liệu: Hoàng Cốt Căn
Sinh cảnh · cảnh giới: Thổ dưỡng · Nguyên Anh
Thời gian: 6 giờ
Sản lượng: 6
Công dụng: luyện thể

Dược liệu: Thạch Huyết Đằng
Sinh cảnh · cảnh giới: Thổ dưỡng · Hóa Thần
Thời gian: 8 giờ
Sản lượng: 6
Công dụng: ma tu có kiểm soát

Dược liệu: Lôi Tuệ Hoa
Sinh cảnh · cảnh giới: Lôi trì · Hóa Thần
Thời gian: 4 giờ
Sản lượng: 4
Công dụng: chống lôi

Dược liệu: Tử Điện Diệp
Sinh cảnh · cảnh giới: Lôi trì · Anh Biến
Thời gian: 6 giờ
Sản lượng: 5
Công dụng: linh lực

Dược liệu: Minh Lôi Quả
Sinh cảnh · cảnh giới: Lôi trì · Khuy Niết
Thời gian: 10 giờ
Sản lượng: 6
Công dụng: lôi pháp

Dược liệu: Tịch Lôi Liên
Sinh cảnh · cảnh giới: Lôi trì · Không Niết
Thời gian: 16 giờ
Sản lượng: 7
Công dụng: kiếp cao

Dược liệu: Hàn Phách Lan
Sinh cảnh · cảnh giới: Hàn tuyền · Nguyên Anh
Thời gian: 4 giờ
Sản lượng: 4
Công dụng: thanh tẩy

Dược liệu: Băng Tâm Quả
Sinh cảnh · cảnh giới: Hàn tuyền · Hóa Thần
Thời gian: 6 giờ
Sản lượng: 5
Công dụng: tịnh tâm

Dược liệu: Nguyệt Hoa Chi
Sinh cảnh · cảnh giới: Hàn tuyền · Vấn Đỉnh
Thời gian: 10 giờ
Sản lượng: 6
Công dụng: cảm ngộ

Dược liệu: Huyền Sương Liên
Sinh cảnh · cảnh giới: Hàn tuyền · Không Linh
Thời gian: 18 giờ
Sản lượng: 7
Công dụng: ổn hồn

Dược liệu: U Hồn Thảo
Sinh cảnh · cảnh giới: Âm viên · Anh Biến
Thời gian: 6 giờ
Sản lượng: 4
Công dụng: hồn tu

Dược liệu: Vong Ưu Hoa
Sinh cảnh · cảnh giới: Âm viên · Vấn Đỉnh
Thời gian: 8 giờ
Sản lượng: 5
Công dụng: chướng niệm

Dược liệu: Dạ Mộng Quả
Sinh cảnh · cảnh giới: Âm viên · Tịnh Niết
Thời gian: 12 giờ
Sản lượng: 6
Công dụng: chân giả

Dược liệu: Tịch Niệm Liên
Sinh cảnh · cảnh giới: Âm viên · Không Huyền
Thời gian: 20 giờ
Sản lượng: 7
Công dụng: ý cảnh

Dược liệu: Xích Dương Sâm
Sinh cảnh · cảnh giới: Dương viên · Nguyên Anh
Thời gian: 5 giờ
Sản lượng: 4
Công dụng: tu vi

Dược liệu: Tinh Hỏa Chi
Sinh cảnh · cảnh giới: Dương viên · Anh Biến
Thời gian: 8 giờ
Sản lượng: 5
Công dụng: chuyển linh

Dược liệu: Cổ Dương Quả
Sinh cảnh · cảnh giới: Dương viên · Toái Niết
Thời gian: 14 giờ
Sản lượng: 6
Công dụng: cổ huyết

Dược liệu: Chứng Đạo Hoa
Sinh cảnh · cảnh giới: Dương viên · Không Kiếp
Thời gian: 24 giờ
Sản lượng: 8
Công dụng: chứng đạo

Dược liệu: Hư Linh Mộc
Sinh cảnh · cảnh giới: Hư viên · Khuy Niết
Thời gian: 12 giờ
Sản lượng: 5
Công dụng: bản nguyên

Dược liệu: Toái Tinh Liên
Sinh cảnh · cảnh giới: Hư viên · Toái Niết
Thời gian: 16 giờ
Sản lượng: 6
Công dụng: pháp bảo

Dược liệu: Nguyên Sơ Chi
Sinh cảnh · cảnh giới: Hư viên · Không Huyền
Thời gian: 24 giờ
Sản lượng: 7
Công dụng: nguyên lực

Dược liệu: Giới Tâm Quả
Sinh cảnh · cảnh giới: Hư viên · Không Kiếp
Thời gian: 30 giờ
Sản lượng: 8
Công dụng: giới khế

Mười mỏ và công vụ tinh chất

Mỏ: Vân Thạch Sơn
Mốc mở: Trúc Cơ
Sản lượng khoáng: khai khoáng là một hoạt động chính, 2 khoáng mỗi 10 phút
Công vụ: Khảo chứng Vân Thạch Sơn: 1 trận chuẩn hóa theo realm, thưởng 4 tinh chất bậc 1 · chung 3 lượt công vụ/ngày, không cần đã mở khu săn cao hơn

Mỏ: Hàn Vụ Cốc
Mốc mở: Kết Đan
Sản lượng khoáng: khai khoáng là một hoạt động chính, 2 khoáng mỗi 10 phút
Công vụ: Khảo chứng Hàn Vụ Cốc: 1 trận chuẩn hóa theo realm, thưởng 4 tinh chất bậc 2 · chung 3 lượt công vụ/ngày, không cần đã mở khu săn cao hơn

Mỏ: U Minh Ngọc Mạch
Mốc mở: Nguyên Anh
Sản lượng khoáng: khai khoáng là một hoạt động chính, 2 khoáng mỗi 10 phút
Công vụ: Khảo chứng U Minh Ngọc Mạch: 1 trận chuẩn hóa theo realm, thưởng 4 tinh chất bậc 3 · chung 3 lượt công vụ/ngày, không cần đã mở khu săn cao hơn

Mỏ: Phàm Tâm Dược Khê
Mốc mở: Hóa Thần
Sản lượng khoáng: khai khoáng là một hoạt động chính, 2 khoáng mỗi 10 phút
Công vụ: Khảo chứng Phàm Tâm Dược Khê: 1 trận chuẩn hóa theo realm, thưởng 4 tinh chất bậc 4 · chung 3 lượt công vụ/ngày, không cần đã mở khu săn cao hơn

Mỏ: Tiên Tức Cổ Khư
Mốc mở: Anh Biến
Sản lượng khoáng: khai khoáng là một hoạt động chính, 2 khoáng mỗi 10 phút
Công vụ: Khảo chứng Tiên Tức Cổ Khư: 1 trận chuẩn hóa theo realm, thưởng 4 tinh chất bậc 5 · chung 3 lượt công vụ/ngày, không cần đã mở khu săn cao hơn

Mỏ: Âm Dương Hắc Hà
Mốc mở: Âm Hư
Sản lượng khoáng: khai khoáng là một hoạt động chính, 2 khoáng mỗi 10 phút
Công vụ: Khảo chứng Âm Dương Hắc Hà: 1 trận chuẩn hóa theo realm, thưởng 4 tinh chất bậc 6 · chung 3 lượt công vụ/ngày, không cần đã mở khu săn cao hơn

Mỏ: Tịnh Niết Tinh Hà
Mốc mở: Tịnh Niết
Sản lượng khoáng: khai khoáng là một hoạt động chính, 2 khoáng mỗi 10 phút
Công vụ: Khảo chứng Tịnh Niết Tinh Hà: 1 trận chuẩn hóa theo realm, thưởng 4 tinh chất bậc 7 · chung 3 lượt công vụ/ngày, không cần đã mở khu săn cao hơn

Mỏ: Không Tâm Phế Thành
Mốc mở: Không Niết
Sản lượng khoáng: khai khoáng là một hoạt động chính, 2 khoáng mỗi 10 phút
Công vụ: Khảo chứng Không Tâm Phế Thành: 1 trận chuẩn hóa theo realm, thưởng 4 tinh chất bậc 8 · chung 3 lượt công vụ/ngày, không cần đã mở khu săn cao hơn

Mỏ: Không Linh Khuy Thiên Đài
Mốc mở: Không Linh
Sản lượng khoáng: khai khoáng là một hoạt động chính, 2 khoáng mỗi 10 phút
Công vụ: Khảo chứng Không Linh Khuy Thiên Đài: 1 trận chuẩn hóa theo realm, thưởng 4 tinh chất bậc 9 · chung 3 lượt công vụ/ngày, không cần đã mở khu săn cao hơn

Mỏ: Giới Nguyên Chứng Đài
Mốc mở: Không Kiếp
Sản lượng khoáng: khai khoáng là một hoạt động chính, 2 khoáng mỗi 10 phút
Công vụ: Khảo chứng Giới Nguyên Chứng Đài: 1 trận chuẩn hóa theo realm, thưởng 4 tinh chất bậc 10 · chung 3 lượt công vụ/ngày, không cần đã mở khu săn cao hơn

Vật liệu nghề, tinh luyện và mảnh pháp bảo

Tên: Thanh Thiết Tinh
Bậc: 1
Nguồn kiếm: Vân Thạch Sơn — Vân Thạch Sơn, mở Trúc Cơ: 2 mỗi chu kỳ 10 phút hoạt động chính · Bích Khê Thú Cốc là nguồn phụ khi đã đủ điều kiện khu săn

Tên: Hàn Văn Đồng
Bậc: 2
Nguồn kiếm: Hàn Vụ Cốc — Hàn Vụ Cốc, mở Kết Đan: 2 mỗi chu kỳ 10 phút hoạt động chính · Hàn Diệm Song Giản là nguồn phụ khi đã đủ điều kiện khu săn

Tên: Nguyên Tủy Ngọc
Bậc: 3
Nguồn kiếm: U Minh Ngọc Mạch — U Minh Ngọc Mạch, mở Nguyên Anh: 2 mỗi chu kỳ 10 phút hoạt động chính · Táng Tinh Thú Uyên là nguồn phụ khi đã đủ điều kiện khu săn

Tên: Hóa Linh Kim
Bậc: 4
Nguồn kiếm: Phàm Tâm Dược Khê — Phàm Tâm Dược Khê, mở Hóa Thần: 2 mỗi chu kỳ 10 phút hoạt động chính · Phàm Tâm Linh Trạch là nguồn phụ khi đã đủ điều kiện khu săn

Tên: Tiên Tức Sa
Bậc: 5
Nguồn kiếm: Tiên Tức Cổ Khư — Tiên Tức Cổ Khư, mở Anh Biến: 2 mỗi chu kỳ 10 phút hoạt động chính · Vạn Cấm Thú Sơn là nguồn phụ khi đã đủ điều kiện khu săn

Tên: Khuy Giới Thạch
Bậc: 6
Nguồn kiếm: Âm Dương Hắc Hà — Âm Dương Hắc Hà, mở Âm Hư: 2 mỗi chu kỳ 10 phút hoạt động chính · Lạc Tinh Hoang Giới là nguồn phụ khi đã đủ điều kiện khu săn

Tên: Toái Niết Tinh
Bậc: 7
Nguồn kiếm: Tịnh Niết Tinh Hà — Tịnh Niết Tinh Hà, mở Tịnh Niết: 2 mỗi chu kỳ 10 phút hoạt động chính · Nghịch Hải Cổ Đàm là nguồn phụ khi đã đủ điều kiện khu săn

Tên: Không Tâm Ngọc
Bậc: 8
Nguồn kiếm: Không Tâm Phế Thành — Không Tâm Phế Thành, mở Không Niết: 2 mỗi chu kỳ 10 phút hoạt động chính · Hư Không Dưỡng Linh Đài là nguồn phụ khi đã đủ điều kiện khu săn

Tên: Huyền Kiếp Kim
Bậc: 9
Nguồn kiếm: Không Linh Khuy Thiên Đài — Không Linh Khuy Thiên Đài, mở Không Linh: 2 mỗi chu kỳ 10 phút hoạt động chính · Luân Hồi Vạn Thú Đồ là nguồn phụ khi đã đủ điều kiện khu săn

Tên: Giới Nguyên Thạch
Bậc: 10
Nguồn kiếm: Giới Nguyên Chứng Đài — Giới Nguyên Chứng Đài, mở Không Kiếp: 2 mỗi chu kỳ 10 phút hoạt động chính · Thái Sơ Thú Vực là nguồn phụ khi đã đủ điều kiện khu săn

Tên: Tinh chất khu bậc 1
Bậc: 1
Nguồn kiếm: công vụ Khảo chứng tại Vân Thạch Sơn: 4/lượt, chung 3 lượt/ngày · guardian Bích Khê Thú Cốc: 3/lượt · bí cảnh cùng bậc: 5/lượt

Tên: Tinh luyện thạch bậc 1
Bậc: 1
Nguồn kiếm: phân giải đồ bậc 1 · bí cảnh cùng bậc 8/lượt · cửa hàng nghề mở Trúc Cơ, 10 viên giá 1 U(1)

Tên: Tinh chất khu bậc 2
Bậc: 2
Nguồn kiếm: công vụ Khảo chứng tại Hàn Vụ Cốc: 4/lượt, chung 3 lượt/ngày · guardian Hàn Diệm Song Giản: 3/lượt · bí cảnh cùng bậc: 5/lượt

Tên: Tinh luyện thạch bậc 2
Bậc: 2
Nguồn kiếm: phân giải đồ bậc 2 · bí cảnh cùng bậc 8/lượt · cửa hàng nghề mở Kết Đan, 10 viên giá 1 U(2)

Tên: Tinh chất khu bậc 3
Bậc: 3
Nguồn kiếm: công vụ Khảo chứng tại U Minh Ngọc Mạch: 4/lượt, chung 3 lượt/ngày · guardian Táng Tinh Thú Uyên: 3/lượt · bí cảnh cùng bậc: 5/lượt

Tên: Tinh luyện thạch bậc 3
Bậc: 3
Nguồn kiếm: phân giải đồ bậc 3 · bí cảnh cùng bậc 8/lượt · cửa hàng nghề mở Nguyên Anh, 10 viên giá 1 U(3)

Tên: Tinh chất khu bậc 4
Bậc: 4
Nguồn kiếm: công vụ Khảo chứng tại Phàm Tâm Dược Khê: 4/lượt, chung 3 lượt/ngày · guardian Phàm Tâm Linh Trạch: 3/lượt · bí cảnh cùng bậc: 5/lượt

Tên: Tinh luyện thạch bậc 4
Bậc: 4
Nguồn kiếm: phân giải đồ bậc 4 · bí cảnh cùng bậc 8/lượt · cửa hàng nghề mở Hóa Thần, 10 viên giá 1 U(4)

Tên: Tinh chất khu bậc 5
Bậc: 5
Nguồn kiếm: công vụ Khảo chứng tại Tiên Tức Cổ Khư: 4/lượt, chung 3 lượt/ngày · guardian Vạn Cấm Thú Sơn: 3/lượt · bí cảnh cùng bậc: 5/lượt

Tên: Tinh luyện thạch bậc 5
Bậc: 5
Nguồn kiếm: phân giải đồ bậc 5 · bí cảnh cùng bậc 8/lượt · cửa hàng nghề mở Anh Biến, 10 viên giá 1 U(5)

Tên: Tinh chất khu bậc 6
Bậc: 6
Nguồn kiếm: công vụ Khảo chứng tại Âm Dương Hắc Hà: 4/lượt, chung 3 lượt/ngày · guardian Lạc Tinh Hoang Giới: 3/lượt · bí cảnh cùng bậc: 5/lượt

Tên: Tinh luyện thạch bậc 6
Bậc: 6
Nguồn kiếm: phân giải đồ bậc 6 · bí cảnh cùng bậc 8/lượt · cửa hàng nghề mở Âm Hư, 10 viên giá 1 U(6)

Tên: Tinh chất khu bậc 7
Bậc: 7
Nguồn kiếm: công vụ Khảo chứng tại Tịnh Niết Tinh Hà: 4/lượt, chung 3 lượt/ngày · guardian Nghịch Hải Cổ Đàm: 3/lượt · bí cảnh cùng bậc: 5/lượt

Tên: Tinh luyện thạch bậc 7
Bậc: 7
Nguồn kiếm: phân giải đồ bậc 7 · bí cảnh cùng bậc 8/lượt · cửa hàng nghề mở Tịnh Niết, 10 viên giá 1 U(7)

Tên: Tinh chất khu bậc 8
Bậc: 8
Nguồn kiếm: công vụ Khảo chứng tại Không Tâm Phế Thành: 4/lượt, chung 3 lượt/ngày · guardian Hư Không Dưỡng Linh Đài: 3/lượt · bí cảnh cùng bậc: 5/lượt

Tên: Tinh luyện thạch bậc 8
Bậc: 8
Nguồn kiếm: phân giải đồ bậc 8 · bí cảnh cùng bậc 8/lượt · cửa hàng nghề mở Không Niết, 10 viên giá 1 U(8)

Tên: Tinh chất khu bậc 9
Bậc: 9
Nguồn kiếm: công vụ Khảo chứng tại Không Linh Khuy Thiên Đài: 4/lượt, chung 3 lượt/ngày · guardian Luân Hồi Vạn Thú Đồ: 3/lượt · bí cảnh cùng bậc: 5/lượt

Tên: Tinh luyện thạch bậc 9
Bậc: 9
Nguồn kiếm: phân giải đồ bậc 9 · bí cảnh cùng bậc 8/lượt · cửa hàng nghề mở Không Linh, 10 viên giá 1 U(9)

Tên: Tinh chất khu bậc 10
Bậc: 10
Nguồn kiếm: công vụ Khảo chứng tại Giới Nguyên Chứng Đài: 4/lượt, chung 3 lượt/ngày · guardian Thái Sơ Thú Vực: 3/lượt · bí cảnh cùng bậc: 5/lượt

Tên: Tinh luyện thạch bậc 10
Bậc: 10
Nguồn kiếm: phân giải đồ bậc 10 · bí cảnh cùng bậc 8/lượt · cửa hàng nghề mở Không Kiếp, 10 viên giá 1 U(10)

Tên: Linh chỉ
Bậc: 1
Nguồn kiếm: cửa hàng NPC 20 linh thạch/tờ · không bán ngược có lời

Tên: Cấm mặc
Bậc: 1
Nguồn kiếm: cửa hàng NPC 30 linh thạch/lọ

Tên: Linh nhưỡng
Bậc: 1
Nguồn kiếm: quest động phủ · cửa hàng 100 linh thạch/túi

Tên: Linh tuyền
Bậc: 1
Nguồn kiếm: giếng động phủ 100 đơn vị/ngày, không ảnh hưởng offline cap

Tên: Cổ huyết tinh
Bậc: 3
Nguồn kiếm: thử luyện Cổ Thần:2/clear · luyện thể không Cổ Thần đổi 2 cống hiến luyện thể/viên

Tên: Mạch ngọc
Bậc: 3
Nguồn kiếm: nhiệm vụ kinh mạch:3/ngày · bí cảnh Mộ Đan Tàn Ảnh:2/lượt

Tên: Khế ngọc
Bậc: 3
Nguồn kiếm: quest đạo hữu:2/ngày · không yêu cầu kết hôn

Tên: Cảm ngộ kết tinh
Bậc: 4
Nguồn kiếm: dùng resource cảm ngộ cũ · quy đổi 1=1 nếu chưa có item, không tạo ví mới

Tên: Mảnh Tàng Hồn Cổ Phiên
Bậc: 3
Nguồn kiếm: Mộ Đan Tàn Ảnh, mảnh 20 · Đúc Tàng Hồn Cổ Phiên · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Thiên Cấm Khế Kỳ
Bậc: 3
Nguồn kiếm: Huyền Cốt Động, mảnh 25 · Đúc Thiên Cấm Khế Kỳ · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Trấn Nhạc Huyền Ấn
Bậc: 4
Nguồn kiếm: Lôi Trì Phong Ấn, mảnh 30 · Đúc Trấn Nhạc Huyền Ấn · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Định Hồn Đồng Kính
Bậc: 4
Nguồn kiếm: U Đăng Cổ Các, mảnh 30 · Đúc Định Hồn Đồng Kính · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Phá Vân Kiếm Hạp
Bậc: 5
Nguồn kiếm: Vạn Cấm Lưu Lang, mảnh 40 · Đúc Phá Vân Kiếm Hạp · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Lôi Nguyên Cổ Đỉnh
Bậc: 5
Nguồn kiếm: Vạn Cấm Lưu Lang, mảnh 40 · Đúc Lôi Nguyên Cổ Đỉnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Ngự Triều Huyền Bình
Bậc: 5
Nguồn kiếm: Đoạn Giới Kiếm Trủng, mảnh 45 · Đúc Ngự Triều Huyền Bình · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Cổ Mạch Linh Chung
Bậc: 5
Nguồn kiếm: Cổ Thần 4, mảnh 45 · Đúc Cổ Mạch Linh Chung · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Nghịch Hà Hồn Đăng
Bậc: 6
Nguồn kiếm: Táng Lôi Tinh Uyên, mảnh 50 · Đúc Nghịch Hà Hồn Đăng · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Thôn Pháp Tam Xoa
Bậc: 7
Nguồn kiếm: Cổ Thần 5, mảnh 60 · Đúc Thôn Pháp Tam Xoa · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Cổ Tinh Phá Pháp Thương
Bậc: 7
Nguồn kiếm: Cổ Thần 6,80 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Cửu Cốt Hộ Giới Thuẫn
Bậc: 8
Nguồn kiếm: Cổ Thần 7,90 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Tinh Hà Chấn Sơn Phủ
Bậc: 8
Nguồn kiếm: Cổ Thần 7,90 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Vô Tự Cổ Cốt Bia
Bậc: 9
Nguồn kiếm: Cổ Thần 8,100 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Cửu Tinh Hợp Đạo Luân
Bậc: 10
Nguồn kiếm: Cổ Thần 9,120 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Sinh Tử Song Ngọc
Bậc: 6
Nguồn kiếm: Đoạn Giới Kiếm Trủng,60 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Nhân Quả Kết Thằng
Bậc: 7
Nguồn kiếm: Táng Lôi Tinh Uyên,70 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Chân Giả Lưỡng Nghi Kính
Bậc: 7
Nguồn kiếm: Cổ Diệu Phế Thành,75 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Tịch Diệt Hồn Sa Lậu
Bậc: 8
Nguồn kiếm: Vô Sinh Mộng Vực,80 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Khuy Thiên Đạo Bàn
Bậc: 9
Nguồn kiếm: Quy Tắc Thiên Cung,90 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Tàn Dạ Nhật Luân
Bậc: 9
Nguồn kiếm: Quy Tắc Thiên Cung,100 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Huyền Kiếp Phong Lôi Tỏa
Bậc: 9
Nguồn kiếm: Hắc Hà Khế Ngục,100 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Vạn Giới Cấm Môn
Bậc: 10
Nguồn kiếm: Quy Nguyên Chứng Đài,120 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tên: Mảnh Quy Nguyên Cổ Đạo Đỉnh
Bậc: 10
Nguồn kiếm: Quy Nguyên Chứng Đài+chứng cổ đạo,140 mảnh · đổi ấn khảo chứng cá nhân, không đòi top

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

100 công thức và nguyên liệu đầu vào

Tài liệu thiết kế · Mở rộng V2

Mỗi dòng cho biết điều kiện học nghề, thành phẩm, nguyên liệu, phí và thời gian chế theo cấu hình thiết kế V2. Số lượng nguyên liệu tính cho một lần chế. Danh mục bao gồm cả 30 loại đan và 40 thành phẩm nghề phụ.

Thông số đan theo giờ chuẩn hoặc lượng tu vi trong bảng là cấu hình thiết kế V2. Cẩm nang người chơi tháng 11 mô tả hiệu quả đan hỗ trợ tu vi theo %. Khi dùng đan, xem mô tả của chính viên đan trong game.

Đan dược

Công thức → thành phẩm: Luyện Nguyên Tức Tụ Linh Đan → Nguyên Tức Tụ Linh Đan
Điều kiện: Nguyên Anh · luyện đan cấp 30
Nguyên liệu: 5 Hoàng Cốt Căn, 2 Hàn Phách Lan, 1 Tinh chất khu bậc 3
Phí · thời gian: 8.000 linh thạch · 15 phút
Công dụng: Tu vi bằng 2 giờ tu luyện nền chuẩn tại Nguyên Anh · dược tải+20 · không qua đại cảnh giới tự động

Công thức → thành phẩm: Luyện Hóa Linh Tăng Nguyên Đan → Hóa Linh Tăng Nguyên Đan
Điều kiện: Hóa Thần · luyện đan cấp 40
Nguyên liệu: 6 Xích Dương Sâm, 2 Lôi Tuệ Hoa, 1 Tinh chất khu bậc 4
Phí · thời gian: 20.000 linh thạch · 20 phút
Công dụng: Tu vi bằng 4 giờ tu luyện nền chuẩn tại Hóa Thần · dược tải+20 · không qua đại cảnh giới tự động

Công thức → thành phẩm: Luyện Tiên Tủy Dưỡng Nguyên Đan → Tiên Tủy Dưỡng Nguyên Đan
Điều kiện: Anh Biến · luyện đan cấp 50
Nguyên liệu: 7 Tinh Hỏa Chi, 2 Tử Điện Diệp, 1 Tinh chất khu bậc 5
Phí · thời gian: 50.000 linh thạch · 25 phút
Công dụng: Tu vi bằng 6 giờ tu luyện nền chuẩn tại Anh Biến · dược tải+20 · không qua đại cảnh giới tự động

Công thức → thành phẩm: Luyện Vấn Tâm Tụ Đạo Đan → Vấn Tâm Tụ Đạo Đan
Điều kiện: Vấn Đỉnh · luyện đan cấp 50
Nguyên liệu: 7 Nguyệt Hoa Chi, 2 Vong Ưu Hoa, 1 Tinh chất khu bậc 5
Phí · thời gian: 50.000 linh thạch · 25 phút
Công dụng: Tu vi bằng 8 giờ tu luyện nền chuẩn tại Vấn Đỉnh · dược tải+20 · không qua đại cảnh giới tự động

Công thức → thành phẩm: Luyện Âm Dương Hòa Tức Đan → Âm Dương Hòa Tức Đan
Điều kiện: Dương Thực · luyện đan cấp 60
Nguyên liệu: 8 Băng Tâm Quả, 2 Tinh Hỏa Chi, 1 Tinh chất khu bậc 6
Phí · thời gian: 120.000 linh thạch · 30 phút
Công dụng: Tu vi bằng 10 giờ tu luyện nền chuẩn tại Dương Thực · dược tải+20 · không qua đại cảnh giới tự động

Công thức → thành phẩm: Luyện Khuy Giới Nguyên Đan → Khuy Giới Nguyên Đan
Điều kiện: Khuy Niết · luyện đan cấp 60
Nguyên liệu: 8 Hư Linh Mộc, 2 Minh Lôi Quả, 1 Tinh chất khu bậc 6
Phí · thời gian: 120.000 linh thạch · 30 phút
Công dụng: Tu vi bằng 12 giờ tu luyện nền chuẩn tại Khuy Niết · dược tải+20 · không qua đại cảnh giới tự động

Công thức → thành phẩm: Luyện Tịnh Mạch Nguyên Đan → Tịnh Mạch Nguyên Đan
Điều kiện: Tịnh Niết · luyện đan cấp 70
Nguyên liệu: 9 Dạ Mộng Quả, 2 Nguyệt Hoa Chi, 1 Tinh chất khu bậc 7
Phí · thời gian: 300.000 linh thạch · 35 phút
Công dụng: Tu vi bằng 14 giờ tu luyện nền chuẩn tại Tịnh Niết · dược tải+20 · không qua đại cảnh giới tự động

Công thức → thành phẩm: Luyện Toái Niết Tinh Đan → Toái Niết Tinh Đan
Điều kiện: Toái Niết · luyện đan cấp 70
Nguyên liệu: 9 Toái Tinh Liên, 2 Cổ Dương Quả, 1 Tinh chất khu bậc 7
Phí · thời gian: 300.000 linh thạch · 35 phút
Công dụng: Tu vi bằng 16 giờ tu luyện nền chuẩn tại Toái Niết · dược tải+20 · không qua đại cảnh giới tự động

Công thức → thành phẩm: Luyện Không Linh Dưỡng Đạo Đan → Không Linh Dưỡng Đạo Đan
Điều kiện: Không Linh · luyện đan cấp 80
Nguyên liệu: 10 Huyền Sương Liên, 2 Hư Linh Mộc, 1 Tinh chất khu bậc 8
Phí · thời gian: 800.000 linh thạch · 40 phút
Công dụng: Tu vi bằng 20 giờ tu luyện nền chuẩn tại Không Linh · dược tải+20 · không qua đại cảnh giới tự động

Công thức → thành phẩm: Luyện Huyền Kiếp Tụ Nguyên Đan → Huyền Kiếp Tụ Nguyên Đan
Điều kiện: Không Huyền · luyện đan cấp 90
Nguyên liệu: 11 Tịch Niệm Liên, 2 Nguyên Sơ Chi, 1 Tinh chất khu bậc 9
Phí · thời gian: 2.000.000 linh thạch · 45 phút
Công dụng: Tu vi bằng 24 giờ tu luyện nền chuẩn tại Không Huyền · dược tải+20 · không qua đại cảnh giới tự động

Công thức → thành phẩm: Luyện Bổ Khuyết Nguyên Đan → Bổ Khuyết Nguyên Đan
Điều kiện: Nguyên Anh · luyện đan cấp 30
Nguyên liệu: 5 Hoàng Cốt Căn, 2 Xích Dương Sâm, 1 Tinh chất khu bậc 3
Phí · thời gian: 8.000 linh thạch · 15 phút
Công dụng: Bù tối đa 15% T trong attempt đúng bước · mỗi gói cung cấp lượng thiếu server tính, không tạo reserve · tuân điều kiện q và chứng nhận

Công thức → thành phẩm: Luyện Bổ Khuyết Niết Đan → Bổ Khuyết Niết Đan
Điều kiện: Khuy Niết · luyện đan cấp 60
Nguyên liệu: 8 Hư Linh Mộc, 2 Nguyệt Hoa Chi, 1 Tinh chất khu bậc 6
Phí · thời gian: 120.000 linh thạch · 30 phút
Công dụng: Bù tối đa 10% T trong attempt đúng bước · mỗi gói cung cấp lượng thiếu server tính, không tạo reserve · tuân điều kiện q và chứng nhận

Công thức → thành phẩm: Luyện Bổ Khuyết Không Đan → Bổ Khuyết Không Đan
Điều kiện: Không Niết · luyện đan cấp 80
Nguyên liệu: 10 Tịch Lôi Liên, 2 Toái Tinh Liên, 1 Tinh chất khu bậc 8
Phí · thời gian: 800.000 linh thạch · 40 phút
Công dụng: Bù tối đa 5% T trong attempt đúng bước · mỗi gói cung cấp lượng thiếu server tính, không tạo reserve · tuân điều kiện q và chứng nhận

Công thức → thành phẩm: Luyện Hộ Anh Cố Bản Đan → Hộ Anh Cố Bản Đan
Điều kiện: Nguyên Anh · luyện đan cấp 30
Nguyên liệu: 5 Ngọc Tâm Chi, 2 Hàn Phách Lan, 1 Tinh chất khu bậc 3
Phí · thời gian: 8.000 linh thạch · 15 phút
Công dụng: Giảm 25% lượng tu vi mất khi thua, không cộng các đan bảo hộ · 1/attempt

Công thức → thành phẩm: Luyện Tĩnh Đạo An Kiếp Đan → Tĩnh Đạo An Kiếp Đan
Điều kiện: Khuy Niết · luyện đan cấp 60
Nguyên liệu: 8 Băng Tâm Quả, 2 Vong Ưu Hoa, 1 Tinh chất khu bậc 6
Phí · thời gian: 120.000 linh thạch · 30 phút
Công dụng: Giảm 50% lượng tu vi mất khi thua, không cộng các đan bảo hộ · 1/attempt

Công thức → thành phẩm: Luyện Kháng Lôi Ngọc Đan → Kháng Lôi Ngọc Đan
Điều kiện: Hóa Thần · luyện đan cấp 40
Nguyên liệu: 6 Lôi Tuệ Hoa, 2 Hàn Phách Lan, 1 Tinh chất khu bậc 4
Phí · thời gian: 20.000 linh thạch · 20 phút
Công dụng: kháng lôi 15% trong 45 s,1/attempt

Công thức → thành phẩm: Luyện Dưỡng Hồn Thanh Minh Đan → Dưỡng Hồn Thanh Minh Đan
Điều kiện: Anh Biến · luyện đan cấp 50
Nguyên liệu: 7 U Hồn Thảo, 2 Băng Tâm Quả, 1 Tinh chất khu bậc 5
Phí · thời gian: 50.000 linh thạch · 25 phút
Công dụng: gỡ 2 suy hồn, hồi 60 s

Công thức → thành phẩm: Luyện Phục Nguyên Tục Tức Đan → Phục Nguyên Tục Tức Đan
Điều kiện: Vấn Đỉnh · luyện đan cấp 50
Nguyên liệu: 7 Xích Dương Sâm, 2 Nguyệt Hoa Chi, 1 Tinh chất khu bậc 5
Phí · thời gian: 50.000 linh thạch · 25 phút
Công dụng: hồi 20% HP trong 5 s, hồi 60 s

Công thức → thành phẩm: Luyện Cương Cốt Dưỡng Thể Đan → Cương Cốt Dưỡng Thể Đan
Điều kiện: Nguyên Anh · luyện đan cấp 30
Nguyên liệu: 5 Hoàng Cốt Căn, 2 Xích Dương Sâm, 1 Tinh chất khu bậc 3
Phí · thời gian: 8.000 linh thạch · 15 phút
Công dụng: thêm 20 điểm luyện thể luyện tập, không thêm sao tự động

Công thức → thành phẩm: Luyện Cổ Huyết Tinh Luyện Đan → Cổ Huyết Tinh Luyện Đan
Điều kiện: Vấn Đỉnh · luyện đan cấp 50
Nguyên liệu: 7 Thạch Huyết Đằng, 2 Tử Điện Diệp, 1 Tinh chất khu bậc 5
Phí · thời gian: 50.000 linh thạch · 25 phút
Công dụng: thêm 50 điểm Cổ huyết, không thay chứng khảo nghiệm

Công thức → thành phẩm: Luyện Ngự Ma Tĩnh Tâm Đan → Ngự Ma Tĩnh Tâm Đan
Điều kiện: Nguyên Anh · luyện đan cấp 30
Nguyên liệu: 5 Hàn Phách Lan, 2 Ngọc Tâm Chi, 1 Tinh chất khu bậc 3
Phí · thời gian: 8.000 linh thạch · 15 phút
Công dụng: giảm 20 ma chướng ngoài trận, hồi 30 phút

Công thức → thành phẩm: Luyện Sát Tâm Điều Tức Đan → Sát Tâm Điều Tức Đan
Điều kiện: Hóa Thần · luyện đan cấp 40
Nguyên liệu: 6 Thạch Huyết Đằng, 2 Băng Tâm Quả, 1 Tinh chất khu bậc 4
Phí · thời gian: 20.000 linh thạch · 20 phút
Công dụng: trần ma chướng để vào thử thách là 60, không cộng sát thương

Công thức → thành phẩm: Luyện Hồn Khế An Thần Đan → Hồn Khế An Thần Đan
Điều kiện: Khuy Niết · luyện đan cấp 60
Nguyên liệu: 8 U Hồn Thảo, 2 Nguyệt Hoa Chi, 1 Tinh chất khu bậc 6
Phí · thời gian: 120.000 linh thạch · 30 phút
Công dụng: giảm 10 chướng và phục 5 linh lực đầu trận,1/attempt

Công thức → thành phẩm: Luyện Nghịch Thể Hộ Tâm Đan → Nghịch Thể Hộ Tâm Đan
Điều kiện: Toái Niết · luyện đan cấp 70
Nguyên liệu: 9 Cổ Dương Quả, 2 Hoàng Cốt Căn, 1 Tinh chất khu bậc 7
Phí · thời gian: 300.000 linh thạch · 35 phút
Công dụng: đòn tự tiêu HP đầu giảm 50%,1/attempt

Công thức → thành phẩm: Luyện Thông Mạch Dưỡng Ngọc Đan → Thông Mạch Dưỡng Ngọc Đan
Điều kiện: Nguyên Anh · luyện đan cấp 30
Nguyên liệu: 5 Hoàng Cốt Căn, 2 Hàn Phách Lan, 1 Tinh chất khu bậc 3
Phí · thời gian: 8.000 linh thạch · 15 phút
Công dụng: 1 đơn vị Thông Mạch Đan dùng cho nút mạch

Công thức → thành phẩm: Luyện Tục Mạch Hoàn Nguyên Đan → Tục Mạch Hoàn Nguyên Đan
Điều kiện: Hóa Thần · luyện đan cấp 40
Nguyên liệu: 6 Băng Tâm Quả, 2 Ngọc Tâm Chi, 1 Tinh chất khu bậc 4
Phí · thời gian: 20.000 linh thạch · 20 phút
Công dụng: hoàn 20% phí đổi lõi, không reset nghiên cứu, hồi 24 h

Công thức → thành phẩm: Luyện Khế Linh Dưỡng Tâm Đan → Khế Linh Dưỡng Tâm Đan
Điều kiện: Nguyên Anh · luyện đan cấp 30
Nguyên liệu: 5 Ngọc Tâm Chi, 2 Xích Dương Sâm, 1 Tinh chất khu bậc 3
Phí · thời gian: 8.000 linh thạch · 15 phút
Công dụng: cộng 10 thân thiết pet, giới hạn 2/ngày

Công thức → thành phẩm: Luyện Đồng Tâm Thanh Tức Đan → Đồng Tâm Thanh Tức Đan
Điều kiện: Hóa Thần · luyện đan cấp 40
Nguyên liệu: 6 Băng Tâm Quả, 2 Lôi Tuệ Hoa, 1 Tinh chất khu bậc 4
Phí · thời gian: 20.000 linh thạch · 20 phút
Công dụng: quà đúng sở thích+10 thiện cảm, giới hạn chung 30/ngày

Công thức → thành phẩm: Luyện Cố Đạo Dưỡng Thương Đan → Cố Đạo Dưỡng Thương Đan
Điều kiện: Không Niết · luyện đan cấp 80
Nguyên liệu: 10 Tịch Lôi Liên, 2 Toái Tinh Liên, 1 Tinh chất khu bậc 8
Phí · thời gian: 800.000 linh thạch · 40 phút
Công dụng: Giảm 25% lượng tu vi mất khi thua, không cộng các đan bảo hộ · 1/attempt

Công thức → thành phẩm: Luyện Chứng Tâm Giới Nguyên Đan → Chứng Tâm Giới Nguyên Đan
Điều kiện: Không Kiếp · luyện đan cấp 100
Nguyên liệu: 12 Chứng Đạo Hoa, 2 Giới Tâm Quả, 1 Tinh chất khu bậc 10
Phí · thời gian: 5.000.000 linh thạch · 50 phút
Công dụng: trước chứng đạo cho khiên 10% HP đầu mỗi pha, tối đa 3 pha

Trang bị

Công thức → thành phẩm: Rèn Tàng Phong Kiếm → Tàng Phong Kiếm
Điều kiện: Nguyên Anh · luyện khí cấp 30
Nguyên liệu: 20 Nguyên Tủy Ngọc, 5 Tinh chất khu bậc 3, 5 Tinh luyện thạch bậc 3
Phí · thời gian: 32.000 linh thạch · 60 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Tàng Phong Bội → Tàng Phong Bội
Điều kiện: Nguyên Anh · luyện khí cấp 30
Nguyên liệu: 20 Nguyên Tủy Ngọc, 5 Tinh chất khu bậc 3, 5 Tinh luyện thạch bậc 3
Phí · thời gian: 32.000 linh thạch · 60 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Thừa Lôi Trượng → Thừa Lôi Trượng
Điều kiện: Hóa Thần · luyện khí cấp 40
Nguyên liệu: 20 Hóa Linh Kim, 5 Tinh chất khu bậc 4, 5 Tinh luyện thạch bậc 4
Phí · thời gian: 80.000 linh thạch · 80 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Thừa Lôi Bội → Thừa Lôi Bội
Điều kiện: Hóa Thần · luyện khí cấp 40
Nguyên liệu: 20 Hóa Linh Kim, 5 Tinh chất khu bậc 4, 5 Tinh luyện thạch bậc 4
Phí · thời gian: 80.000 linh thạch · 80 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Huyền Cốt Quyền Sáo → Huyền Cốt Quyền Sáo
Điều kiện: Nguyên Anh · luyện khí cấp 30
Nguyên liệu: 20 Nguyên Tủy Ngọc, 5 Tinh chất khu bậc 3, 5 Tinh luyện thạch bậc 3
Phí · thời gian: 32.000 linh thạch · 60 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Huyền Cốt Bội → Huyền Cốt Bội
Điều kiện: Nguyên Anh · luyện khí cấp 30
Nguyên liệu: 20 Nguyên Tủy Ngọc, 5 Tinh chất khu bậc 3, 5 Tinh luyện thạch bậc 3
Phí · thời gian: 32.000 linh thạch · 60 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Tịch Hồn Phiên → Tịch Hồn Phiên
Điều kiện: Anh Biến · luyện khí cấp 50
Nguyên liệu: 20 Tiên Tức Sa, 5 Tinh chất khu bậc 5, 5 Tinh luyện thạch bậc 5
Phí · thời gian: 200.000 linh thạch · 100 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Tịch Hồn Bội → Tịch Hồn Bội
Điều kiện: Anh Biến · luyện khí cấp 50
Nguyên liệu: 20 Tiên Tức Sa, 5 Tinh chất khu bậc 5, 5 Tinh luyện thạch bậc 5
Phí · thời gian: 200.000 linh thạch · 100 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Thiên Văn Trận Bàn → Thiên Văn Trận Bàn
Điều kiện: Vấn Đỉnh · luyện khí cấp 50
Nguyên liệu: 20 Tiên Tức Sa, 5 Tinh chất khu bậc 5, 5 Tinh luyện thạch bậc 5
Phí · thời gian: 200.000 linh thạch · 100 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Thiên Văn Bội → Thiên Văn Bội
Điều kiện: Vấn Đỉnh · luyện khí cấp 50
Nguyên liệu: 20 Tiên Tức Sa, 5 Tinh chất khu bậc 5, 5 Tinh luyện thạch bậc 5
Phí · thời gian: 200.000 linh thạch · 100 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Đoạn Giới Kiếm → Đoạn Giới Kiếm
Điều kiện: Khuy Niết · luyện khí cấp 60
Nguyên liệu: 20 Khuy Giới Thạch, 5 Tinh chất khu bậc 6, 5 Tinh luyện thạch bậc 6
Phí · thời gian: 480.000 linh thạch · 120 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Đoạn Giới Bội → Đoạn Giới Bội
Điều kiện: Khuy Niết · luyện khí cấp 60
Nguyên liệu: 20 Khuy Giới Thạch, 5 Tinh chất khu bậc 6, 5 Tinh luyện thạch bậc 6
Phí · thời gian: 480.000 linh thạch · 120 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Táng Lôi Chùy → Táng Lôi Chùy
Điều kiện: Toái Niết · luyện khí cấp 70
Nguyên liệu: 20 Toái Niết Tinh, 5 Tinh chất khu bậc 7, 5 Tinh luyện thạch bậc 7
Phí · thời gian: 1.200.000 linh thạch · 140 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Táng Lôi Bội → Táng Lôi Bội
Điều kiện: Toái Niết · luyện khí cấp 70
Nguyên liệu: 20 Toái Niết Tinh, 5 Tinh chất khu bậc 7, 5 Tinh luyện thạch bậc 7
Phí · thời gian: 1.200.000 linh thạch · 140 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Cổ Diệu Chiến Phủ → Cổ Diệu Chiến Phủ
Điều kiện: Không Niết · luyện khí cấp 80
Nguyên liệu: 20 Không Tâm Ngọc, 5 Tinh chất khu bậc 8, 5 Tinh luyện thạch bậc 8
Phí · thời gian: 3.200.000 linh thạch · 160 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Cổ Diệu Bội → Cổ Diệu Bội
Điều kiện: Không Niết · luyện khí cấp 80
Nguyên liệu: 20 Không Tâm Ngọc, 5 Tinh chất khu bậc 8, 5 Tinh luyện thạch bậc 8
Phí · thời gian: 3.200.000 linh thạch · 160 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Vô Sinh Hồn Linh → Vô Sinh Hồn Linh
Điều kiện: Không Linh · luyện khí cấp 90
Nguyên liệu: 20 Huyền Kiếp Kim, 5 Tinh chất khu bậc 9, 5 Tinh luyện thạch bậc 9
Phí · thời gian: 8.000.000 linh thạch · 180 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Vô Sinh Bội → Vô Sinh Bội
Điều kiện: Không Linh · luyện khí cấp 90
Nguyên liệu: 20 Huyền Kiếp Kim, 5 Tinh chất khu bậc 9, 5 Tinh luyện thạch bậc 9
Phí · thời gian: 8.000.000 linh thạch · 180 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Quy Tắc Cấm Xích → Quy Tắc Cấm Xích
Điều kiện: Không Huyền · luyện khí cấp 90
Nguyên liệu: 20 Huyền Kiếp Kim, 5 Tinh chất khu bậc 9, 5 Tinh luyện thạch bậc 9
Phí · thời gian: 8.000.000 linh thạch · 180 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Công thức → thành phẩm: Rèn Quy Tắc Bội → Quy Tắc Bội
Điều kiện: Không Huyền · luyện khí cấp 90
Nguyên liệu: 20 Huyền Kiếp Kim, 5 Tinh chất khu bậc 9, 5 Tinh luyện thạch bậc 9
Phí · thời gian: 8.000.000 linh thạch · 180 phút
Công dụng: Trang bị mới +0, khóa giao dịch sau khi mặc

Phôi pháp bảo

Công thức → thành phẩm: Đúc Tàng Hồn Cổ Phiên → Tàng Hồn Cổ Phiên
Điều kiện: Nguyên Anh · luyện khí cấp 30
Nguyên liệu: 30 Nguyên Tủy Ngọc, 10 Tinh chất khu bậc 3, 20 Cảm ngộ kết tinh
Phí · thời gian: 48.000 linh thạch · 90 phút
Công dụng: pháp bảo phôi, cần attune · không nhận thêm slot active

Công thức → thành phẩm: Đúc Thiên Cấm Khế Kỳ → Thiên Cấm Khế Kỳ
Điều kiện: Nguyên Anh · luyện khí cấp 30
Nguyên liệu: 30 Nguyên Tủy Ngọc, 10 Tinh chất khu bậc 3, 20 Cảm ngộ kết tinh
Phí · thời gian: 48.000 linh thạch · 90 phút
Công dụng: pháp bảo phôi, cần attune · không nhận thêm slot active

Công thức → thành phẩm: Đúc Trấn Nhạc Huyền Ấn → Trấn Nhạc Huyền Ấn
Điều kiện: Hóa Thần · luyện khí cấp 40
Nguyên liệu: 30 Hóa Linh Kim, 10 Tinh chất khu bậc 4, 20 Cảm ngộ kết tinh
Phí · thời gian: 120.000 linh thạch · 120 phút
Công dụng: pháp bảo phôi, cần attune · không nhận thêm slot active

Công thức → thành phẩm: Đúc Định Hồn Đồng Kính → Định Hồn Đồng Kính
Điều kiện: Hóa Thần · luyện khí cấp 40
Nguyên liệu: 30 Hóa Linh Kim, 10 Tinh chất khu bậc 4, 20 Cảm ngộ kết tinh
Phí · thời gian: 120.000 linh thạch · 120 phút
Công dụng: pháp bảo phôi, cần attune · không nhận thêm slot active

Công thức → thành phẩm: Đúc Phá Vân Kiếm Hạp → Phá Vân Kiếm Hạp
Điều kiện: Anh Biến · luyện khí cấp 50
Nguyên liệu: 30 Tiên Tức Sa, 10 Tinh chất khu bậc 5, 20 Cảm ngộ kết tinh
Phí · thời gian: 300.000 linh thạch · 150 phút
Công dụng: pháp bảo phôi, cần attune · không nhận thêm slot active

Công thức → thành phẩm: Đúc Lôi Nguyên Cổ Đỉnh → Lôi Nguyên Cổ Đỉnh
Điều kiện: Anh Biến · luyện khí cấp 50
Nguyên liệu: 30 Tiên Tức Sa, 10 Tinh chất khu bậc 5, 20 Cảm ngộ kết tinh
Phí · thời gian: 300.000 linh thạch · 150 phút
Công dụng: pháp bảo phôi, cần attune · không nhận thêm slot active

Công thức → thành phẩm: Đúc Ngự Triều Huyền Bình → Ngự Triều Huyền Bình
Điều kiện: Vấn Đỉnh · luyện khí cấp 50
Nguyên liệu: 30 Tiên Tức Sa, 10 Tinh chất khu bậc 5, 20 Cảm ngộ kết tinh
Phí · thời gian: 300.000 linh thạch · 150 phút
Công dụng: pháp bảo phôi, cần attune · không nhận thêm slot active

Công thức → thành phẩm: Đúc Cổ Mạch Linh Chung → Cổ Mạch Linh Chung
Điều kiện: Vấn Đỉnh · luyện khí cấp 50
Nguyên liệu: 30 Tiên Tức Sa, 10 Tinh chất khu bậc 5, 20 Cảm ngộ kết tinh
Phí · thời gian: 300.000 linh thạch · 150 phút
Công dụng: pháp bảo phôi, cần attune · không nhận thêm slot active

Công thức → thành phẩm: Đúc Nghịch Hà Hồn Đăng → Nghịch Hà Hồn Đăng
Điều kiện: Khuy Niết · luyện khí cấp 60
Nguyên liệu: 30 Khuy Giới Thạch, 10 Tinh chất khu bậc 6, 20 Cảm ngộ kết tinh
Phí · thời gian: 720.000 linh thạch · 180 phút
Công dụng: pháp bảo phôi, cần attune · không nhận thêm slot active

Công thức → thành phẩm: Đúc Thôn Pháp Tam Xoa → Thôn Pháp Tam Xoa
Điều kiện: Tịnh Niết · luyện khí cấp 70
Nguyên liệu: 30 Toái Niết Tinh, 10 Tinh chất khu bậc 7, 20 Cảm ngộ kết tinh
Phí · thời gian: 1.800.000 linh thạch · 210 phút
Công dụng: pháp bảo phôi, cần attune · không nhận thêm slot active

Thức ăn khế linh

Công thức → thành phẩm: Khế Linh Thực bậc 1 → Khế Linh Thực bậc 1 ×5
Điều kiện: Trúc Cơ · luyện đan cấp 10
Nguyên liệu: 2 Tinh chất khu bậc 1, 3 Thanh Tủy Thảo
Phí · thời gian: 500 linh thạch · 10 phút
Công dụng: nguyên liệu E2/E3 · không tăng số lượng actor

Công thức → thành phẩm: Khế Linh Thực bậc 2 → Khế Linh Thực bậc 2 ×5
Điều kiện: Kết Đan · luyện đan cấp 20
Nguyên liệu: 2 Tinh chất khu bậc 2, 3 Ngọc Tâm Chi
Phí · thời gian: 1.500 linh thạch · 20 phút
Công dụng: nguyên liệu E2/E3 · không tăng số lượng actor

Công thức → thành phẩm: Khế Linh Thực bậc 3 → Khế Linh Thực bậc 3 ×5
Điều kiện: Nguyên Anh · luyện đan cấp 30
Nguyên liệu: 2 Tinh chất khu bậc 3, 3 Hoàng Cốt Căn
Phí · thời gian: 4.000 linh thạch · 30 phút
Công dụng: nguyên liệu E2/E3 · không tăng số lượng actor

Công thức → thành phẩm: Khế Linh Thực bậc 4 → Khế Linh Thực bậc 4 ×5
Điều kiện: Hóa Thần · luyện đan cấp 40
Nguyên liệu: 2 Tinh chất khu bậc 4, 3 Lôi Tuệ Hoa
Phí · thời gian: 10.000 linh thạch · 40 phút
Công dụng: nguyên liệu E2/E3 · không tăng số lượng actor

Công thức → thành phẩm: Khế Linh Thực bậc 5 → Khế Linh Thực bậc 5 ×5
Điều kiện: Vấn Đỉnh · luyện đan cấp 50
Nguyên liệu: 2 Tinh chất khu bậc 5, 3 Tử Điện Diệp
Phí · thời gian: 25.000 linh thạch · 50 phút
Công dụng: nguyên liệu E2/E3 · không tăng số lượng actor

Công thức → thành phẩm: Khế Linh Thực bậc 6 → Khế Linh Thực bậc 6 ×5
Điều kiện: Khuy Niết · luyện đan cấp 60
Nguyên liệu: 2 Tinh chất khu bậc 6, 3 Minh Lôi Quả
Phí · thời gian: 60.000 linh thạch · 60 phút
Công dụng: nguyên liệu E2/E3 · không tăng số lượng actor

Công thức → thành phẩm: Khế Linh Thực bậc 7 → Khế Linh Thực bậc 7 ×5
Điều kiện: Toái Niết · luyện đan cấp 70
Nguyên liệu: 2 Tinh chất khu bậc 7, 3 Cổ Dương Quả
Phí · thời gian: 150.000 linh thạch · 70 phút
Công dụng: nguyên liệu E2/E3 · không tăng số lượng actor

Công thức → thành phẩm: Khế Linh Thực bậc 8 → Khế Linh Thực bậc 8 ×5
Điều kiện: Không Niết · luyện đan cấp 80
Nguyên liệu: 2 Tinh chất khu bậc 8, 3 Tịch Lôi Liên
Phí · thời gian: 400.000 linh thạch · 80 phút
Công dụng: nguyên liệu E2/E3 · không tăng số lượng actor

Công thức → thành phẩm: Khế Linh Thực bậc 9 → Khế Linh Thực bậc 9 ×5
Điều kiện: Không Huyền · luyện đan cấp 90
Nguyên liệu: 2 Tinh chất khu bậc 9, 3 Nguyên Sơ Chi
Phí · thời gian: 1.000.000 linh thạch · 90 phút
Công dụng: nguyên liệu E2/E3 · không tăng số lượng actor

Công thức → thành phẩm: Khế Linh Thực bậc 10 → Khế Linh Thực bậc 10 ×5
Điều kiện: Không Kiếp · luyện đan cấp 100
Nguyên liệu: 2 Tinh chất khu bậc 10, 3 Giới Tâm Quả
Phí · thời gian: 2.500.000 linh thạch · 100 phút
Công dụng: nguyên liệu E2/E3 · không tăng số lượng actor

Dưỡng thể và kinh mạch

Công thức → thành phẩm: Mạch Ngọc Kết Tinh → Mạch Ngọc Kết Tinh
Điều kiện: Nguyên Anh · luyện khí cấp 30
Nguyên liệu: 5 Mạch ngọc, 4 Nguyên Tủy Ngọc, 2 Hoàng Cốt Căn
Phí · thời gian: 16.000 linh thạch · 36 phút
Công dụng: 5 mạch ngọc nguyên liệu → 1 bó, mở khóa nút cần 5 · không tạo rút/nạp nhận thêm

Công thức → thành phẩm: Cổ Huyết Tinh Cao → Cổ Huyết Tinh Cao
Điều kiện: Hóa Thần · luyện đan cấp 40
Nguyên liệu: 5 Cổ huyết tinh, 4 Hóa Linh Kim, 2 Thạch Huyết Đằng
Phí · thời gian: 40.000 linh thạch · 48 phút
Công dụng: thêm 10 luyện tập huyết khí, không tự tăng sao

Công thức → thành phẩm: Tinh Văn Khắc Phiến → Tinh Văn Khắc Phiến
Điều kiện: Anh Biến · luyện khí cấp 50
Nguyên liệu: 5 Cổ huyết tinh, 4 Tiên Tức Sa, 2 Tử Điện Diệp
Phí · thời gian: 100.000 linh thạch · 60 phút
Công dụng: 1 chứng vật nuôi pháp bảo, không thay chứng chiến dịch

Công thức → thành phẩm: Cương Cốt Tủy Dịch → Cương Cốt Tủy Dịch
Điều kiện: Nguyên Anh · luyện đan cấp 30
Nguyên liệu: 5 Cổ huyết tinh, 4 Nguyên Tủy Ngọc, 2 Xích Dương Sâm
Phí · thời gian: 16.000 linh thạch · 36 phút
Công dụng: tăng 10 tiến độ tôi cốt trong cấp hiện tại

Công thức → thành phẩm: Dưỡng Thần Ngọc Tủy → Dưỡng Thần Ngọc Tủy
Điều kiện: Hóa Thần · luyện khí cấp 40
Nguyên liệu: 5 Mạch ngọc, 4 Hóa Linh Kim, 2 Băng Tâm Quả
Phí · thời gian: 40.000 linh thạch · 48 phút
Công dụng: dùng nâng lõi đan điền, quy đổi 1 đơn vị tinh chất

Công thức → thành phẩm: Nguyên Phủ Định Tâm Hương → Nguyên Phủ Định Tâm Hương
Điều kiện: Hóa Thần · luyện đan cấp 40
Nguyên liệu: 5 Mạch ngọc, 4 Hóa Linh Kim, 2 Lôi Tuệ Hoa
Phí · thời gian: 40.000 linh thạch · 48 phút
Công dụng: giảm chi phí linh thạch nâng lõi tiếp theo 5%,1 lần/ngày

Công thức → thành phẩm: Cổ Tâm Hộ Giáp Cao → Cổ Tâm Hộ Giáp Cao
Điều kiện: Vấn Đỉnh · luyện khí cấp 50
Nguyên liệu: 5 Cổ huyết tinh, 4 Tiên Tức Sa, 2 Nguyệt Hoa Chi
Phí · thời gian: 100.000 linh thạch · 60 phút
Công dụng: cho kháng break 10% trong 1 trận thử, không dùng PvP

Công thức → thành phẩm: Tinh Huyết Quy Nguyên Tán → Tinh Huyết Quy Nguyên Tán
Điều kiện: Tịnh Niết · luyện đan cấp 70
Nguyên liệu: 5 Cổ huyết tinh, 4 Toái Niết Tinh, 2 Dạ Mộng Quả
Phí · thời gian: 600.000 linh thạch · 84 phút
Công dụng: hoàn 5% HP sau thử luyện, không hoàn tu vi thất bại

Công thức → thành phẩm: Đạo Cung Minh Thần Hương → Đạo Cung Minh Thần Hương
Điều kiện: Vấn Đỉnh · luyện khí cấp 50
Nguyên liệu: 5 Mạch ngọc, 4 Tiên Tức Sa, 2 Vong Ưu Hoa
Phí · thời gian: 100.000 linh thạch · 60 phút
Công dụng: thêm 10 cảm ngộ bound từ nghề, giới hạn 1/ngày

Công thức → thành phẩm: Hợp Mạch Chứng Tín → Hợp Mạch Chứng Tín
Điều kiện: Nguyên Anh · luyện đan cấp 30
Nguyên liệu: 5 Mạch ngọc, 4 Nguyên Tủy Ngọc, 2 Hàn Phách Lan
Phí · thời gian: 16.000 linh thạch · 36 phút
Công dụng: chứng craft cho nút Hợp, không tự mở node

Phù và trận kỳ

Công thức → thành phẩm: Phong Lôi Phù → Phong Lôi Phù
Điều kiện: Kết Đan · chế phù cấp 20
Nguyên liệu: 3 Linh chỉ, 2 Cấm mặc, 2 Hàn Văn Đồng
Phí · thời gian: 3.000 linh thạch · 16 phút
Công dụng: chặn 1 đòn lôi thường · không chặn thiên kiếp bắt buộc

Công thức → thành phẩm: Hộ Khế Phù → Hộ Khế Phù
Điều kiện: Nguyên Anh · chế phù cấp 30
Nguyên liệu: 3 Linh chỉ, 2 Cấm mặc, 2 Nguyên Tủy Ngọc
Phí · thời gian: 8.000 linh thạch · 24 phút
Công dụng: khiên 8% HP đầu trận săn

Công thức → thành phẩm: Tịnh Sát Phù → Tịnh Sát Phù
Điều kiện: Nguyên Anh · chế phù cấp 30
Nguyên liệu: 3 Linh chỉ, 2 Cấm mặc, 2 Nguyên Tủy Ngọc
Phí · thời gian: 8.000 linh thạch · 24 phút
Công dụng: gỡ 1 debuff ma chướng trong thử luyện

Công thức → thành phẩm: Định Ảnh Phù → Định Ảnh Phù
Điều kiện: Hóa Thần · chế phù cấp 40
Nguyên liệu: 3 Linh chỉ, 2 Cấm mặc, 2 Hóa Linh Kim
Phí · thời gian: 20.000 linh thạch · 32 phút
Công dụng: đòn đầu lên phân ảnh+100% hệ số, không áp lên hero PvP

Công thức → thành phẩm: Dẫn Linh Trận Kỳ → Dẫn Linh Trận Kỳ
Điều kiện: Hóa Thần · trận pháp cấp 40
Nguyên liệu: 3 Linh chỉ, 2 Cấm mặc, 2 Hóa Linh Kim
Phí · thời gian: 20.000 linh thạch · 32 phút
Công dụng: tăng 5% tốc độ tu luyện nền trong 2 giờ, không chồng cùng buff

Công thức → thành phẩm: Tỏa Triều Trận Kỳ → Tỏa Triều Trận Kỳ
Điều kiện: Anh Biến · trận pháp cấp 50
Nguyên liệu: 3 Linh chỉ, 2 Cấm mặc, 2 Tiên Tức Sa
Phí · thời gian: 50.000 linh thạch · 40 phút
Công dụng: giảm áp suất map thủy 10 một lần

Công thức → thành phẩm: Hồi Tức Trận Bàn → Hồi Tức Trận Bàn
Điều kiện: Anh Biến · trận pháp cấp 50
Nguyên liệu: 3 Linh chỉ, 2 Cấm mặc, 2 Tiên Tức Sa
Phí · thời gian: 50.000 linh thạch · 40 phút
Công dụng: hồi 3 linh lực mỗi 10 s trong 30 s,1/attempt

Công thức → thành phẩm: Thú Khế An Tâm Phù → Thú Khế An Tâm Phù
Điều kiện: Vấn Đỉnh · trận pháp cấp 50
Nguyên liệu: 3 Linh chỉ, 2 Cấm mặc, 2 Tiên Tức Sa
Phí · thời gian: 50.000 linh thạch · 48 phút
Công dụng: tăng 5 điểm ổn định khế trong encounter, không đổi tỷ lệ pet ngẫu nhiên

Công thức → thành phẩm: Kháng Huyền Kiếp Phù → Kháng Huyền Kiếp Phù
Điều kiện: Không Huyền · trận pháp cấp 90
Nguyên liệu: 3 Linh chỉ, 2 Cấm mặc, 2 Huyền Kiếp Kim
Phí · thời gian: 2.000.000 linh thạch · 48 phút
Công dụng: giảm 8% sát thương một loại kiếp đã chọn trong 1 attempt

Công thức → thành phẩm: Ổn Định Khí Văn Ấn → Ổn Định Khí Văn Ấn
Điều kiện: Trúc Cơ · trận pháp cấp 10
Nguyên liệu: 3 Linh chỉ, 2 Cấm mặc, 2 Thanh Thiết Tinh
Phí · thời gian: 1.000 linh thạch · 8 phút
Công dụng: nguyên liệu mốc+5/+10/+15/+20, không phải bảo hiểm RNG

Linh điền, khế ước và động phủ

Công thức → thành phẩm: Linh Nhưỡng Dưỡng Căn → Linh Nhưỡng Dưỡng Căn
Điều kiện: Trúc Cơ · trận pháp cấp 10
Nguyên liệu: 4 Linh nhưỡng, 10 Linh tuyền, 3 Thanh Thiết Tinh
Phí · thời gian: 1.000 linh thạch · 15 phút
Công dụng: tăng 10% sản lượng 1 vụ, không cộng thuốc cùng nhóm

Công thức → thành phẩm: Hàn Tuyền Tưới Gốc → Hàn Tuyền Tưới Gốc
Điều kiện: Nguyên Anh · trận pháp cấp 30
Nguyên liệu: 4 Linh nhưỡng, 10 Linh tuyền, 3 Nguyên Tủy Ngọc
Phí · thời gian: 8.000 linh thạch · 45 phút
Công dụng: vật liệu mở ô Hàn tuyền

Công thức → thành phẩm: Lôi Trì Dẫn Mạch Thạch → Lôi Trì Dẫn Mạch Thạch
Điều kiện: Hóa Thần · trận pháp cấp 40
Nguyên liệu: 4 Linh nhưỡng, 10 Linh tuyền, 3 Hóa Linh Kim
Phí · thời gian: 20.000 linh thạch · 60 phút
Công dụng: vật liệu mở ô Lôi trì

Công thức → thành phẩm: Âm Viên Tịnh Vụ Đăng → Âm Viên Tịnh Vụ Đăng
Điều kiện: Anh Biến · trận pháp cấp 50
Nguyên liệu: 4 Linh nhưỡng, 10 Linh tuyền, 3 Tiên Tức Sa
Phí · thời gian: 50.000 linh thạch · 75 phút
Công dụng: vật liệu mở ô Âm viên

Công thức → thành phẩm: Dương Viên Tụ Nhật Thạch → Dương Viên Tụ Nhật Thạch
Điều kiện: Nguyên Anh · trận pháp cấp 30
Nguyên liệu: 4 Linh nhưỡng, 10 Linh tuyền, 3 Nguyên Tủy Ngọc
Phí · thời gian: 8.000 linh thạch · 45 phút
Công dụng: vật liệu mở ô Dương viên

Công thức → thành phẩm: Hư Viên Định Giới Trụ → Hư Viên Định Giới Trụ
Điều kiện: Khuy Niết · trận pháp cấp 60
Nguyên liệu: 4 Linh nhưỡng, 10 Linh tuyền, 3 Khuy Giới Thạch
Phí · thời gian: 120.000 linh thạch · 90 phút
Công dụng: vật liệu mở ô Hư viên

Công thức → thành phẩm: Hộ Điền Trận Kỳ → Hộ Điền Trận Kỳ
Điều kiện: Trúc Cơ · trận pháp cấp 10
Nguyên liệu: 4 Linh nhưỡng, 10 Linh tuyền, 3 Thanh Thiết Tinh
Phí · thời gian: 1.000 linh thạch · 15 phút
Công dụng: bỏ debuff sự kiện sâu linh, không tăng vượt 15% bonus

Công thức → thành phẩm: Dưỡng Chủng Ngọc Hạp → Dưỡng Chủng Ngọc Hạp
Điều kiện: Trúc Cơ · luyện khí cấp 10
Nguyên liệu: 4 Linh nhưỡng, 10 Linh tuyền, 3 Thanh Thiết Tinh
Phí · thời gian: 1.000 linh thạch · 15 phút
Công dụng: chế hộp lưu 10 hạt giống, không tạo hạt miễn phí

Công thức → thành phẩm: Khế Ước Đồng Tâm Hạp → Khế Ước Đồng Tâm Hạp
Điều kiện: Nguyên Anh · luyện khí cấp 30
Nguyên liệu: 4 Linh nhưỡng, 10 Linh tuyền, 3 Nguyên Tủy Ngọc
Phí · thời gian: 8.000 linh thạch · 45 phút
Công dụng: đạo cụ lễ kết nghĩa/kết hôn, không cộng sức mạnh riêng

Công thức → thành phẩm: Tinh Mộc Trang Trí Kệ → Tinh Mộc Trang Trí Kệ
Điều kiện: Hóa Thần · luyện khí cấp 40
Nguyên liệu: 4 Linh nhưỡng, 10 Linh tuyền, 3 Hóa Linh Kim
Phí · thời gian: 20.000 linh thạch · 60 phút
Công dụng: đồ trang trí động phủ, không tăng tốc độ offline

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Mười hai công pháp và 60 kỹ năng

Tài liệu thiết kế · Mở rộng V2

Mỗi công pháp bổ sung gồm bốn kỹ năng chủ động và một nội tại. Bảng dưới ghi điều kiện kích hoạt, tác dụng và chi phí vận hành. A là công phù hợp của tu sĩ, H là sinh lực tối đa, MP là linh lực trong trận.

Tàng thư công pháp

Công pháp: Tàng Phong Tâm Quyết
Hướng tu · cảnh giới: Kiếm · Nguyên Anh
Nguồn học: quest build chương phù hợp · NPC sect hoặc Mộ Đan Tàn Ảnh lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Đoạn Giới Thiên Kiếm Kinh
Hướng tu · cảnh giới: Kiếm · Khuy Niết
Nguồn học: quest build chương phù hợp · NPC sect hoặc Lôi Trì Phong Ấn lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Ngự Lôi Linh Kinh
Hướng tu · cảnh giới: Lôi · Hóa Thần
Nguồn học: quest build chương phù hợp · NPC sect hoặc Huyền Cốt Động lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Cửu Kiếp Lôi Điển
Hướng tu · cảnh giới: Lôi · Không Niết
Nguồn học: quest build chương phù hợp · NPC sect hoặc U Đăng Cổ Các lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Huyền Cốt Chân Pháp
Hướng tu · cảnh giới: Luyện thể · Nguyên Anh
Nguồn học: quest build chương phù hợp · NPC sect hoặc Vạn Cấm Lưu Lang lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Cổ Diệu Tinh Thể Kinh
Hướng tu · cảnh giới: Luyện thể · Toái Niết
Nguồn học: quest build chương phù hợp · NPC sect hoặc Đoạn Giới Kiếm Trủng lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Tịch Hồn Khế Điển
Hướng tu · cảnh giới: Hồn · Anh Biến
Nguồn học: quest build chương phù hợp · NPC sect hoặc Táng Lôi Tinh Uyên lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Vô Sinh Ngự Hồn Kinh
Hướng tu · cảnh giới: Hồn · Không Linh
Nguồn học: quest build chương phù hợp · NPC sect hoặc Cổ Diệu Phế Thành lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Thiên Văn Cấm Lục
Hướng tu · cảnh giới: Cấm trận · Vấn Đỉnh
Nguồn học: quest build chương phù hợp · NPC sect hoặc Vô Sinh Mộng Vực lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Vạn Giới Cấm Thư
Hướng tu · cảnh giới: Cấm trận · Không Huyền
Nguồn học: quest build chương phù hợp · NPC sect hoặc Quy Tắc Thiên Cung lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Hắc Hà Tự Chủ Kinh
Hướng tu · cảnh giới: Ma tu · Nguyên Anh
Nguồn học: quest build chương phù hợp · NPC sect hoặc Hắc Hà Khế Ngục lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Công pháp: Nghịch Mệnh Ma Đạo Lục
Hướng tu · cảnh giới: Ma tu · Không Niết
Nguồn học: quest build chương phù hợp · NPC sect hoặc Quy Nguyên Chứng Đài lần đầu, đường đổi 20 cống hiến khảo chứng nghề

Tàng Phong Tâm Quyết

Kỹ năng: Tàng Kiếm Thức
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 180% A, nhận 1 kiếm ý
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Lạc Phong Phá
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · 160% A, giảm giáp 10%6 s
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Tam Ấn Quy Kiếm
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 kiếm ý, gây 380% A · nếu chưa đủ dùng đòn thường
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Tĩnh Kiếm Hộ Mạch
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · khiên 10% H và kháng câm lặng 15%5 s
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Kiếm Tức Liên Hoàn
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · mỗi 3 skill kiếm khác tên trả 4 linh lực, hồi 12 s
Linh lực · hồi chiêu: Xem tác dụng nội tại

Đoạn Giới Thiên Kiếm Kinh

Kỹ năng: Đoạn Giới Nhất Tuyến
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 280% A, thêm 1 kiếm ý khi địch có khiên
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Hư Kiếm Trảm
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · 230% A, xóa giả ảnh thường tối đa 1
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Tàn Dạ · Diễn Pháp
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 kiếm ý,500% A lên một hoặc 300% A lên 3 địch · ảnh chân trời bình minh
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Vô Phong Định Thế
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · giảm 15% damage 4 s, đòn kiếm kế thêm 100% A
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Chấp Kiếm Vô Hồi
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · một địch còn trận tăng 8% sát thương gốc kiếm · không cộng dồn
Linh lực · hồi chiêu: Xem tác dụng nội tại

Ngự Lôi Linh Kinh

Kỹ năng: Dẫn Lôi Tiểu Ấn
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 170% A,1 điện ấn, tối đa 3
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Lôi Trì Khóa Mạch
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · 130% A lên 3 địch, chậm 15%4 s
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Tam Lôi Hội Tụ
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 điện ấn,400% A và 20 break
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Định Thân Thuật · Tàn Quyển
Loại: Chủ động
Điều kiện và tác dụng: boss đang niệm một đòn có thể ngắt, hoặc đối thủ PvP chưa có miễn nhiễm khống chế · giữ địch thường 1 s · boss+20 break · PvP 0.4 s, hồi khống chế chung 8 s
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Lôi Tức Quy Nguyên
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · khi điện ấn đủ 3 hồi 5 linh lực, hồi 14 s
Linh lực · hồi chiêu: Xem tác dụng nội tại

Cửu Kiếp Lôi Điển

Kỹ năng: Huyền Kiếp Lôi Chỉ
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 300% A, điện ấn
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Hô Phong · Diễn Pháp
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · 180% A lên 3 địch, giảm chính xác 8%4 s
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Cửu Lôi Phá Ách
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 điện ấn,540% A chia 3 lần, ngắt đòn thường
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Hoán Vũ · Diễn Pháp
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · hồi 10% H và thủy ấn cho địch 5 s
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Kiếp Lôi Tự Chủ
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · bị chịu lôi tăng kháng lôi 8%6 s, hồi 16 s
Linh lực · hồi chiêu: Xem tác dụng nội tại

Huyền Cốt Chân Pháp

Kỹ năng: Ngọc Cốt Chấn
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 180% A+10 break,1 cương ấn
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Huyền Cốt Phản Chấn
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · giảm 10% damage 3 s, phản 140% A lần đầu bị đánh
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Tam Trụ Băng Quyền
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 cương ấn,380% A+25 break
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Bất Động Hộ Tâm
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · khiên 12% H 6 s, kháng đẩy 10%
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Thân Tức Bất Tán
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · tạo phá thế và hồi 4% H, hồi 16 s
Linh lực · hồi chiêu: Xem tác dụng nội tại

Cổ Diệu Tinh Thể Kinh

Kỹ năng: Tinh Thể Phá Nhạc
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 280% A+15 break
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Cổ Tượng Trấn Mạch
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · giảm 12% damage 4 s, nhận 1 cương ấn
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Cửu Tinh Quyền Ảnh
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 cương ấn,520% A+35 break · ảnh cổ thể không actor
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Huyết Mạch Quy Nguyên
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · hồi 14% H trong 4 s, không nhân doT
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Cổ Tâm Kiên Định
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · HP dưới 40% tăng kháng khống chế 15%, không bất tử
Linh lực · hồi chiêu: Xem tác dụng nội tại

Tịch Hồn Khế Điển

Kỹ năng: Tịch Hồn Khế Ấn
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 160% A,1 hồn ấn 6 s
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: U Hỏa Khấu Hồn
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · 40% A mỗi giây × 5, thời gian sát thương định kỳ không tự làm mới vô hạn
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Tam Khế Tịch Diệt
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 hồn ấn,400% A, hồi 4 linh lực
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Tàng Hồn Hộ Chủ
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · gỡ 1 suy hồn, khiên 8% H
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Khế Tức Hồi Lưu
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · hồn ấn bị xóa trả 1/2 chi phí linh lực, hồi 15 s · không tự tạo vòng
Linh lực · hồi chiêu: Xem tác dụng nội tại

Vô Sinh Ngự Hồn Kinh

Kỹ năng: Vô Sinh Hồn Chỉ
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 280% A, giảm hồi 20%5 s
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Niệm Ảnh Truy Hồn
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · triệu 1 ảnh đánh 2 lần 120% A, không actor/phần thưởng
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Chấp Niệm Táng Hồn
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 hồn ấn,560% A, suy công 8%4 s
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Tĩnh Niệm Hồi Đăng
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · hồi 12% H, giảm ma chướng 10 nếu có
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Tịch Ấn Bất Tán
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · lần đầu DOT bị tịnh giữ 1 hồn ấn, hồi 18 s
Linh lực · hồi chiêu: Xem tác dụng nội tại

Thiên Văn Cấm Lục

Kỹ năng: Thiên Văn Khắc Ấn
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 150% A, đặt 1 cấm ấn 8 s
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Phong Môn Khế Tỏa
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · 120% A, xóa 1 buff thường
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Tam Cấm Liên Bạo
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 ấn,420% A, giảm giáp 10%5 s
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Định Tâm Trận Giáp
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · khiên 12% H, giảm chậm 20%6 s
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Cấm Tức Tuần Hoàn
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · nổ cấm ấn trả 5 linh lực, hồi 15 s
Linh lực · hồi chiêu: Xem tác dụng nội tại

Vạn Giới Cấm Thư

Kỹ năng: Huyền Giới Lạc Ấn
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 260% A,1 cấm ấn
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Lưu Nguyệt · Diễn Pháp
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · giảm tốc 10%3 s · chủ giảm một hồi thường 2 s · không sửa đồng hồ idle
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Vạn Cấm Quy Nhất
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 ấn,580% A chia 2 nhịp, không nhân mỗi nhịp sát thương định kỳ
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Giới Môn Hộ Đạo
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · ngăn 1 projectile thường, khiên 10% H
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Tự Luật Cấm Tâm
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · không vi phạm luật encounter 15 snhận 1 ấn, hồi 20 s
Linh lực · hồi chiêu: Xem tác dụng nội tại

Hắc Hà Tự Chủ Kinh

Kỹ năng: Dẫn Sát Khai Khế
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 190% A,1 sát ấn, ma chướng+8
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Hắc Hà Hồn Tức
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · 160% A,1 hồn ấn, ma chướng+12
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Nghịch Huyết Bạo
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 sát ấn,430% A, tiêu 3% HP hiện có, ma chướng+18 · không tự hạ dưới 15% H
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Tự Chủ Tĩnh Ma
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · giảm 20 ma chướng, khiên 6% H
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Khế Ma Bất Khuất
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · phản phệ kết thúc hồi 4% H, hồi 30 s
Linh lực · hồi chiêu: Xem tác dụng nội tại

Nghịch Mệnh Ma Đạo Lục

Kỹ năng: Ma Tâm Nghịch Chỉ
Loại: Chủ động
Điều kiện và tác dụng: có mục tiêu hợp lệ · 300% A,1 sát ấn, ma chướng+8
Linh lực · hồi chiêu: 8% linh lực tối đa · 10 giây

Kỹ năng: Vạn Khế Truy Ảnh
Loại: Chủ động
Điều kiện và tác dụng: mục tiêu chưa có debuff tương ứng · 260% A, xóa 1 buff thường, ma chướng+12
Linh lực · hồi chiêu: 10% linh lực tối đa · 14 giây

Kỹ năng: Nghịch Mệnh Phá Chướng
Loại: Chủ động
Điều kiện và tác dụng: đủ 3 ấn đúng loại · không dùng khi tài nguyên thiếu · tiêu 3 sát ấn,600% A, ma chướng+18, không vượt mức hồi chiêu của tuyệt kỹ
Linh lực · hồi chiêu: 18% linh lực tối đa · 30 giây

Kỹ năng: Vô Ma Tự Chứng
Loại: Chủ động
Điều kiện và tác dụng: chủ dưới 60% HP hoặc địch đang niệm tùy tác dụng · giảm 25 ma chướng, kháng khống chế 15%6 s
Linh lực · hồi chiêu: 12% linh lực tối đa · 24 giây

Kỹ năng: Ngự Ma Minh Tâm
Loại: Nội tại
Điều kiện và tác dụng: sự kiện nội tại · khi 40–69 chướng, thêm 6% sát thương hồn · khi≥90 không còn bonus
Linh lực · hồi chiêu: Xem tác dụng nội tại

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Mười sáu ý cảnh và các nhánh nghiên cứu

Tài liệu thiết kế · Mở rộng V2

Hóa phàm đưa tu sĩ trở lại đời sống bình thường và trao lựa chọn qua những câu chuyện sinh tử, nhân quả, chân giả. Từ Hóa Thần có một ý cảnh chính. Từ Vấn Đỉnh có thể chọn thêm một tiếng vọng với 25% tác dụng gốc.

Mỗi ý cảnh có sáu nút theo thứ tự Lĩnh ngộ, hai nhánh Diễn pháp Công và Thủ, Tinh nghiên, Thâm ngộ, Chứng cảnh. Trong chiến đấu chỉ áp dụng nhánh đang chọn.

Mười sáu cây ý cảnh

Ý cảnh: Sinh Tử
Mốc: Hóa Thần
Cơ chế gốc: mỗi lần chủ mất hoặc hồi ít nhất 3% H nhận 1 sinh tử ấn, hồi nội 3 s, tối đa 5
Nhánh công / thủ: tiêu 3 ấn:đòn kế thêm 160% A / tiêu 3 ấn:khiên 8% H
Chứng cảnh: khi đủ 5 ấn, chọn theo auto:hồi 12% H hoặc đánh 320% A, hồi 25 s

Ý cảnh: Nhân Quả
Mốc: Hóa Thần
Cơ chế gốc: đánh dấu một địch 6 s, lưu 10% sát thương chủ nhận, trần 250% A
Nhánh công / thủ: tăng trần lưu lên 300% A / trả quả đồng thời hồi 4% H
Chứng cảnh: kết thúc dấu trả tối đa 420% A, hồi 28 s · không ghi lại sát thương phản

Ý cảnh: Chân Giả
Mốc: Hóa Thần
Cơ chế gốc: sau 2 kỹ năng khác tag tạo 1 giả ảnh, hồi 12 s
Nhánh công / thủ: giả ảnh kết thúc thêm 120% A / giả ảnh chặn 1 đòn thường, hệ số không cộng né
Chứng cảnh: giả ảnh tan xóa 1 debuff và đánh 240% A, hồi 30 s

Ý cảnh: Sát Lục
Mốc: Hóa Thần
Cơ chế gốc: mỗi 3 đòn trúng nhận 1 sát ấn, tối đa 5, không đòi giết quái
Nhánh công / thủ: tiêu 3 ấn tăng bạo kích đòn kế 8 điểm / tiêu 3 ấn giảm sát thương nhận 6% trong 4 s
Chứng cảnh: tiêu 5 ấn vào địch dưới 35% HP thêm 360% A, hồi 28 s · boss luôn có ích

Ý cảnh: Luân Hồi
Mốc: Anh Biến
Cơ chế gốc: dùng 4 kỹ năng khác nhau cho 1 luân ấn, tối đa 2
Nhánh công / thủ: luân ấn tăng 10% hệ số skill kế / luân ấn hồi 5% H
Chứng cảnh: hai ấn làm mới hồi kỹ năng thường tối đa 4 s, hồi 30 s · không reset ultimate

Ý cảnh: Thủ Hộ
Mốc: Hóa Thần
Cơ chế gốc: chặn đòn hoặc khiên vỡ nhận 1 hộ ấn, tối đa 4, hồi 3 s
Nhánh công / thủ: phản kích sau tiêu ấn thêm 120% A / tiêu 2 ấn tạo khiên 10% H
Chứng cảnh: khi đồng minh tạm xuất hiện chủ nhận khiên 14% H, hồi 35 s · không cần kết hôn

Ý cảnh: Vô Thường
Mốc: Anh Biến
Cơ chế gốc: mỗi khi boss đổi pha nhận 2 vô thường ấn, tối đa 4
Nhánh công / thủ: đòn đầu sau pha thêm 140% A / pha mới gỡ 1 chậm hoặc suy hồn
Chứng cảnh: tiêu 4 ấn chọn thích nghi:loại sát thương gần nhất kháng 12% 8 s, hồi 30 s

Ý cảnh: Tịch Diệt
Mốc: Vấn Đỉnh
Cơ chế gốc: DOT hoàn tất đủ thời lượng nhận 1 tịch ấn, tối đa 3
Nhánh công / thủ: đòn DOT cuối thêm 80% A / DOT cuối hồi 3% H, hồi 8 s
Chứng cảnh: tiêu 3 ấn giảm hồi phục địch 30% và 240% A, hồi 30 s

Ý cảnh: Bất Khuất
Mốc: Vấn Đỉnh
Cơ chế gốc: bị khống chế nhận 1 kiên ấn, tối đa 3, hồi 5 s
Nhánh công / thủ: sau thoát khống chế tăng 8% công 4 s / giảm 20% thời lượng khống chế kế
Chứng cảnh: tiêu 3 ấn gỡ 1 khóa kỹ năng, khiên 10% H, hồi 32 s

Ý cảnh: Vong Tình
Mốc: Vấn Đỉnh
Cơ chế gốc: bỏ một buff ngắn qua tự chọn auto nhận 1 tĩnh ấn, hồi 10 s
Nhánh công / thủ: tiêu ấn tăng xuyên giáp 5 điểm 4 s / tiêu ấn tăng kháng hồn 8%4 s
Chứng cảnh: tiêu 3 ấn xóa 1 buff thường của địch, đánh 280% A, hồi 30 s

Ý cảnh: Hữu Tình
Mốc: Hóa Thần
Cơ chế gốc: chữa chủ/pet hoặc trợ chiến xuất hiện cho 1 tình ấn, hồi 6 s, tối đa 3
Nhánh công / thủ: tiêu ấn đòn kế thêm 100% A / tiêu ấn heal thêm 3% H
Chứng cảnh: tiêu 3 ấn hồi 12% H và gỡ 1 debuff, hồi 32 s · NPC/bạn bè tương đương đạo lữ

Ý cảnh: Tự Tại
Mốc: Khuy Niết
Cơ chế gốc: dùng skill ngoài hai tag gần nhất cho 1 tự tại ấn, tối đa 3
Nhánh công / thủ: tiêu ấn giảm tiêu mana skill kế 4 điểm phần trăm / tiêu ấn tăng né 4 điểm 4 s
Chứng cảnh: tiêu 3 ấn giảm một hồi thường 3 s và 180% A, hồi 30 s

Ý cảnh: Cô Phong
Mốc: Khuy Niết
Cơ chế gốc: khi chỉ có 1 mục tiêu địch nhận 1 phong ấn mỗi 8 s, tối đa 3
Nhánh công / thủ: đơn mục tiêu thêm 8% sát thương gốc skill kế / mục tiêu đơn gây lên chủ giảm 6%4 s
Chứng cảnh: tiêu 3 ấn đơn kích 380% A, hồi 30 s · khi AoE đổi thành 220% A mỗi 2 địch

Ý cảnh: Chấp Niệm
Mốc: Tịnh Niết
Cơ chế gốc: liên tục chọn cùng mục tiêu 3 skill cho 1 niệm ấn, tối đa 3
Nhánh công / thủ: tiêu ấn chống xóa 1 dấu đã đặt / tiêu ấn giữ 1 buff bản thân thêm 1 s
Chứng cảnh: tiêu 3 ấn đòn kế thêm 340% A, hồi 30 s · đổi mục tiêu không mất nghiên cứu

Ý cảnh: Tín Niệm
Mốc: Không Niết
Cơ chế gốc: hoàn một điều kiện auto đã đăng ký cho 1 tín ấn, hồi 10 s, tối đa 3
Nhánh công / thủ: tiêu ấn tăng 12% hệ số skill chủ kế / tiêu ấn khiên 7% H
Chứng cảnh: tiêu 3 ấn gây 400% A hoặc heal 14% H, hồi 35 s

Ý cảnh: Quy Nhất
Mốc: Không Huyền
Cơ chế gốc: trong 12 s dùng công pháp, pet, pháp bảo cho 1 nhất ấn, hồi 15 s, tối đa 2
Nhánh công / thủ: tiêu ấn đòn kế cộng 120% A / tiêu ấn cho 5 linh lực
Chứng cảnh: tiêu 2 ấn làm combo nguồn đã trang bị thêm 20% hệ số một lần, hồi 40 s

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Mười hai bản nguyên và 24 tổ hợp

Tài liệu thiết kế · Mở rộng V2

Khuy Niết mở một bản nguyên chính và một phụ. Chỉ một tổ hợp từ hai bản nguyên đang trang bị có hiệu lực. Phong, Không Gian và Thời Gian là ba chủ đề bản nguyên bổ sung riêng cho game.

Hồ sơ bản nguyên

Bản nguyên: Sinh Tử
Điều kiện: Khuy Niết
Chủ đề: hồi phục chuyển hóa
Tác dụng gốc: sau heal tích 10% lượng heal, trần 10% H · tiêu thành khiên hoặc 80% A/10 s

Bản nguyên: Nhân Quả
Điều kiện: Khuy Niết
Chủ đề: đánh dấu rồi trả theo sự kiện
Tác dụng gốc: mục tiêu đánh dấu gây 3 đòn thì nhận 180% A phản hồi, hồi 16 s

Bản nguyên: Chân Giả
Điều kiện: Khuy Niết
Chủ đề: ảnh và nhận diện
Tác dụng gốc: sau giả ảnh tan skill chủ kế+100% A, hồi 14 s

Bản nguyên: Cấm Chế
Điều kiện: Khuy Niết
Chủ đề: đặt luật hạn chế hữu hạn
Tác dụng gốc: đặt 2 cấm ấn rồi nổ 160% A, kéo buff chủ 1 s, hồi 16 s

Bản nguyên: Sát Lục
Điều kiện: Tịnh Niết
Chủ đề: áp lực và kết liễu
Tác dụng gốc: đánh địch dưới 40% HP thêm 120% A/12 s

Bản nguyên: Lôi
Điều kiện: Khuy Niết
Chủ đề: dẫn điện, phá nhịp
Tác dụng gốc: mỗi 3 đòn lôi nảy 80% A lên 2 mục tiêu, hồi 12 s

Bản nguyên: Hỏa
Điều kiện: Khuy Niết
Chủ đề: thiêu đốt, chuyển năng lượng
Tác dụng gốc: DOT hỏa đủ 4 tick thêm 100% A, hồi 12 s

Bản nguyên: Thủy
Điều kiện: Khuy Niết
Chủ đề: giảm tốc và hồi phục
Tác dụng gốc: sau giảm tốc hồi 4% H, hồi 14 s

Bản nguyên: Thổ
Điều kiện: Khuy Niết
Chủ đề: giữ thế, phòng hộ
Tác dụng gốc: bị 3 đòn nhận khiên 6% H, hồi 14 s

Bản nguyên: Phong
Điều kiện: Tịnh Niết
Chủ đề: chuyển nhịp kỹ năng
Tác dụng gốc: dùng 3 skill khác tên hồi 6 linh lực, hồi 14 s

Bản nguyên: Không Gian
Điều kiện: Không Niết
Chủ đề: neo vị trí, sai lệch projectile
Tác dụng gốc: ngăn 1 projectile thường và 80% A phản, hồi 22 s

Bản nguyên: Thời Gian
Điều kiện: Không Linh
Chủ đề: nhịp trong mô phỏng trận
Tác dụng gốc: sau 20 s giảm hồi skill thường đang hồi 2 s, hồi 20 s · không sửa đồng hồ server

Hai mươi bốn tổ hợp

Tên tổ hợp: Nhân Quả Luân Hồi
Cặp bản nguyên: Sinh Tử, Nhân Quả
Điều kiện · chứng riêng: Toái Niết · nút 3 · chứng 2 kết quả trong chương Hóa phàm
Tác dụng: khi dấu Nhân Quả trả, sử dụng pool Sinh Tử cho khiên 8% H · hồi 24 s

Tên tổ hợp: Sinh Hỏa Tương Tức
Cặp bản nguyên: Sinh Tử, Hỏa
Điều kiện · chứng riêng: Toái Niết · nút 3 · hoànD 02 không NPC ngã
Tác dụng: DOT hỏa cuối hồi 5% H · hồi 16 s

Tên tổ hợp: Tịnh Thủy Hồi Sinh
Cặp bản nguyên: Sinh Tử, Thủy
Điều kiện · chứng riêng: Toái Niết · nút 3 · giữ cây thuốc trong chương 2
Tác dụng: heal trực tiếp tạo khiên 6% H · hồi 18 s

Tên tổ hợp: Sát Sinh Tương Chuyển
Cặp bản nguyên: Sinh Tử, Sát Lục
Điều kiện · chứng riêng: Toái Niết · nút 3 · giải ơn khế ở U Đăng Cổ Các
Tác dụng: địch dưới 35% HP nhận thêm 220% A · chủ hồi 4% H · hồi 24 s

Tên tổ hợp: Truy Ảnh Tầm Nhân
Cặp bản nguyên: Nhân Quả, Chân Giả
Điều kiện · chứng riêng: Toái Niết · nút 3 · phá hình giả ở Vô Sinh Mộng Vực
Tác dụng: đòn địch phá giả ảnh kích dấu Nhân Quả 120% A · hồi 20 s

Tên tổ hợp: Sát Nghiệp Hồi Báo
Cặp bản nguyên: Nhân Quả, Sát Lục
Điều kiện · chứng riêng: Toái Niết · nút 3 · qua quest Sát Tâm không chạm 90 chướng
Tác dụng: nhận 3 đòn trong dấu, đòn phản thêm 160% A · hồi 22 s

Tên tổ hợp: Niên Luân Nghiệp
Cặp bản nguyên: Nhân Quả, Thời Gian
Điều kiện · chứng riêng: Không Linh · nút 5 · chứng nhịp thời gian Quy Tắc Thiên Cung
Tác dụng: ghi 4 s, kết thúc giảm hồi thường 2 s, không reset dấu · hồi 28 s

Tên tổ hợp: Hư Giới Ảnh
Cặp bản nguyên: Chân Giả, Không Gian
Điều kiện · chứng riêng: Không Niết · nút 3 · vượt 4 neo khu săn 8
Tác dụng: né 1 projectile bằng ảnh, đòn chủ kế+180% A · hồi 26 s

Tên tổ hợp: Lưỡng Nghi Cấm
Cặp bản nguyên: Chân Giả, Cấm Chế
Điều kiện · chứng riêng: Toái Niết · nút 3 · giải 3 chuỗi cấm Vạn Cấm Lưu Lang
Tác dụng: giả ảnh tan tan thêm 1 cấm ấn, tối đa 1/18 s

Tên tổ hợp: Mộng Tuế
Cặp bản nguyên: Chân Giả, Thời Gian
Điều kiện · chứng riêng: Không Linh · nút 5 · đánh boss Vô Sinh Mộng Vực bằng 3 tag
Tác dụng: ảnh ghi 1 skill thường, phát lại 35% sát thương gốc, tối đa 180% A · hồi 28 s

Tên tổ hợp: Thiên Lôi Cấm Vực
Cặp bản nguyên: Cấm Chế, Lôi
Điều kiện · chứng riêng: Toái Niết · nút 3 · vượtD 07 đúng 3 nhịp
Tác dụng: cấm ấn nổ thêm 100% A lôi và 10 break · hồi 18 s

Tên tổ hợp: Sơn Hà Cấm
Cặp bản nguyên: Cấm Chế, Thổ
Điều kiện · chứng riêng: Toái Niết · nút 3 · giữ cổ trụ chương Cổ Thần 4
Tác dụng: khiên Thổ hết tự nhiên đặt 1 ấn, lần trận nổ kế+120% A · hồi 22 s

Tên tổ hợp: Tỏa Giới
Cặp bản nguyên: Cấm Chế, Không Gian
Điều kiện · chứng riêng: Không Niết · nút 3 · khóa vết giới Quy Tắc Thiên Cung
Tác dụng: xóa 1 buff thường khi địch projectile bị chặn · hồi 26 s

Tên tổ hợp: Kiếp Sát Lôi
Cặp bản nguyên: Sát Lục, Lôi
Điều kiện · chứng riêng: Toái Niết · nút 3 · breakToái Giới Thiết Ngưu
Tác dụng: đánh địch dưới 40% HP bằng lôi nổ 220% A · hồi 22 s

Tên tổ hợp: Sát Hỏa
Cặp bản nguyên: Sát Lục, Hỏa
Điều kiện · chứng riêng: Toái Niết · nút 3 · vượt thử kiềm ma Hóa Thần
Tác dụng: mỗi 4 mỗi nhịp hỏa vào địch có dấu sát thêm 130% A · hồi 18 s

Tên tổ hợp: Dẫn Lôi Huyền Thủy
Cặp bản nguyên: Lôi, Thủy
Điều kiện · chứng riêng: Toái Niết · nút 3 · phá thủy trụ Lôi Trì Phong Ấn
Tác dụng: địch đang chậm bị lôi nảy 160% A lên 2 địch · hồi 20 s

Tên tổ hợp: Phong Lôi
Cặp bản nguyên: Lôi, Phong
Điều kiện · chứng riêng: Toái Niết · nút 3 · vượt cầu gió khu săn 5
Tác dụng: sau 3 tag khác nhau, lôi kế giảm tiêu linh lực 5 điểm và thêm 120% A · hồi 20 s

Tên tổ hợp: Dung Nham Trấn
Cặp bản nguyên: Hỏa, Thổ
Điều kiện · chứng riêng: Toái Niết · nút 3 · hộ lò khu săn 6
Tác dụng: đốt xong một nhịp tạo khiên 6% H · hồi 18 s

Tên tổ hợp: Liệt Diễm Hỏa Vũ
Cặp bản nguyên: Hỏa, Phong
Điều kiện · chứng riêng: Toái Niết · nút 3 · đánhD 07 không roll thay build
Tác dụng: hỏa DOT kết thúc đánh mục tiêu khác 140% A · hồi 18 s

Tên tổ hợp: Trấn Hải
Cặp bản nguyên: Thủy, Thổ
Điều kiện · chứng riêng: Toái Niết · nút 3 · hoàn áp suất khu săn 7
Tác dụng: khiên Thổ vỡ làm chậm 15%3 s, hồi 3% H · hồi 20 s

Tên tổ hợp: Ngưng Triều
Cặp bản nguyên: Thủy, Thời Gian
Điều kiện · chứng riêng: Không Linh · nút 5 · qua khảo nghiệm 4 của Ngũ suy
Tác dụng: giảm tốc độ địch 10%3 s, sau đó trả 4 linh lực · hồi 26 s

Tên tổ hợp: Phong Giới Thạch
Cặp bản nguyên: Thổ, Không Gian
Điều kiện · chứng riêng: Không Niết · nút 3 · giữ 4 neo Không Niết
Tác dụng: chặn projectile tạo khiên 8% H · hồi 24 s

Tên tổ hợp: Xuyên Vực
Cặp bản nguyên: Phong, Không Gian
Điều kiện · chứng riêng: Không Niết · nút 3 · hoàn nhánh Tự Tại chương 7
Tác dụng: sau 3 skill khác tag, đòn kế xuyên giáp 8 điểm · hồi 24 s

Tên tổ hợp: Sát Na Giới
Cặp bản nguyên: Không Gian, Thời Gian
Điều kiện · chứng riêng: Không Linh · nút 5 · hoàn Huyền Kiếp thứ 9
Tác dụng: đặt dấu 3 s, trìhoãn 20% sát thương đến cuối 3 s, tổng không giảm · đổi lại ghi 180% A phản · hồi 35 s

Cây bản nguyên có năm nấc Nguyên chủng, Nguyên lưu, Nguyên tướng, Chân nguyên và Hợp nguyên. Tổ hợp thông thường dùng 30 mảnh mỗi bên, 300 cảm ngộ và phí. Loại có Thời Gian dùng 50 mảnh mỗi bên và 600 cảm ngộ.

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Mười hai đạo hữu và 36 nhiệm vụ riêng

Tài liệu thiết kế · Mở rộng V2

Quan hệ phát triển qua sáu bậc Sơ ngộ (0), Tương thức (100), Tin cậy (250), Tri kỷ (450), Đồng hành (700) và Đồng tâm (1.000). Mỗi NPC có ba nhiệm vụ, lần đầu lần lượt cho 100, 150 và 200 điểm.

Xem thêm: Đấu Trường, Tỉ Võ, bang hội và Chợ. Xem quy tắc dùng Đạo Lữ trong Đấu Trường và Tông Môn Tỉ Võ (13/11).

Từ 450 điểm và hoàn nhiệm vụ thứ ba, người chơi có thể mở trợ chiến hoặc kết nghĩa. 700 điểm mở tuyến tình cảm cho NPC đủ điều kiện. 1.000 điểm cùng tuyến lời hứa mở khả năng hôn phối. Kết nghĩa và tình bạn cũng cho hiệu quả chiến đấu tương đương.

Hồ sơ và chiêu trợ chiến

Đạo hữu: Bạch Tố
Vai trò · mốc gặp: đan sư · Nguyên Anh
Trợ chiến: Tịnh Mạch: hồi 8% H và gỡ 1 độc · hồi 45 s
Tuyến tình cảm: Có

Đạo hữu: Mặc Nghiên
Vai trò · mốc gặp: hồn tu giữ khế · Nguyên Anh
Trợ chiến: Dẫn Đăng: xóa 1 buff thường của địch và gây 120% A · hồi 45 s
Tuyến tình cảm: Có

Đạo hữu: Lạc Tinh Dao
Vai trò · mốc gặp: quan tinh sư · Hóa Thần
Trợ chiến: Tinh Châm: 150% A và thêm 15 điểm phá tư thế · hồi 45 s
Tuyến tình cảm: Có

Đạo hữu: Yên Từ
Vai trò · mốc gặp: cấm trận sư · Vấn Đỉnh
Trợ chiến: Tĩnh Trận: khiên 10% H trong 5 s và giảm 15% sát thương đòn niệm kế · hồi 45 s
Tuyến tình cảm: Có

Đạo hữu: Sở Kình
Vai trò · mốc gặp: luyện thể · Nguyên Anh
Trợ chiến: Trấn Bộ: chặn tối đa 8% H sát thương trong 3 s rồi đánh 130% A · hồi 45 s
Tuyến tình cảm: Có

Đạo hữu: Tô Hành
Vai trò · mốc gặp: kiếm tu du hành · Nguyên Anh
Trợ chiến: Hồi Phong Trảm: 190% A lên mục tiêu bị phá giáp, nếu chưa có thì 140% A · hồi 45 s
Tuyến tình cảm: Có

Đạo hữu: Nguyệt Chi
Vai trò · mốc gặp: thủy pháp và huyễn thuật · Anh Biến
Trợ chiến: Thủy Kính: gỡ 1 chậm và giảm chính xác địch 10% trong 5 s · hồi 45 s
Tuyến tình cảm: Có

Đạo hữu: Trầm Uyên
Vai trò · mốc gặp: người giữ ký ức · Khuy Niết
Trợ chiến: Hồi Ảnh: hoàn 5% linh lực tối đa và hồi 5% H · không tua lại kết quả máy chủ · hồi 45 s
Tuyến tình cảm: Có

Đạo hữu: Tề Nham
Vai trò · mốc gặp: người giữ di tích · Nguyên Anh
Trợ chiến: Cốt Trận: khiên 8% H và kháng phản phép 10% trong 5 s · hồi 45 s
Tuyến tình cảm: Chỉ đồng hành hoặc kết nghĩa

Đạo hữu: Linh Quân
Vai trò · mốc gặp: giáo tập tông môn · Hóa Thần
Trợ chiến: Chỉnh Tức: xóa một suy yếu và tăng hồi phục nhận 10% trong 6 s · hồi 45 s
Tuyến tình cảm: Chỉ đồng hành hoặc kết nghĩa

Đạo hữu: Hạ Vân
Vai trò · mốc gặp: thư lại nghiên cứu ý cảnh · Vấn Đỉnh
Trợ chiến: Khảo Chứng: đánh dấu mục tiêu 6 s để đòn kế gây thêm 100% A · hồi 45 s
Tuyến tình cảm: Chỉ đồng hành hoặc kết nghĩa

Đạo hữu: Từ Hạc
Vai trò · mốc gặp: thợ mộc phàm nhân · Hóa Thần
Trợ chiến: Mộc Tâm: tượng gỗ ký ức tạo khiên 7% H và hồi 3% H · không đưa phàm nhân thật vào chiến trường · hồi 45 s
Tuyến tình cảm: Chỉ đồng hành hoặc kết nghĩa

Nhiệm vụ và hệ quả

Đạo hữu: Bạch Tố
Nhiệm vụ: Dược Khê Không Còn Nước
Lựa chọn: Tìm mạch nước bị cấm trận chặn · ưu tiên cứu ruộng thuốc hoặc dẫn nước về trạm bệnh
Hệ quả: cứu ruộng: nhận giống quý · cứu trạm: nhận ghi chép trị thương · cùng +100 thiện cảm

Đạo hữu: Bạch Tố
Nhiệm vụ: Một Thang Thuốc Hai Người
Lựa chọn: Có đủ thuốc thường cứu cả hai · chọn tự đi lấy thuốc hoặc nhờ tông môn và nhận món nợ nhiệm vụ
Hệ quả: tự đi: mở cảnh đi đêm · nhờ giúp: mở nhiệm vụ trả ân · cùng +150 thiện cảm

Đạo hữu: Bạch Tố
Nhiệm vụ: Tên Người Trong Dược Điển
Lựa chọn: Tìm tác giả công thức thất truyền · công khai đồng tác giả hoặc lưu bản riêng để bảo vệ nhân chứng
Hệ quả: công khai: danh thiếp học giả · giữ kín: thư tri kỷ · cùng +200 thiện cảm

Đạo hữu: Mặc Nghiên
Nhiệm vụ: Đèn Không Có Chủ
Lựa chọn: Một đèn hồn giữ tiếng nói người mất · chọn giải lời nhắn hoặc tìm thân nhân còn sống
Hệ quả: giải lời nhắn: ngọc giản ký ức · tìm thân nhân: chân dung kỷ niệm · cùng +100

Đạo hữu: Mặc Nghiên
Nhiệm vụ: Người Mang Tiếng Ác
Lựa chọn: Truy dấu hồn ấn giả trong chợ · công bố ngay hoặc đặt bẫy người làm giả
Hệ quả: công bố: nhiệm vụ bảo vệ nhân chứng · đặt bẫy: trận truy kích · cùng +150

Đạo hữu: Mặc Nghiên
Nhiệm vụ: Khế Ước Không Xiềng Xích
Lựa chọn: Đối mặt cám dỗ lấy sức mạnh từ hồn bị giam · chọn giải khế hoặc chuyển sang khế tự nguyện
Hệ quả: giải khế: đèn mở cửa · tự nguyện: dải văn khế · cùng +200

Đạo hữu: Lạc Tinh Dao
Nhiệm vụ: Sao Rơi Không Có Tên
Lựa chọn: Khảo sát ba mảnh sao tại đài · chọn cứu hộ trước hoặc dựng lớp neo chống sập
Hệ quả: cứu hộ: thẻ đội cứu nạn · dựng neo: bản thiết kế đài · cùng +100

Đạo hữu: Lạc Tinh Dao
Nhiệm vụ: Bản Đồ Bị Xóa
Lựa chọn: Khôi phục nhật ký người quan tinh · công bố tọa độ tài nguyên hoặc giữ vùng trú ẩn khỏi tranh chấp
Hệ quả: công bố có kiểm soát: hợp đồng giám sát · giữ kín: lối đi riêng · cùng +150

Đạo hữu: Lạc Tinh Dao
Nhiệm vụ: Cùng Nhìn Một Vì Sao
Lựa chọn: Vượt cơn mưa sao, đặt tên đài theo người thầy hoặc người mất trong cứu hộ
Hệ quả: hai lựa chọn đổi bảng tên trang trí, không đổi chỉ số · cùng +200

Đạo hữu: Yên Từ
Nhiệm vụ: Cổng Làng Khóa Ngược
Lựa chọn: Sửa trận bảo vệ đang giam dân · chọn tháo lõi hoặc dựng cầu tạm rồi sửa
Hệ quả: tháo lõi: trận đuổi quái · cầu tạm: nhiệm vụ hộ tống · cùng +100

Đạo hữu: Yên Từ
Nhiệm vụ: Nét Bút Sai Một Ly
Lựa chọn: Điều tra một bản vẽ do chính Yên Từ từng ký · góp ý riêng hoặc cùng giải thích trước dân
Hệ quả: riêng: thư thú nhận · công khai: biên bản minh bạch · cùng +150

Đạo hữu: Yên Từ
Nhiệm vụ: Một Cửa Luôn Để Mở
Lựa chọn: Xây trận mới có lối thoát dân sự · chọn cổng hoa hoặc cầu đá cho ngoại hình động phủ
Hệ quả: hai nhánh chỉ khác trang trí và đoạn thoại · cùng +200

Đạo hữu: Sở Kình
Nhiệm vụ: Bàn Tay Không Nâng Nổi Kiếm
Lựa chọn: Giúp thợ rèn hồi phục sau tai nạn bằng tìm nẹp và nguyên liệu, không phép chữa mọi bệnh
Hệ quả: tự rèn nẹp: đồ trang trí bàn nghề · mời thợ: chân dung tập thể · cùng +100

Đạo hữu: Sở Kình
Nhiệm vụ: Vết Nứt Trên Thiên Trụ
Lựa chọn: Đỡ ba nhịp địa chấn · chọn bảo vệ kho lương hoặc cứu người mắc kẹt bằng tuyến khác
Hệ quả: mỗi lựa chọn có một trận khác, cả hai cứu người thành công · cùng +150

Đạo hữu: Sở Kình
Nhiệm vụ: Sức Mạnh Đặt Xuống
Lựa chọn: Luận võ không sát thương với học trò · chọn chỉ dẫn thủ hoặc chỉ dẫn phản kích
Hệ quả: hai nhánh mở hoạt cảnh dạy võ, cùng quyền trợ chiến · cùng +200

Đạo hữu: Tô Hành
Nhiệm vụ: Thanh Kiếm Chưa Trả
Lựa chọn: Tìm chủ cũ của kiếm · chọn gặp người thừa kế hoặc người thợ sửa lần cuối
Hệ quả: mở hai cuộc đối thoại khác nhau, cùng +100

Đạo hữu: Tô Hành
Nhiệm vụ: Một Trận Không Có Người Thắng
Lựa chọn: Giải tranh chấp hai kiếm phái · luận bàn cả hai hoặc tìm bằng chứng giao ước cũ
Hệ quả: luận bàn: phù hiệu trung lập · bằng chứng: ngọc giản lịch sử · cùng +150

Đạo hữu: Tô Hành
Nhiệm vụ: Đường Về Không Hẹn
Lựa chọn: Giúp Tô Hành hoàn tất lời hứa, chọn cùng đi một đoạn hoặc chờ ở cầu cũ
Hệ quả: đều mở lời mời tri kỷ và cảnh đoàn tụ, cùng +200

Đạo hữu: Nguyệt Chi
Nhiệm vụ: Bóng Trăng Dưới Giếng
Lựa chọn: Một làng thấy ký ức khác nhau · hỏi từng người hoặc kiểm tra gương cấm dưới nước
Hệ quả: hai nhánh cho góc nhìn khác nhau của cùng sự kiện · +100

Đạo hữu: Nguyệt Chi
Nhiệm vụ: Nụ Cười Của Ảo Ảnh
Lựa chọn: Phát hiện người thân trong huyễn cảnh · chọn nói thật ngay hoặc dẫn họ tự nhận ra
Hệ quả: không có đáp án duy nhất · đều giải thoát, +150

Đạo hữu: Nguyệt Chi
Nhiệm vụ: Mặt Nước Không Giữ Người
Lựa chọn: Hủy gương cưỡng giữ linh thức · giữ mảnh làm kỷ niệm hoặc trả chúng về sông
Hệ quả: ngoại hình quạt hoặc chuông nước khác nhau · +200

Đạo hữu: Trầm Uyên
Nhiệm vụ: Ngày Không Trôi
Lựa chọn: Điều tra một thị trấn lặp ngày · tìm người nhớ hoặc vật không bị lặp
Hệ quả: hai tuyến dẫn tới cùng lõi ký ức · +100

Đạo hữu: Trầm Uyên
Nhiệm vụ: Lời Hứa Đã Quá Hạn
Lựa chọn: Đưa thư muộn cho người nhận · kể toàn bộ hoặc mời họ đọc nhật ký người gửi
Hệ quả: giữ quyền lựa chọn của người nhận, +150

Đạo hữu: Trầm Uyên
Nhiệm vụ: Viết Tiếp Trang Trống
Lựa chọn: Thoát vòng lặp mà không xóa đời đã sống · chọn mang hạt giống hoặc cuốn sổ đi tiếp
Hệ quả: một vật trang trí động phủ khác nhau, +200

Đạo hữu: Tề Nham
Nhiệm vụ: Bia Đá Không Chủ
Lựa chọn: Ghi lại mười dấu khắc · chọn dập bản hoặc dựng bản sao bằng đất
Hệ quả: cùng +100 và một bản đồ

Đạo hữu: Tề Nham
Nhiệm vụ: Mộ Không Có Tên
Lựa chọn: Bảo vệ khu mộ khỏi khai thác · chọn đàm phán hoặc thử thách người chiếm giữ
Hệ quả: cùng +150, phần thưởng ngang giá

Đạo hữu: Tề Nham
Nhiệm vụ: Người Trông Cửa Cuối
Lựa chọn: Nhận trách nhiệm giữ thư viện · chọn số hóa bằng ngọc giản hoặc truyền nghề người mới
Hệ quả: cùng +200 và quyền kết nghĩa

Đạo hữu: Linh Quân
Nhiệm vụ: Buổi Học Bỏ Dở
Lựa chọn: Tìm ba học trò nghỉ học · hỏi nguyên nhân hoặc đến giúp việc gia đình
Hệ quả: cùng +100, không phạt học trò

Đạo hữu: Linh Quân
Nhiệm vụ: Đề Thi Không Đáp Án
Lựa chọn: Thiết kế bài thi cho ba hướng tu khác nhau
Hệ quả: chọn thiên thủ hoặc thiên công, cùng +150

Đạo hữu: Linh Quân
Nhiệm vụ: Người Thầy Được Nghỉ
Lựa chọn: Tổ chức lớp tự quản · chọn học trò điều phối hoặc nhóm luân phiên
Hệ quả: cùng +200, mở trợ chiến kết nghĩa

Đạo hữu: Hạ Vân
Nhiệm vụ: Bản Ghi Mâu Thuẫn
Lựa chọn: Đối chiếu lời kể hai nhân chứng · chọn hỏi tiếp hoặc tìm vật chứng
Hệ quả: cùng +100, mở ghi chú nhật ký

Đạo hữu: Hạ Vân
Nhiệm vụ: Tên Bị Gạch
Lựa chọn: Khôi phục tên người có công bị lãng quên
Hệ quả: chọn bia chung hoặc thư riêng, cùng +150

Đạo hữu: Hạ Vân
Nhiệm vụ: Quyển Sách Chưa Khép
Lựa chọn: Biên tập bản thảo đa góc nhìn
Hệ quả: chọn thứ tự nhân vật khác nhau, cùng +200

Đạo hữu: Từ Hạc
Nhiệm vụ: Con Chim Chưa Bay
Lựa chọn: Hoàn thành đồ chơi gỗ · chọn dáng chim hoặc thuyền
Hệ quả: cùng +100, vật trang trí khác nhau

Đạo hữu: Từ Hạc
Nhiệm vụ: Mùa Mưa Cuối Xưởng
Lựa chọn: Sửa mái và đưa học trò đến nhận nghề
Hệ quả: chọn giữ xưởng cũ hoặc dựng xưởng chung, cùng +150

Đạo hữu: Từ Hạc
Nhiệm vụ: Người Ở Lại Trong Gỗ
Lựa chọn: Hoàn tất lời gửi gắm · kết cục NPC theo chương đã chọn, không hồi sinh tùy tiện
Hệ quả: +200 · trợ chiến dùng vật kỷ niệm, không NPC bất tử

Đội thường trực gồm tu sĩ và một linh thú. Mỗi trận chọn một nguồn trợ chiến từ NPC, bạn kết nghĩa hoặc đạo lữ cho mượn. Người hỗ trợ xuất hiện 2,5–4 giây, hồi 45 giây và tối đa ba lần trong trận 180 giây.

Để hôn phối giữa người chơi, cả hai cần đạt Nguyên Anh, tài khoản đủ bảy ngày, đã kết bạn ba ngày và cùng xác nhận. Lời mời có hiệu lực 72 giờ. Mỗi nhân vật có tối đa một liên kết đạo lữ hoặc hôn phối chính. Mỗi bên có quyền kết thúc, giữ tài sản cá nhân và chờ 24 giờ trước liên kết mới.

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Vấn Đạo Chiến Tuyến và đấu giá

Tài liệu thiết kế · Mở rộng V2

Hai hoạt động có quy tắc tham gia khác nhau. Chiến tông môn xoay quanh đường tiếp tế và điểm giữ đất. Đấu giá dùng cùng ví linh thạch với chợ giá cố định.

Phí trong bảng thuộc thiết kế tháng 10. Thông báo ngày 12/11 nêu thuế Chợ 30%.

Xem thêm: Đấu Trường, Tỉ Võ, bang hội và Chợ. Đọc quy tắc tháng 11.

Chiến Tuyến kéo dài 14 ngày. Ngày 1 đăng ký, ngày 2–13 có sáu vòng 48 giờ, ngày 14 tổng kết. Mỗi vòng gồm 6 giờ chuẩn bị, 36 giờ tranh điểm và 6 giờ đóng sổ. Tông môn cần ít nhất năm thành viên hợp lệ, tối đa 20 chính thức và 10 dự bị. Người tham gia từ Nguyên Anh, tài khoản bảy ngày, đã ở tông môn ít nhất 48 giờ.

Mỗi người chính thức có ba lượt tấn công và một lượt trinh sát mỗi vòng. Mỗi điểm thủ có tối đa ba vị trí. Hạ hết đội thủ để đổi chủ. Điểm giữ đất cần đường tiếp tế về doanh trại, chiếm lần đầu trong vòng thêm 5 điểm. Thắng vòng được 3 điểm mùa, hòa 1, thua 0.

Mười ba vị trí và đường nối

Điểm: A
Địa danh: Doanh A
Điểm/giờ khi có tiếp tế: Doanh trại
Kề với: Dược Lâm Tây, Cổ Đạo Tây, Khoáng Trấn Tây

Điểm: A1
Địa danh: Dược Lâm Tây
Điểm/giờ khi có tiếp tế: 1
Kề với: Doanh A, Thiên Quan Tây Bắc

Điểm: A2
Địa danh: Cổ Đạo Tây
Điểm/giờ khi có tiếp tế: 1
Kề với: Doanh A, Thiên Quan Tây Bắc, Địa Quan Tây Nam

Điểm: A3
Địa danh: Khoáng Trấn Tây
Điểm/giờ khi có tiếp tế: 1
Kề với: Doanh A, Địa Quan Tây Nam

Điểm: L1
Địa danh: Thiên Quan Tây Bắc
Điểm/giờ khi có tiếp tế: 2
Kề với: Dược Lâm Tây, Cổ Đạo Tây, Vấn Đạo Đài

Điểm: L2
Địa danh: Địa Quan Tây Nam
Điểm/giờ khi có tiếp tế: 2
Kề với: Cổ Đạo Tây, Khoáng Trấn Tây, Vấn Đạo Đài

Điểm: C
Địa danh: Vấn Đạo Đài
Điểm/giờ khi có tiếp tế: 5
Kề với: Thiên Quan Tây Bắc, Địa Quan Tây Nam, Thiên Quan Đông Bắc, Địa Quan Đông Nam

Điểm: R1
Địa danh: Thiên Quan Đông Bắc
Điểm/giờ khi có tiếp tế: 2
Kề với: Vấn Đạo Đài, Dược Lâm Đông, Cổ Đạo Đông

Điểm: R2
Địa danh: Địa Quan Đông Nam
Điểm/giờ khi có tiếp tế: 2
Kề với: Vấn Đạo Đài, Cổ Đạo Đông, Khoáng Trấn Đông

Điểm: B1
Địa danh: Dược Lâm Đông
Điểm/giờ khi có tiếp tế: 1
Kề với: Thiên Quan Đông Bắc, Doanh B

Điểm: B2
Địa danh: Cổ Đạo Đông
Điểm/giờ khi có tiếp tế: 1
Kề với: Thiên Quan Đông Bắc, Địa Quan Đông Nam, Doanh B

Điểm: B3
Địa danh: Khoáng Trấn Đông
Điểm/giờ khi có tiếp tế: 1
Kề với: Địa Quan Đông Nam, Doanh B

Điểm: B
Địa danh: Doanh B
Điểm/giờ khi có tiếp tế: Doanh trại
Kề với: Dược Lâm Đông, Cổ Đạo Đông, Khoáng Trấn Đông

Đấu giá mở giao dịch từ Kết Đan với tài khoản từ bảy ngày. Lô chạy 12 hoặc 24 giờ. Giá mở tối thiểu 20 linh thạch, phí đăng 1% làm tròn lên, tối thiểu một linh thạch. Phí bán thành công 5% giá chốt, làm tròn lên.

Bước nâng giá ít nhất 5% của giá hiện tại, làm tròn lên và tối thiểu một linh thạch. Đặt giá trong 120 giây cuối có thể gia hạn đến 120 giây từ lần đặt, tổng cộng tối đa 10 phút. Có thể hủy trước khi có người đặt. Tiền của người bị vượt giá được trả, vật phẩm hết hạn không bán được trả chủ. Linh thú đã khế, chứng nhận truyện, vật phẩm khóa và phần thưởng độc quyền sự kiện bị loại khỏi các lô.

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Chuyên mục Pháp bảo

Bảo vật bản mệnh, phân bậc và vòng quay.

Năm pháp bảo trong sổ hình ảnh

Hồ sơ hình ảnh · Pháp bảo Tiên Nghịch · 21/10

Hồ sơ mỹ thuật ghi nhận năm pháp bảo có mã nội dung riêng. Ba biểu tượng được đánh dấu đã tích hợp, hai biểu tượng đã có yêu cầu vẽ. Các trạng thái này mô tả hình ảnh ở thời điểm lập hồ sơ.

Pháp bảo: Huyền Thiết Ấn
Mã nội dung: treasure_iron_seal
Trạng thái icon: Tích hợp icon (integrated)
Dấu hiệu nhận biết: Ấn sắt đen vuông, núm hình rùa, cạnh khảm vàng cổ.

Pháp bảo: Thanh Phong Kiếm Hoàn
Mã nội dung: treasure_sword_orb
Trạng thái icon: Tích hợp icon (integrated)
Dấu hiệu nhận biết: Quả cầu nhỏ bằng bạc lam, có ba lưỡi kiếm tí hon xoay quanh. Tên này và Thanh Phong Kiếm (TN-C004) là hai mục riêng trong hồ sơ.

Pháp bảo: Tử Điện Lôi Châu
Mã nội dung: treasure_thunder_bead
Trạng thái icon: Tích hợp icon (integrated)
Dấu hiệu nhận biết: Viên châu tím trong, lõi có một tia sét trắng tím.

Pháp bảo: Cửu Cung Trận Bàn
Mã nội dung: treasure_array_disc
Trạng thái icon: Đã có mô tả để vẽ (briefed)
Dấu hiệu nhận biết: Đĩa tròn bằng ngọc xanh mực khảm vàng cổ. Chín ô trên mặt đĩa, mỗi ô có một hạt ngọc.

Pháp bảo: U Minh Dẫn Hồn Đăng
Mã nội dung: treasure_soul_lantern
Trạng thái icon: Đã có mô tả để vẽ (briefed)
Dấu hiệu nhận biết: Đèn sáu mặt bằng đồng xanh gỉ, có lửa hồn lục lam, quai xích ngắn và tua lụa chàm. Tên Đăng Lung trong danh sách ứng viên cần đối chiếu riêng.

Mã icon ghép từ mã nội dung và đuôi _01. Chẳng hạn, treasure_array_disc_01 là biểu tượng của Cửu Cung Trận Bàn. Hình giao diện dùng nền trong suốt và xuất ở 256 × 256 px. Trạng thái gameplay và nguồn nhận của từng món cần đối chiếu phiên bản máy chủ.

Tài liệu đối chiếu
Pháp bảo Tiên Nghịch · danh mục đối chiếu và vòng quay
Sổ hình ảnh · trạng thái của từng asset

Pháp bảo bản mệnh và 24 món V2

Thiết kế mở rộng · Mở rộng V2 · 14/10 · Pháp bảo và 12 bí cảnh

Mốc Kết Đan trong thiết kế gốc mở pháp bảo bản mệnh. Thiết kế V2 dành một vị trí hoạt động cho pháp bảo. Khi đổi bộ thiết lập, chỉ món đang sử dụng mới cho thuộc tính và kỹ năng.

Pháp bảo đi qua ba nấc. Tàn phôi mở kỹ năng với 70% hệ số gốc. Thức linh đạt 100% và Chân bảo đạt 115%. Hai lần nâng tương ứng cần 30 hoặc 80 mảnh riêng, 10 hoặc 30 tinh chất cùng bậc, phí 2 hoặc 6 đơn vị chi phí linh thạch của bậc đó, kèm nhiệm vụ Khảo chứng và Khí linh. Các hệ số là mức tổng tại mỗi nấc.

Mỗi phôi có đường tích mảnh chắc chắn. Ở bí cảnh đủ điều kiện có thể đổi 5 ấn khảo chứng lấy 1 mảnh trong danh sách đã mở. Mười món đầu còn có công thức chế phôi. Pháp bảo Cổ Thần cần số sao cổ thể tương ứng để kích hoạt cơ chế riêng. Người thuần luyện thể có đường Mô phỏng Cổ Ấn qua ba bài khôi mỗi bậc.

Các bảng dưới ghi thông số thiết kế V2. A là sức công phù hợp với loại sát thương của chủ trước giảm trừ. H là HP tối đa của chủ. Cột nguồn cho biết điểm lấy phôi hoặc mảnh và công thức nếu có.

Mười pháp bảo có công thức chế phôi

Pháp bảo: Tàng Hồn Cổ Phiên
Lối tu: Hồn
Mở ở · phẩm: Nguyên Anh · Huyền
Kỹ năng: Chủ hồn xuất hiện 3 giây, đánh 3 đòn, mỗi đòn 90% A. Hồi 30 giây.
Nguồn và số mảnh: Mộ Đan Tàn Ảnh · 20 mảnh · công thức 051

Pháp bảo: Thiên Cấm Khế Kỳ
Lối tu: Cấm trận
Mở ở · phẩm: Nguyên Anh · Huyền
Kỹ năng: Đặt 2 cấm ấn. Khi người dùng trận pháp, ấn nổ gây 150% A. Hồi 28 giây.
Nguồn và số mảnh: Huyền Cốt Động · 25 mảnh · công thức 052

Pháp bảo: Trấn Nhạc Huyền Ấn
Lối tu: Luyện thể
Mở ở · phẩm: Hóa Thần · Địa
Kỹ năng: Nện 240% A và gây 20 điểm phá thế. Hồi 32 giây.
Nguồn và số mảnh: Lôi Trì Phong Ấn · 30 mảnh · công thức 053

Pháp bảo: Định Hồn Đồng Kính
Lối tu: Hồn/đa dụng
Mở ở · phẩm: Hóa Thần · Địa
Kỹ năng: Xóa một hiệu ứng có lợi thông thường của mục tiêu, gây 180% A. Hồi 30 giây.
Nguồn và số mảnh: U Đăng Cổ Các · 30 mảnh · công thức 054

Pháp bảo: Phá Vân Kiếm Hạp
Lối tu: Kiếm
Mở ở · phẩm: Anh Biến · Thiên
Kỹ năng: Phóng ba kiếm ảo, mỗi kiếm 110% A. Hồi 30 giây.
Nguồn và số mảnh: Vạn Cấm Lưu Lang · 40 mảnh · công thức 055

Pháp bảo: Lôi Nguyên Cổ Đỉnh
Lối tu: Lôi
Mở ở · phẩm: Anh Biến · Thiên
Kỹ năng: Hấp thu một đòn lôi thường rồi phản công 300% A. Hồi 34 giây.
Nguồn và số mảnh: Vạn Cấm Lưu Lang · 40 mảnh · công thức 056

Pháp bảo: Ngự Triều Huyền Bình
Lối tu: Thủy/hỗ trợ
Mở ở · phẩm: Vấn Đỉnh · Thiên
Kỹ năng: Hồi 12% H và giảm 8% công của địch trong 5 giây. Hồi 35 giây.
Nguồn và số mảnh: Đoạn Giới Kiếm Trủng · 45 mảnh · công thức 057

Pháp bảo: Cổ Mạch Linh Chung
Lối tu: Luyện thể
Mở ở · phẩm: Vấn Đỉnh · Thiên
Kỹ năng: Tạo khiên bằng 15% H, phản một đòn bằng 150% A. Hồi 36 giây.
Nguồn và số mảnh: Cổ Thần 4 · 45 mảnh · công thức 058

Pháp bảo: Nghịch Hà Hồn Đăng
Lối tu: Ma tu
Mở ở · phẩm: Khuy Niết · Thiên
Kỹ năng: Giảm 15 ma chướng và thiêu hồn trong 5 giây, mỗi giây 50% A. Hồi 36 giây.
Nguồn và số mảnh: Táng Lôi Tinh Uyên · 50 mảnh · công thức 059

Pháp bảo: Thôn Pháp Tam Xoa
Lối tu: Cổ Thần
Mở ở · phẩm: Tịnh Niết · Tiên
Kỹ năng: Hấp thu một đạn pháp thuật thông thường, sau đó phóng trả 350% A. Hồi 38 giây.
Nguồn và số mảnh: Cổ Thần 5 · 60 mảnh · công thức 060

Mười bốn pháp bảo còn lại

Pháp bảo: Cổ Tinh Phá Pháp Thương
Lối tu: Cổ Thần
Mở ở · phẩm: Toái Niết · Tiên
Kỹ năng: Đâm 400% A, bỏ qua 15% phòng ngự hiện hữu của mục tiêu. Hồi 40 giây.
Nguồn và số mảnh: Cổ Thần 6 · 80 mảnh

Pháp bảo: Cửu Cốt Hộ Giới Thuẫn
Lối tu: Cổ Thần
Mở ở · phẩm: Không Niết · Tiên
Kỹ năng: Tạo khiên 20% H trong 6 giây, chặn một lần đẩy lùi. Hồi 42 giây.
Nguồn và số mảnh: Cổ Thần 7 · 90 mảnh

Pháp bảo: Tinh Hà Chấn Sơn Phủ
Lối tu: Cổ Thần
Mở ở · phẩm: Không Linh · Tiên
Kỹ năng: Gây 430% A và 35 điểm phá thế. Hồi 42 giây.
Nguồn và số mảnh: Cổ Thần 7 · 90 mảnh

Pháp bảo: Vô Tự Cổ Cốt Bia
Lối tu: Cổ Thần
Mở ở · phẩm: Không Huyền · Đạo
Kỹ năng: Chặn một lần suy giảm hiệu ứng có lợi thông thường, tạo khiên bằng 12% H. Hồi 40 giây.
Nguồn và số mảnh: Cổ Thần 8 · 100 mảnh

Pháp bảo: Cửu Tinh Hợp Đạo Luân
Lối tu: Cổ Thần
Mở ở · phẩm: Không Kiếp · Đạo
Kỹ năng: Đòn quyền kế tiếp gây thêm 500% A, đồng thời tạo khiên bằng 10% H. Hồi 48 giây.
Nguồn và số mảnh: Cổ Thần 9 · 120 mảnh

Pháp bảo: Sinh Tử Song Ngọc
Lối tu: Sinh Tử
Mở ở · phẩm: Khuy Niết · Thiên
Kỹ năng: Đổi 10% HP thành khiên, sau 4 giây hồi 12% H. Chi phí HP không gây tử vong. Hồi 36 giây.
Nguồn và số mảnh: Đoạn Giới Kiếm Trủng · 60 mảnh

Pháp bảo: Nhân Quả Kết Thằng
Lối tu: Nhân Quả
Mở ở · phẩm: Tịnh Niết · Tiên
Kỹ năng: Ghi lại 20% sát thương trong 4 giây rồi hoàn trả, tối đa 450% A. Hồi 40 giây.
Nguồn và số mảnh: Táng Lôi Tinh Uyên · 70 mảnh

Pháp bảo: Chân Giả Lưỡng Nghi Kính
Lối tu: Chân Giả
Mở ở · phẩm: Toái Niết · Tiên
Kỹ năng: Tạo một bóng đỡ một đòn thường, sau đó đánh 300% A. Hồi 38 giây.
Nguồn và số mảnh: Cổ Diệu Phế Thành · 75 mảnh

Pháp bảo: Tịch Diệt Hồn Sa Lậu
Lối tu: Ma tu/Hồn
Mở ở · phẩm: Không Niết · Tiên
Kỹ năng: Gây 80% A mỗi giây trong 6 giây, giảm 20% hồi phục. Hồi 42 giây.
Nguồn và số mảnh: Vô Sinh Mộng Vực · 80 mảnh

Pháp bảo: Khuy Thiên Đạo Bàn
Lối tu: Cấm trận
Mở ở · phẩm: Không Linh · Tiên
Kỹ năng: Đánh dấu điểm yếu 6 giây. Đòn đầu mỗi loại được thêm 60% A, tối đa bốn lần. Hồi 40 giây.
Nguồn và số mảnh: Quy Tắc Thiên Cung · 90 mảnh

Pháp bảo: Tàn Dạ Nhật Luân
Lối tu: Kiếm/ánh sáng
Mở ở · phẩm: Không Huyền · Đạo
Kỹ năng: Gây 480% A lên ba mục tiêu bằng sóng chân trời. Hồi 46 giây.
Nguồn và số mảnh: Quy Tắc Thiên Cung · 100 mảnh

Pháp bảo: Huyền Kiếp Phong Lôi Tỏa
Lối tu: Lôi
Mở ở · phẩm: Không Huyền · Đạo
Kỹ năng: Khóa một đòn thường của boss trong 1 giây và gây 40 điểm phá thế. Trong PvP, thời gian khóa là 0,4 giây. Hồi 46 giây.
Nguồn và số mảnh: Hắc Hà Khế Ngục · 100 mảnh

Pháp bảo: Vạn Giới Cấm Môn
Lối tu: Cấm trận
Mở ở · phẩm: Không Kiếp · Đạo
Kỹ năng: Đặt hai cấm ấn, nổ sau 3 giây với hệ số 550% A. Hồi 50 giây.
Nguồn và số mảnh: Quy Nguyên Chứng Đài · 120 mảnh

Pháp bảo: Quy Nguyên Cổ Đạo Đỉnh
Lối tu: Đa dụng cuối game
Mở ở · phẩm: Không Kiếp · Đạo
Kỹ năng: Chọn hồi 18% H hoặc gây 520% A. Khi chiến đấu tự động, quyết định dựa trên HP của chủ. Hồi 50 giây.
Nguồn và số mảnh: Quy Nguyên Chứng Đài, kèm chứng cổ đạo · 140 mảnh

Tài liệu đối chiếu
Tiên Nghịch V2 · thiết kế và danh mục mở rộng

Vòng quay pháp bảo siêu hiếm

Danh mục đề xuất · Pháp bảo Tiên Nghịch · 21/10

Bản bổ sung ngày 21/10 đề xuất 30 phần thưởng cho riêng Tiên Nghịch. Gồm 15 Bản nguyên chi bảo và 15 Chí tôn pháp bảo, tương ứng toàn bộ bậc thiết kế 11 và 12.

Để đưa một món vào danh sách thưởng, đội phát triển cần đối chiếu mã vật phẩm, kiểm tra dữ liệu và hình ảnh của món đó. Với món đã tồn tại, vòng quay dùng lại mã cũ. Các nguồn nhận trước đây được giữ. Bản bổ sung chưa nêu giá vé, tỷ lệ rơi hay mốc bảo đảm của vòng pháp bảo. Số ô minh họa trên bánh xe không xác định xác suất.

Thiên Cơ Bảo Luân của gói sự kiện V3 có bảng tỷ lệ trang phục và cơ chế Bảo Ấn riêng. Các con số của sự kiện trang phục chỉ áp dụng cho phần thưởng ghi trong bảng của sự kiện đó.

Bậc 11 · Bản nguyên chi bảo: TN-C151 · Lôi Đình Bản Nguyên Kiếm
Bậc 12 · Chí tôn pháp bảo: TN-C166 · Thiên Ngưu Hồn Khải

Bậc 11 · Bản nguyên chi bảo: TN-C152 · Hỏa Bản Nguyên Kiếm
Bậc 12 · Chí tôn pháp bảo: TN-C167 · Thiên Nghịch Châu

Bậc 11 · Bản nguyên chi bảo: TN-C153 · Nhân Quả Kiếm
Bậc 12 · Chí tôn pháp bảo: TN-C168 · Định Giới La Bàn

Bậc 11 · Bản nguyên chi bảo: TN-C154 · Sinh Tử Kiếm
Bậc 12 · Chí tôn pháp bảo: TN-C169 · Thiên Đạo Chi Luân

Bậc 11 · Bản nguyên chi bảo: TN-C155 · Chân Giả Kiếm
Bậc 12 · Chí tôn pháp bảo: TN-C170 · Thái Sơ Hỗn Độn Kiếm

Bậc 11 · Bản nguyên chi bảo: TN-C156 · Sát Lục Kiếm
Bậc 12 · Chí tôn pháp bảo: TN-C171 · Vạn Giới Trấn Thiên Đỉnh

Bậc 11 · Bản nguyên chi bảo: TN-C157 · Thời Gian Bản Nguyên Chung
Bậc 12 · Chí tôn pháp bảo: TN-C172 · Cửu Thiên Diệt Thế Chung

Bậc 11 · Bản nguyên chi bảo: TN-C158 · Không Gian Bản Nguyên Kính
Bậc 12 · Chí tôn pháp bảo: TN-C173 · Hỗn Nguyên Phá Giới Phủ

Bậc 11 · Bản nguyên chi bảo: TN-C159 · Luân Hồi Bản Nguyên Luân
Bậc 12 · Chí tôn pháp bảo: TN-C174 · Thiên Mệnh Thần Ấn

Bậc 11 · Bản nguyên chi bảo: TN-C160 · Hủy Diệt Bản Nguyên Thương
Bậc 12 · Chí tôn pháp bảo: TN-C175 · Thái Cổ Luân Hồi Kính

Bậc 11 · Bản nguyên chi bảo: TN-C161 · Hư Vô Bản Nguyên Ấn
Bậc 12 · Chí tôn pháp bảo: TN-C176 · Vạn Đạo Quy Nhất Kiếm

Bậc 11 · Bản nguyên chi bảo: TN-C162 · Âm Dương Bản Nguyên Đỉnh
Bậc 12 · Chí tôn pháp bảo: TN-C177 · Hỗn Độn Khai Thiên Thương

Bậc 11 · Bản nguyên chi bảo: TN-C163 · Ngũ Hành Bản Nguyên Châu
Bậc 12 · Chí tôn pháp bảo: TN-C178 · Thiên Địa Vô Cực Đồ

Bậc 11 · Bản nguyên chi bảo: TN-C164 · Thiên Địa Bản Nguyên Đồ
Bậc 12 · Chí tôn pháp bảo: TN-C179 · Chư Thiên Phong Giới Tháp

Bậc 11 · Bản nguyên chi bảo: TN-C165 · Vạn Đạo Bản Nguyên Kiếm
Bậc 12 · Chí tôn pháp bảo: TN-C180 · Thái Hư Diệt Đạo Luân

Tài liệu đối chiếu
Pháp bảo Tiên Nghịch · danh mục đối chiếu và vòng quay

Danh mục ứng viên bậc 1–3

Danh mục đề xuất · Pháp bảo Tiên Nghịch · 21/10

Tra cứu 45 trong 180 tên thuộc phụ lục Tiên Nghịch, từ Phàm khí đến Linh khí. Mã TN-C dùng cho tài liệu thiết kế. Danh sách gồm cả tên tham chiếu và tên sáng tạo cho game, chưa được đối chiếu đầy đủ với vật phẩm của bản chạy.

Bảy phẩm của thiết kế game là Phàm, Linh, Huyền, Địa, Thiên, Tiên và Đạo. Mười hai bậc dưới đây dùng để sắp danh mục đề xuất. Cảnh giới cần để dùng, phẩm chính thức và sức mạnh của từng món chỉ xác định được khi có hồ sơ gameplay.

Bậc 1 · Phàm khí

Mã tra cứu: TN-C001
Tên pháp bảo: Thanh Cương Kiếm

Mã tra cứu: TN-C002
Tên pháp bảo: Huyền Thiết Kiếm

Mã tra cứu: TN-C003
Tên pháp bảo: Hàn Thiết Đao

Mã tra cứu: TN-C004
Tên pháp bảo: Thanh Phong Kiếm

Mã tra cứu: TN-C005
Tên pháp bảo: Tử Đồng Kiếm

Mã tra cứu: TN-C006
Tên pháp bảo: Hắc Thiết Thương

Mã tra cứu: TN-C007
Tên pháp bảo: Bạch Ngọc Kiếm

Mã tra cứu: TN-C008
Tên pháp bảo: Huyền Thiết Thuẫn

Mã tra cứu: TN-C009
Tên pháp bảo: Thanh Đồng Kính

Mã tra cứu: TN-C010
Tên pháp bảo: Hắc Mộc Trượng

Mã tra cứu: TN-C011
Tên pháp bảo: Bạch Cốt Đao

Mã tra cứu: TN-C012
Tên pháp bảo: Huyết Thiết Kiếm

Mã tra cứu: TN-C013
Tên pháp bảo: Linh Mộc Cung

Mã tra cứu: TN-C014
Tên pháp bảo: Huyền Đồng Chung

Mã tra cứu: TN-C015
Tên pháp bảo: Thiết Tỏa Liên

Bậc 2 · Pháp khí

Mã tra cứu: TN-C016
Tên pháp bảo: Phi Vân Kiếm

Mã tra cứu: TN-C017
Tên pháp bảo: Thanh Linh Kiếm

Mã tra cứu: TN-C018
Tên pháp bảo: Hỏa Vân Đao

Mã tra cứu: TN-C019
Tên pháp bảo: Hàn Băng Kiếm

Mã tra cứu: TN-C020
Tên pháp bảo: Tử Lôi Kiếm

Mã tra cứu: TN-C021
Tên pháp bảo: Phong Linh Phiến

Mã tra cứu: TN-C022
Tên pháp bảo: Huyền Quang Kính

Mã tra cứu: TN-C023
Tên pháp bảo: Tụ Linh Châu

Mã tra cứu: TN-C024
Tên pháp bảo: Thanh Mộc Đỉnh

Mã tra cứu: TN-C025
Tên pháp bảo: Hỏa Linh Hồ Lô

Mã tra cứu: TN-C026
Tên pháp bảo: Kim Quang Thuẫn

Mã tra cứu: TN-C027
Tên pháp bảo: Huyết Sát Phiên

Mã tra cứu: TN-C028
Tên pháp bảo: Trấn Hồn Linh

Mã tra cứu: TN-C029
Tên pháp bảo: Phong Hành Ngoa

Mã tra cứu: TN-C030
Tên pháp bảo: Bách Kiếm Hạp

Bậc 3 · Linh khí

Mã tra cứu: TN-C031
Tên pháp bảo: Tử Điện Phi Kiếm

Mã tra cứu: TN-C032
Tên pháp bảo: Huyền Băng Kiếm

Mã tra cứu: TN-C033
Tên pháp bảo: Liệt Diễm Đao

Mã tra cứu: TN-C034
Tên pháp bảo: Cửu Phong Phiến

Mã tra cứu: TN-C035
Tên pháp bảo: Thanh Hồn Kính

Mã tra cứu: TN-C036
Tên pháp bảo: Tụ Hồn Bình

Mã tra cứu: TN-C037
Tên pháp bảo: Huyết Linh Phiên

Mã tra cứu: TN-C038
Tên pháp bảo: Huyền Thiên Chung

Mã tra cứu: TN-C039
Tên pháp bảo: Ngũ Hành Hoàn

Mã tra cứu: TN-C040
Tên pháp bảo: Thất Tinh Kiếm

Mã tra cứu: TN-C041
Tên pháp bảo: Trấn Sơn Ấn

Mã tra cứu: TN-C042
Tên pháp bảo: Phược Linh Tác

Mã tra cứu: TN-C043
Tên pháp bảo: Kim Cương Thuẫn

Mã tra cứu: TN-C044
Tên pháp bảo: Huyền Linh Đỉnh

Mã tra cứu: TN-C045
Tên pháp bảo: Tử Vân Toa

Tài liệu đối chiếu
Pháp bảo Tiên Nghịch · danh mục đối chiếu và vòng quay

Danh mục ứng viên bậc 4–6

Danh mục đề xuất · Pháp bảo Tiên Nghịch · 21/10

Tra cứu 45 trong 180 tên thuộc phụ lục Tiên Nghịch, từ Bảo khí đến Tiên bảo. Mã TN-C dùng cho tài liệu thiết kế. Danh sách gồm cả tên tham chiếu và tên sáng tạo cho game, chưa được đối chiếu đầy đủ với vật phẩm của bản chạy.

Bậc 4 · Bảo khí

Mã tra cứu: TN-C046
Tên pháp bảo: Cửu U Kiếm

Mã tra cứu: TN-C047
Tên pháp bảo: Thiên Lôi Chùy

Mã tra cứu: TN-C048
Tên pháp bảo: Huyết Ma Đao

Mã tra cứu: TN-C049
Tên pháp bảo: Thất Sát Kiếm

Mã tra cứu: TN-C050
Tên pháp bảo: Huyền Minh Kính

Mã tra cứu: TN-C051
Tên pháp bảo: Thiên Hồn Phiên

Mã tra cứu: TN-C052
Tên pháp bảo: Trấn Yêu Tháp

Mã tra cứu: TN-C053
Tên pháp bảo: Tỏa Hồn Liên

Mã tra cứu: TN-C054
Tên pháp bảo: Huyết Ngọc Hồ Lô

Mã tra cứu: TN-C055
Tên pháp bảo: Bát Hoang Đỉnh

Mã tra cứu: TN-C056
Tên pháp bảo: Cửu Long Ấn

Mã tra cứu: TN-C057
Tên pháp bảo: Thiên Phong Phiến

Mã tra cứu: TN-C058
Tên pháp bảo: Huyền Quy Thuẫn

Mã tra cứu: TN-C059
Tên pháp bảo: Thất Bảo Linh Lung Tháp

Mã tra cứu: TN-C060
Tên pháp bảo: Diệt Hồn Châm

Bậc 5 · Ngụy Tiên bảo

Mã tra cứu: TN-C061
Tên pháp bảo: Ngụy Tiên Kiếm

Mã tra cứu: TN-C062
Tên pháp bảo: Tàn Tiên Đao

Mã tra cứu: TN-C063
Tên pháp bảo: Huyền Tiên Kính

Mã tra cứu: TN-C064
Tên pháp bảo: Vân Tiên Phiến

Mã tra cứu: TN-C065
Tên pháp bảo: Tỏa Tiên Liên

Mã tra cứu: TN-C066
Tên pháp bảo: Phá Tiên Chùy

Mã tra cứu: TN-C067
Tên pháp bảo: Ngụy Tiên Ấn

Mã tra cứu: TN-C068
Tên pháp bảo: Tàn Tiên Chung

Mã tra cứu: TN-C069
Tên pháp bảo: Trảm Linh Kiếm

Mã tra cứu: TN-C070
Tên pháp bảo: Phược Tiên Võng

Mã tra cứu: TN-C071
Tên pháp bảo: Tụ Tiên Đỉnh

Mã tra cứu: TN-C072
Tên pháp bảo: Huyền Tiên Hồ Lô

Mã tra cứu: TN-C073
Tên pháp bảo: Trấn Tiên Tháp

Mã tra cứu: TN-C074
Tên pháp bảo: Ngụy Tiên Hồn Phiên

Mã tra cứu: TN-C075
Tên pháp bảo: Vô Ảnh Tiên Châm

Bậc 6 · Tiên bảo

Mã tra cứu: TN-C076
Tên pháp bảo: Vũ Chi Tiên Kiếm

Mã tra cứu: TN-C077
Tên pháp bảo: Điểm Tiên Bút

Mã tra cứu: TN-C078
Tên pháp bảo: Khốn Tiên Võng

Mã tra cứu: TN-C079
Tên pháp bảo: Sơn Hà Đồ

Mã tra cứu: TN-C080
Tên pháp bảo: Tàng Tiên Các

Mã tra cứu: TN-C081
Tên pháp bảo: Xạ Thần Xa

Mã tra cứu: TN-C082
Tên pháp bảo: Phong Tiên Ấn

Mã tra cứu: TN-C083
Tên pháp bảo: Thiên Tiên Kiếm

Mã tra cứu: TN-C084
Tên pháp bảo: Huyền Thiên Tiên Chung

Mã tra cứu: TN-C085
Tên pháp bảo: Cửu Thiên Tiên Đỉnh

Mã tra cứu: TN-C086
Tên pháp bảo: Trấn Thiên Tiên Ấn

Mã tra cứu: TN-C087
Tên pháp bảo: Vạn Kiếm Tiên Hạp

Mã tra cứu: TN-C088
Tên pháp bảo: Thiên Hà Tiên Kính

Mã tra cứu: TN-C089
Tên pháp bảo: Huyền Vũ Tiên Thuẫn

Mã tra cứu: TN-C090
Tên pháp bảo: Tử Tiêu Tiên Hồ Lô

Tài liệu đối chiếu
Pháp bảo Tiên Nghịch · danh mục đối chiếu và vòng quay

Danh mục ứng viên bậc 7–9

Danh mục đề xuất · Pháp bảo Tiên Nghịch · 21/10

Tra cứu 45 trong 180 tên thuộc phụ lục Tiên Nghịch, từ Thượng cổ pháp bảo đến Cấm bảo. Mã TN-C dùng cho tài liệu thiết kế. Danh sách gồm cả tên tham chiếu và tên sáng tạo cho game, chưa được đối chiếu đầy đủ với vật phẩm của bản chạy.

Bậc 7 · Thượng cổ pháp bảo

Mã tra cứu: TN-C091
Tên pháp bảo: Thập Ức Tôn Hồn Phiên

Mã tra cứu: TN-C092
Tên pháp bảo: Độc Vương Đỉnh

Mã tra cứu: TN-C093
Tên pháp bảo: Thiết Kiếm

Mã tra cứu: TN-C094
Tên pháp bảo: Kiếm Sao

Mã tra cứu: TN-C095
Tên pháp bảo: Huyết Sắc Phiên

Mã tra cứu: TN-C096
Tên pháp bảo: Đồng Linh

Mã tra cứu: TN-C097
Tên pháp bảo: Lam Tán

Mã tra cứu: TN-C098
Tên pháp bảo: Đăng Lung

Mã tra cứu: TN-C099
Tên pháp bảo: Tử Mẫu Đạo Khô

Mã tra cứu: TN-C100
Tên pháp bảo: Cổ Tức Diệp

Mã tra cứu: TN-C101
Tên pháp bảo: Thiên Minh Thạch

Mã tra cứu: TN-C102
Tên pháp bảo: Tị Thiên Quan

Mã tra cứu: TN-C103
Tên pháp bảo: Tinh La Bàn

Mã tra cứu: TN-C104
Tên pháp bảo: Không Gian Thạch

Mã tra cứu: TN-C105
Tên pháp bảo: Thiên Ma Cổ Chung

Bậc 8 · Cổ tộc pháp khí

Mã tra cứu: TN-C106
Tên pháp bảo: Cổ Thần Tam Xoa Kích

Mã tra cứu: TN-C107
Tên pháp bảo: Cổ Thần Khai Thiên Phủ

Mã tra cứu: TN-C108
Tên pháp bảo: Thiên Hoàng Lô

Mã tra cứu: TN-C109
Tên pháp bảo: Cổ Thần Hộ Uyển

Mã tra cứu: TN-C110
Tên pháp bảo: Hộ Cốt Cửu Bi

Mã tra cứu: TN-C111
Tên pháp bảo: Thanh Quang Thuẫn

Mã tra cứu: TN-C112
Tên pháp bảo: Cổ Thần Bì Giáp

Mã tra cứu: TN-C113
Tên pháp bảo: Vụ Ma Thương

Mã tra cứu: TN-C114
Tên pháp bảo: Ma Hồn Bình

Mã tra cứu: TN-C115
Tên pháp bảo: Táng Thổ

Mã tra cứu: TN-C116
Tên pháp bảo: Phù Kinh Cửu Thập Cửu Kiếm

Mã tra cứu: TN-C117
Tên pháp bảo: Cổ Ma Chiến Giáp

Mã tra cứu: TN-C118
Tên pháp bảo: Cổ Yêu Huyết Đao

Mã tra cứu: TN-C119
Tên pháp bảo: Cổ Thần Trấn Thiên Ấn

Mã tra cứu: TN-C120
Tên pháp bảo: Cổ Ma Diệt Hồn Phiên

Bậc 9 · Cấm bảo

Mã tra cứu: TN-C121
Tên pháp bảo: Quỷ Diện Phàm

Mã tra cứu: TN-C122
Tên pháp bảo: Hồn Ma Chu

Mã tra cứu: TN-C123
Tên pháp bảo: Bạch Sắc Quỷ Phàm

Mã tra cứu: TN-C124
Tên pháp bảo: Đoạn Không Cấm La Bàn

Mã tra cứu: TN-C125
Tên pháp bảo: Phong Thiên Cấm Ấn

Mã tra cứu: TN-C126
Tên pháp bảo: Diệt Linh Cấm Kiếm

Mã tra cứu: TN-C127
Tên pháp bảo: Huyền Không Cấm Chung

Mã tra cứu: TN-C128
Tên pháp bảo: Vạn Hồn Cấm Phiên

Mã tra cứu: TN-C129
Tên pháp bảo: Trấn Giới Cấm Đỉnh

Mã tra cứu: TN-C130
Tên pháp bảo: Thiên Địa Cấm Võng

Mã tra cứu: TN-C131
Tên pháp bảo: Cửu U Cấm Tháp

Mã tra cứu: TN-C132
Tên pháp bảo: Huyết Sát Cấm Đao

Mã tra cứu: TN-C133
Tên pháp bảo: Tỏa Không Cấm Hoàn

Mã tra cứu: TN-C134
Tên pháp bảo: Vạn Pháp Cấm Kính

Mã tra cứu: TN-C135
Tên pháp bảo: Tuyệt Thiên Cấm Phù

Tài liệu đối chiếu
Pháp bảo Tiên Nghịch · danh mục đối chiếu và vòng quay

Danh mục ứng viên bậc 10–12

Danh mục đề xuất · Pháp bảo Tiên Nghịch · 21/10

Tra cứu 45 trong 180 tên thuộc phụ lục Tiên Nghịch, từ Không Niết pháp bảo đến Chí tôn pháp bảo. Mã TN-C dùng cho tài liệu thiết kế. Danh sách gồm cả tên tham chiếu và tên sáng tạo cho game, chưa được đối chiếu đầy đủ với vật phẩm của bản chạy.

Bậc 10 · Không Niết pháp bảo

Mã tra cứu: TN-C136
Tên pháp bảo: Ngụy Không Niết Tiễn

Mã tra cứu: TN-C137
Tên pháp bảo: Không Niết Kiếm

Mã tra cứu: TN-C138
Tên pháp bảo: Phá Giới Đao

Mã tra cứu: TN-C139
Tên pháp bảo: Hư Không Chung

Mã tra cứu: TN-C140
Tên pháp bảo: Trấn Không Đỉnh

Mã tra cứu: TN-C141
Tên pháp bảo: Diệt Giới Thương

Mã tra cứu: TN-C142
Tên pháp bảo: Không Linh Cổ Kính

Mã tra cứu: TN-C143
Tên pháp bảo: Phong Giới Ấn

Mã tra cứu: TN-C144
Tên pháp bảo: Toái Không Phiên

Mã tra cứu: TN-C145
Tên pháp bảo: Thiên Địa Phá Diệt Kiếm

Mã tra cứu: TN-C146
Tên pháp bảo: Vô Cực Không Luân

Mã tra cứu: TN-C147
Tên pháp bảo: Cửu Thiên Trấn Giới Tháp

Mã tra cứu: TN-C148
Tên pháp bảo: Không Diệt Hồn Đăng

Mã tra cứu: TN-C149
Tên pháp bảo: Thái Hư Thần Võng

Mã tra cứu: TN-C150
Tên pháp bảo: Hư Không Trảm Tiên Đao

Bậc 11 · Bản nguyên chi bảo

Mã tra cứu: TN-C151
Tên pháp bảo: Lôi Đình Bản Nguyên Kiếm

Mã tra cứu: TN-C152
Tên pháp bảo: Hỏa Bản Nguyên Kiếm

Mã tra cứu: TN-C153
Tên pháp bảo: Nhân Quả Kiếm

Mã tra cứu: TN-C154
Tên pháp bảo: Sinh Tử Kiếm

Mã tra cứu: TN-C155
Tên pháp bảo: Chân Giả Kiếm

Mã tra cứu: TN-C156
Tên pháp bảo: Sát Lục Kiếm

Mã tra cứu: TN-C157
Tên pháp bảo: Thời Gian Bản Nguyên Chung

Mã tra cứu: TN-C158
Tên pháp bảo: Không Gian Bản Nguyên Kính

Mã tra cứu: TN-C159
Tên pháp bảo: Luân Hồi Bản Nguyên Luân

Mã tra cứu: TN-C160
Tên pháp bảo: Hủy Diệt Bản Nguyên Thương

Mã tra cứu: TN-C161
Tên pháp bảo: Hư Vô Bản Nguyên Ấn

Mã tra cứu: TN-C162
Tên pháp bảo: Âm Dương Bản Nguyên Đỉnh

Mã tra cứu: TN-C163
Tên pháp bảo: Ngũ Hành Bản Nguyên Châu

Mã tra cứu: TN-C164
Tên pháp bảo: Thiên Địa Bản Nguyên Đồ

Mã tra cứu: TN-C165
Tên pháp bảo: Vạn Đạo Bản Nguyên Kiếm

Bậc 12 · Chí tôn pháp bảo

Mã tra cứu: TN-C166
Tên pháp bảo: Thiên Ngưu Hồn Khải

Mã tra cứu: TN-C167
Tên pháp bảo: Thiên Nghịch Châu

Mã tra cứu: TN-C168
Tên pháp bảo: Định Giới La Bàn

Mã tra cứu: TN-C169
Tên pháp bảo: Thiên Đạo Chi Luân

Mã tra cứu: TN-C170
Tên pháp bảo: Thái Sơ Hỗn Độn Kiếm

Mã tra cứu: TN-C171
Tên pháp bảo: Vạn Giới Trấn Thiên Đỉnh

Mã tra cứu: TN-C172
Tên pháp bảo: Cửu Thiên Diệt Thế Chung

Mã tra cứu: TN-C173
Tên pháp bảo: Hỗn Nguyên Phá Giới Phủ

Mã tra cứu: TN-C174
Tên pháp bảo: Thiên Mệnh Thần Ấn

Mã tra cứu: TN-C175
Tên pháp bảo: Thái Cổ Luân Hồi Kính

Mã tra cứu: TN-C176
Tên pháp bảo: Vạn Đạo Quy Nhất Kiếm

Mã tra cứu: TN-C177
Tên pháp bảo: Hỗn Độn Khai Thiên Thương

Mã tra cứu: TN-C178
Tên pháp bảo: Thiên Địa Vô Cực Đồ

Mã tra cứu: TN-C179
Tên pháp bảo: Chư Thiên Phong Giới Tháp

Mã tra cứu: TN-C180
Tên pháp bảo: Thái Hư Diệt Đạo Luân

Tài liệu đối chiếu
Pháp bảo Tiên Nghịch · danh mục đối chiếu và vòng quay

Nhận diện 30 pháp bảo siêu hiếm

Danh mục đề xuất · Pháp bảo Tiên Nghịch · 21/10

Bộ mô tả hình ảnh xác định dấu hiệu nhận diện cho 30 ứng viên của vòng quay Tiên Nghịch. Đây là phương án mỹ thuật để phân biệt những món cùng loại khi thu nhỏ thành biểu tượng.

Bản nguyên chi bảo

Pháp bảo: Lôi Đình Bản Nguyên Kiếm
Đặc điểm đề xuất: Sống kiếm bạc xanh phân nhánh như sét, hộ thủ khảm ngọc lam.

Pháp bảo: Hỏa Bản Nguyên Kiếm
Đặc điểm đề xuất: Lưỡi thẳng lõi men đỏ son, hộ thủ đồng uốn thành hai cánh lửa.

Pháp bảo: Nhân Quả Kiếm
Đặc điểm đề xuất: Kiếm ngọc trắng ngà, hai vòng đan ở hộ thủ và sợi chỉ đỏ trên chuôi.

Pháp bảo: Sinh Tử Kiếm
Đặc điểm đề xuất: Lưỡi kiếm gồm nửa ngọc trắng và nửa sắt mực, nơi tiếp giáp có mầm ngọc xanh.

Pháp bảo: Chân Giả Kiếm
Đặc điểm đề xuất: Lõi kiếm kim loại rõ, một dải phản chiếu trong suốt chạy lệch cạnh lưỡi.

Pháp bảo: Sát Lục Kiếm
Đặc điểm đề xuất: Kiếm đen hẹp có rãnh son, hộ thủ hai móc và chuôi quấn vải chàm.

Pháp bảo: Thời Gian Bản Nguyên Chung
Đặc điểm đề xuất: Chuông đồng cổ dáng cao, ba gờ đồng tâm, núm treo bán nguyệt.

Pháp bảo: Không Gian Bản Nguyên Kính
Đặc điểm đề xuất: Gương bát giác ngọc xanh đen, các tầng khung lệch nhau, lòng gương có nếp sáng.

Pháp bảo: Luân Hồi Bản Nguyên Luân
Đặc điểm đề xuất: Pháp luân ngọc ngà và đồng cổ có sáu khoang rỗng uốn như cánh lá.

Pháp bảo: Hủy Diệt Bản Nguyên Thương
Đặc điểm đề xuất: Thương mực, mũi tam giác có một vết rạn ngà, cổ thương khóa đồng.

Pháp bảo: Hư Vô Bản Nguyên Ấn
Đặc điểm đề xuất: Ấn vuông ngọc đen, có lỗ xuyên như cửa hẹp, viền vàng và núm thấp.

Pháp bảo: Âm Dương Bản Nguyên Đỉnh
Đặc điểm đề xuất: Đỉnh ba chân thấp, hai tai ngọc ngà và mực, ngọc xanh ở tâm.

Pháp bảo: Ngũ Hành Bản Nguyên Châu
Đặc điểm đề xuất: Một hạt châu chứa năm dải khoáng, vành đỡ vàng có năm điểm khảm.

Pháp bảo: Thiên Địa Bản Nguyên Đồ
Đặc điểm đề xuất: Cuộn lụa ngà mở ngang, trục đồng, họa tiết núi sông trời bằng mực ngọc.

Pháp bảo: Vạn Đạo Bản Nguyên Kiếm
Đặc điểm đề xuất: Kiếm có năm đoạn vật liệu trên sống lưỡi, các đường khảm hội tụ về mũi.

Chí tôn pháp bảo

Pháp bảo: Thiên Ngưu Hồn Khải
Đặc điểm đề xuất: Giáp ngực kim loại mực, hai gờ vai như sừng, lõi ngọc xanh ở tâm.

Pháp bảo: Thiên Nghịch Châu
Đặc điểm đề xuất: Một hạt châu xám ngà nhẵn với vài hõm khảm nhỏ và lõi sáng dịu.

Pháp bảo: Định Giới La Bàn
Đặc điểm đề xuất: La bàn bằng đồng và ngọc mực, gồm ba vành lồng nhau và kim thanh ở tâm.

Pháp bảo: Thiên Đạo Chi Luân
Đặc điểm đề xuất: Pháp luân bảy nan vàng cổ, tâm ngọc trắng, vành phong hóa.

Pháp bảo: Thái Sơ Hỗn Độn Kiếm
Đặc điểm đề xuất: Kiếm ngọc mờ chứa mây khoáng tối, hộ thủ kim loại cổ nằm ngang.

Pháp bảo: Vạn Giới Trấn Thiên Đỉnh
Đặc điểm đề xuất: Đỉnh ba chân trụ và hai quai cao, thành vuông bo góc khảm những lớp địa hình.

Pháp bảo: Cửu Thiên Diệt Thế Chung
Đặc điểm đề xuất: Chuông vai rộng có chín phiến khảm, miệng dày và vết rạn đỏ kín trên thân.

Pháp bảo: Hỗn Nguyên Phá Giới Phủ
Đặc điểm đề xuất: Rìu gồm hai mảng lưỡi lệch, sống đá ngọc mực, cán ngắn quấn vải chàm.

Pháp bảo: Thiên Mệnh Thần Ấn
Đặc điểm đề xuất: Ấn vuông ngọc ngà, núm thắt ba tầng bằng kim loại cổ, rãnh son chạy dọc mặt bên.

Pháp bảo: Thái Cổ Luân Hồi Kính
Đặc điểm đề xuất: Gương tròn khung đồng rêu, vòng trong uốn như cánh cuộn, vệt xoắn trên mặt ngọc.

Pháp bảo: Vạn Đạo Quy Nhất Kiếm
Đặc điểm đề xuất: Kiếm ngọc trắng dài, nhiều đường khảm hội tụ thành một sống kiếm.

Pháp bảo: Hỗn Độn Khai Thiên Thương
Đặc điểm đề xuất: Thương mũi nêm, hai cạnh ngọc ngà và kim loại mực ôm lõi xanh, cán có ba đai đồng.

Pháp bảo: Thiên Địa Vô Cực Đồ
Đặc điểm đề xuất: Cuộn lụa mực mở gần vuông, trục ngọc ngà, một đường uốn giữa hai mảng sáng tối.

Pháp bảo: Chư Thiên Phong Giới Tháp
Đặc điểm đề xuất: Tháp nhỏ chín tầng, mái đồng thấp, thân ngọc mực xen cửa ngà.

Pháp bảo: Thái Hư Diệt Đạo Luân
Đặc điểm đề xuất: Luân mỏng dạng vòng khuyết, ba lưỡi cong lồng trong, tâm rỗng và ba điểm ngọc lam.

Biểu tượng lấy vật phẩm làm tâm, chừa biên 10–12%, có nền alpha và giữ được hình dáng ở 32–64 px. Hào quang, vệt bay, viền phẩm và nhãn xác suất do giao diện hoặc hiệu ứng thời gian thực đảm nhiệm.

Tài liệu đối chiếu
Pháp bảo Tiên Nghịch · danh mục đối chiếu và vòng quay
Pháp bảo Tiên Nghịch · hình tượng và nhận diện

Chuyên mục Cầu Ma

Phân thân, Man tu và hành trình từ Ô Sơn.

Nhập môn Ô Sơn và hành trình hai thân

Thiết kế mở rộng · Cầu Ma V1.1 & V3

Phân thân vào Cầu Ma ở Ngưng Huyết tầng một, có ba huyết tuyến và bắt đầu tích lũy từ 0. Bản thể giữ cảnh giới Đạp Thiên cùng tài sản ở Tiên Nghịch. Các số bên dưới là cấu hình thiết kế.

Theo phương án phân thân, người chơi có thể đổi quyền điều khiển giữa hai thân. Chỉ thân đang hoạt động tiếp tục tu nền và đi chu kỳ thu thập. Đơn hàng hoặc mùa vụ đã trả chi phí có thể quyết toán một lần. Bản V1.1 từng quy định khóa kiếp cũ sau chuyển sinh. Tài liệu Cầu Ma V3 và mô tả dự án về sau dùng phương án phân thân.

Tiền, đan, kinh mạch, sao Cổ Thần và bản nguyên ở Tiên Nghịch có phạm vi riêng. Một bộ skin đang mặc áp hồ sơ phần trăm lên chỉ số bản địa. Mỗi thế giới vẫn giữ quyền sở hữu, nguồn nhận và cấp cường hóa của đồ cũ.

Gói nhập môn Ô Sơn dự kiến cấp một lần gồm tám món cơ bản bậc một, 50 thạch tệ, 6 lô thảo dược và 5 vật tư săn. Người mới mở Thanh Trần Tán và có thể đi qua trận hướng dẫn khi ô đồng hành còn trống.

Sáu nhiệm vụ đầu tiên

Thứ tự: 1
Việc cần làm: Kiểm tra hành trang hai kiếp
Phần thưởng lần đầu: 30 thạch tệ

Thứ tự: 2
Việc cần làm: Điều khiển khí huyết
Phần thưởng lần đầu: kỹ năng Điều khiển khí huyết và 300 đơn vị tiến độ

Thứ tự: 3
Việc cần làm: Hái dược trên Ô Long Sơn
Phần thưởng lần đầu: 6 lô thảo dược và 1 Ô Long Tiên

Thứ tự: 4
Việc cần làm: Luyện Thanh Trần Tán
Phần thưởng lần đầu: 20 thạch tệ. không phát thêm bản sao thành phẩm

Thứ tự: 5
Việc cần làm: Dùng thuốc đúng cách
Phần thưởng lần đầu: 200 đơn vị tiến độ và chỉ dẫn nguồn dược

Thứ tự: 6
Việc cần làm: Bảo vệ đường trở về
Phần thưởng lần đầu: 50 thạch tệ, 5 vật tư và đường tới Hắc Viêm

Ở trận bảo vệ đường về, hãy để dành Man lực khi thấy báo hiệu đòn lao. Thử thách kết thúc khi giữ đường được 60 giây hoặc đánh tan đợt truy đuổi để thoát. Ô Huyết Trần cần hơn 50 huyết tuyến và đã học thuật. Tam Sát cần 200 huyết tuyến cùng truyền thừa tương ứng.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Cảnh giới, huyết tuyến và các cửa đột phá

Thiết kế mở rộng · Cầu Ma V1.1 & V3

Đường Man tu có 16 mốc cảnh giới trên nhiều trục. Thử thách tiến từ điều khiển khí huyết, chọn Man Văn rồi luyện cốt đến nhận thức bản mệnh, giới lực và chín lần cảm ngộ.

Mười sáu cảnh giới trong thiết kế

Bậc: 1
Tên: Ngưng Huyết
Cách tiến triển: Ngưng huyết tuyến. tầng 1–8 có mốc. hậu kỳ 9–11 không phải ba mốc cố định chung.

Bậc: 2
Tên: Khai Trần
Cách tiến triển: Hoàn chỉnh Man Văn gắn điều mình nhận là thật. không chỉ bấm đan.

Bậc: 3
Tên: Tế Cốt
Cách tiến triển: Tế lực vào Man cốt. khối 26 và Man Hồn cùng một cửa thử.

Bậc: 4
Tên: Man Hồn
Cách tiến triển: Dung hợp huyết, cốt và hồn. hiện tượng Man tượng có ý nghĩa.

Bậc: 5
Tên: Mệnh Cách
Cách tiến triển: Nhận diện mệnh của mình từ chứng cứ, không lấy bảng ý cảnh Tiên Nghịch thay tên.

Bậc: 6
Tên: Mệnh Khuyết
Cách tiến triển: Xác định điều thiếu. lựa chọn cách bù khuyết có hệ quả gameplay.

Bậc: 7
Tên: Mệnh Cung
Cách tiến triển: Gắn hiểu biết bản thân với biến đổi thế giới. lựa chọn quan hệ giữa các nút.

Bậc: 8
Tên: Mệnh Giới
Cách tiến triển: Sử dụng giới lực. Vị Giới không tạo thành realm cộng thêm cùng cấp.

Bậc: 9
Tên: Chưởng
Cách tiến triển: Từ giới lực tới nắm giữ quy tắc, có điều kiện Kiếp Nguyệt/Kiếp Dương của tuyến tinh không.

Bậc: 10
Tên: Duyên
Cách tiến triển: Nhận và xử lý liên hệ duyên. không chỉ thêm sát thương.

Bậc: 11
Tên: Sinh
Cách tiến triển: Sinh và luân hồi. khác hệ Tu Mệnh.

Bậc: 12
Tên: Diệt
Cách tiến triển: Diệt niệm và biến đổi cấu trúc chiến trường. không xóa tài khoản/thế giới online.

Bậc: 13
Tên: Hiên
Cách tiến triển: Hiên/Sublime, phân biệt danh xưng Hiên Tôn. không thêm Chuẩn Hiên thành tầng bắt buộc.

Bậc: 14
Tên: Bất Khả Ngôn
Cách tiến triển: Ranh giới ý chí cao. đối chiếu bản thân và cấu trúc vũ trụ.

Bậc: 15
Tên: Cửu Trọng Đạo Thần
Cách tiến triển: Chín lần cảm ngộ/đạo thần ở lớp Cổ Táng, không quay lại tu vi Ngưng Khí.

Bậc: 16
Tên: Đạo Vô Nhai
Cách tiến triển: Kết chương chứng đạo Cầu Ma. mở quyền tới truyện sau theo tuyến GAME.

Ngưỡng huyết tuyến của tầng 1–8 lần lượt là 3, 6, 11, 25, 53, 109, 243 và 399. Hậu kỳ bắt đầu trên 500. Bản thiết kế dùng 951 làm mục tiêu chuẩn bị Khai Trần cho người chơi. Các tầng 9–11 không có ba ngưỡng cố định chung. Khi Tế Cốt, người chơi giữ tối đa 25 khối ổn định. Khối thứ 26 chỉ được chốt đồng thời với lần vượt cửa Man Hồn thành công.

Các cửa thử trong hành trình

Thử thách: Ngưng Huyết nhập môn
Điều kiện: Huyết tuyến 3, tutorial kiểm soát lực hoàn tất
Mục tiêu trong lần thử: Chọn tụ lực → giữ ổn định → xả một đòn. ba trạng thái chứ không bài phản xạ bắt buộc.

Thử thách: Tăng huyết tuyến / tầng 2–8
Điều kiện: Đạt ngưỡng 6/11/25/53/109/243/399 theo tầng. q_native đủ
Mục tiêu trong lần thử: Cảnh huyết tuyến tăng, thử kiểm soát nhỏ ở mốc mở thuật. không bắt boss ở mỗi tuyến.

Thử thách: Hậu kỳ và nền trước Khai Trần
Điều kiện: Trên 500 vào hậu kỳ. mốc951 là tuyến cân bằng PLAYER, không ngưỡng canon chung
Mục tiêu trong lần thử: Tăng độ hoàn thiện qua tu luyện/dược/nghiên cứu. 781 hiện là mốc thường chứ không hard cap mọi huyết thống.

Thử thách: Khai Trần
Điều kiện: Nền phù hợp. ba chứng cứ ký ức. vượt Hàm Sơn Xích. chọn Man Văn
Mục tiêu trong lần thử: Ba hồi: xác lập hình, giữ hình trước áp lực, hiện Man Văn. nguồn hình do lựa chọn journal.

Thử thách: Tế Cốt — khối đầu
Điều kiện: Khai Trần hoàn đoạn. biết truyền thừa. hoàn nhiệm vụ chiến trường
Mục tiêu trong lần thử: Dẫn Man lực vào một khối cốt. giữ lực ổn. giải áp lực thân. không vẽ thêm sao trán.

Thử thách: Tế Cốt — rèn tới25
Điều kiện: Cốt trước đã ổn và vật liệu local đủ. ordinal tăng tuần tự
Mục tiêu trong lần thử: Thử đợt cốt theo số đã sở hữu, hình xương cập nhật ở UI riêng. khối đầu/khối2/tới25 giữ khác biệt.

Thử thách: Khối26 và Man Hồn
Điều kiện: Đủ25cốt. huyết/man_van/soulPrep đã hoàn, bấm xác nhận cửa lớn
Mục tiêu trong lần thử: Giữ26 tạm trong attempt, cân bằng huyết–cốt–hồn, chốt Man Hồn cùng transaction.

Thử thách: Mệnh Cách
Điều kiện: Man Hồn hoàn. đọc bia Tu Mệnh. hai chứng cứ bản thân và một phủ chứng
Mục tiêu trong lần thử: Đối chiếu lời kể. chọn một mệnh đề có căn cứ. bảo vệ nó trong trận có dấu hiệu tương ứng.

Thử thách: Mệnh Khuyết
Điều kiện: Hoàn Mệnh Cách. xác định thiếu khuyết và hoàn hành động khắc phục
Mục tiêu trong lần thử: Chọn cách bù thay đổi phòng. không bắt mua một phần tử ngũ hành giả.

Thử thách: Mệnh Cung
Điều kiện: Một kết nối nhật ký bản thân/thế giới được chứng minh
Mục tiêu trong lần thử: Sắp các neo và phòng vệ mạng liên hệ, không copy bàn kinh mạch TN.

Thử thách: Mệnh Giới / quyền dùng giới lực
Điều kiện: Mệnh Cung hoàn. vùng thử xác nhận bản thân không đồng nghĩa chiếm đất người khác
Mục tiêu trong lần thử: Chọn ba neo giới trong instance. giữ thứ tự dùng giới lực.

Thử thách: Kiếp Nguyệt và Kiếp Dương
Điều kiện: Đã mở tuyến tinh không. hai adapter thử giới lực, không là hai XP pool vĩnh viễn
Mục tiêu trong lần thử: Hai encounter ngược đặc tính nguồn lực. khóa detail tiểu bậc vào lore-review trước public.

Thử thách: Chưởng
Điều kiện: Mệnh Giới và tuyến Kiếp đã chứng. hiểu một quy tắc
Mục tiêu trong lần thử: Dùng chính quy tắc đánh vào cơ chế. không thắng bằng chỉ số giả.

Thử thách: Duyên
Điều kiện: Đã Chưởng. phân biệt ba dạng liên kết
Mục tiêu trong lần thử: Chém/giữ liên hệ đúng thời điểm. Tam Sát nâng family chứ không thêm bản thứhai.

Thử thách: Sinh
Điều kiện: Duyên hoàn. hiểu vòng sinh trong bối cảnh mới
Mục tiêu trong lần thử: Phòng thay đổi lượt trở lại. sửa chiến thuật theo ký ức run nhưng không hồi thưởng.

Thử thách: Diệt
Điều kiện: Sinh hoàn. Man thân nếu dùng phải đủ trục riêng
Mục tiêu trong lần thử: Kết thúc cấu trúc vòng thay vì phá hết mọi NPC. tiến trình thân/hồn lưu độc lập.

Thử thách: Hiên
Điều kiện: Diệt đủ. thử tác động trường tinh hệ
Mục tiêu trong lần thử: Giữ/phủ định một trường lực trong bản đồ vũ trụ instanced.

Thử thách: Bất Khả Ngôn
Điều kiện: Hoàn Hiên. đủ bằng chứng hai phía thế giới
Mục tiêu trong lần thử: Đối chiếu hình phản chiếu, bảo vệ neo ký ức, không hỏi câu đố ngoài dữ liệu game.

Thử thách: Cửu Trọng Đạo Thần
Điều kiện: Mở Cổ Táng. mỗi trọng có cảm ngộ và objective riêng
Mục tiêu trong lần thử: Chín module: phân biệt hình/nguồn. định vị bản thân. hình thành đạo linh. liên hệ. loại mâu thuẫn. nhận giới hạn. đổi cách hiểu. thống nhất. hoàn chỉnh. Các tên module là game.

Thử thách: Đạo Vô Nhai
Điều kiện: Chín trọng và kết chương nhân vật. không cần skin hiếm/hôn nhân
Mục tiêu trong lần thử: Hoàn thử tổng hợp, kết nhật ký, mở entitlementworld3 và ngừng nếu world3chưa có content.

Chín bài cảm ngộ ở Cổ Táng

Trọng: 1
Tên bài: Thấy hình
Mục tiêu: Nhận biết dấu báo thật giữa hình trang trí; dùng cùng dữ liệu cho mọi thiết bị.

Trọng: 2
Tên bài: Hiểu lực
Mục tiêu: Phá một lớp phòng hộ bằng đúng loại tương tác thay vì tăng lực chiến.

Trọng: 3
Tên bài: Định ý
Mục tiêu: Khóa một ý định trước trận; không đổi ngay sau khi biết seed kết quả.

Trọng: 4
Tên bài: Xét nguồn
Mục tiêu: Lần theo nguồn buff của địch và cắt liên kết đúng.

Trọng: 5
Tên bài: Giữ giới
Mục tiêu: Giữ hai neo trong giới hạn tài nguyên; có hai cấu hình ngang ngân sách.

Trọng: 6
Tên bài: Vượt biểu hiện
Mục tiêu: Tắt một cách nhìn gây nhiễu, đọc sự kiện thật để điều khiển auto.

Trọng: 7
Tên bài: Bỏ giả định
Mục tiêu: Thắng bằng bảo vệ thay vì hạ toàn bộ mục tiêu.

Trọng: 8
Tên bài: Chứng giới hạn
Mục tiêu: Vượt thử có trần tài nguyên, không dùng vật phẩm thế giới trước.

Trọng: 9
Tên bài: Tự chọn đường
Mục tiêu: Ghép ba cơ chế đã học; hoàn bằng hành động, không chọn một đáp án đạo đức duy nhất.

Khi thất bại có cam kết, phần bị trừ lấy từ tiến độ đang tích của đoạn hiện tại. Bản thiết kế đặt trần cộng dồn 25% mức yêu cầu của đoạn trong 24 giờ. Hoàn tất Đạo Vô Nhai mở quyền đi tiếp khi thế giới kế tiếp sẵn sàng.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Cốt truyện Cầu Ma theo chương

Thiết kế mở rộng · Cầu Ma V1.1 & V3

Các chương 00–18 theo tuyến Ô Sơn, Nam Thần, Cửu Phong, Tử Hải, tinh hải và Cổ Táng. Tô Minh là nhân vật trung tâm của nguồn truyện. Người chơi theo tuyến chuyển thể bằng phân thân của mình.

Tra cứu 19 chương

Chương: 00
Tên: Qua cửa Đạp Thiên
Địa điểm: Cổng chuyển sinh ngoài các truyện
Trọng tâm: Xem tài sản/đọc quy tắc kiếp mới → tạo preview → xác nhận một lần

Chương: 01
Tên: Một thân thể giữa Ô Sơn
Địa điểm: Bộ lạc Ô Sơn; đường hái dược Ô Long Sơn
Trọng tâm: Khảo nghiệm huyết tuyến → hái dược → luyện lần đầu → phòng vệ đường về

Chương: 02
Tên: Lửa núi và huyết nguyệt
Địa điểm: Hắc Viêm Phong; hang Nguyệt Dực
Trọng tâm: Thăm dò đường nóng → nhận biết Nguyệt Dực → học Hỏa Man qua hồi ức → thử sinh tồn

Chương: 03
Tên: Thử luyện và đường trở về
Địa điểm: Phong Quyến Sơn; lộ trình di dời Ô Sơn
Trọng tâm: Leo núi áp lực theo chặng → điều khiển huyết → trở về → bảo vệ đoàn người

Chương: 04
Tên: Người lạ ở Nam Thần
Địa điểm: Rừng Nam Thần; Hàm Sơn Thành
Trọng tâm: Tìm nơi trú → hồi thương → giao dịch dược → đối chiếu thông tin đường về

Chương: 05
Tên: Man Văn của chính mình
Địa điểm: Hàm Sơn Xích; đàn Khai Trần
Trọng tâm: Vượt chín đoạn xích → chọn ba ký ức trụ → phác Man Văn → vượt thử Khai Trần

Chương: 06
Tên: Một ngọn phong là nhà
Địa điểm: Thiên Hàn Tông; Đệ Cửu Phong
Trọng tâm: Nhận việc sư môn → quan sát phong → mộng trận Hổ Tử → bảo vệ một trận địa

Chương: 07
Tên: Bên kia Thiên Lam
Địa điểm: Thiên Lam Bích Chướng; chiến trường Man–Vu
Trọng tâm: Trinh sát → nhận diện kiểu Vu thuật → giữ tuyến → tế Man cốt đầu tiên

Chương: 08
Tên: Cửu Âm và lời khế
Địa điểm: Cửu Âm Giới; vùng di tích Chúc Cửu Âm
Trọng tâm: Tìm tuyến an toàn → thương lượng điều kiện → đối diện áp lực cổ linh → mang chứng cứ ra

Chương: 09
Tên: Nghe con đường Tu Mệnh
Địa điểm: Hằng Ly Sơn trong Cửu Âm Giới — bia Tu Mệnh; Đại Ngu ở nhánh khảo cứu sau
Trọng tâm: Khảo sát bia → dựng quan hệ huyết–cốt–hồn → ba phòng giải cấm → ghi điều chưa hiểu

Chương: 10
Tên: Man Hồn giữa Tử Hải
Địa điểm: Đông Hoang Tháp; Đệ Cửu Phong trên Tử Hải
Trọng tâm: Leo chặng tháp → bảo vệ Cửu Phong → chuẩn bị khối cốt 26 → hoàn thành Man Hồn

Chương: 11
Tên: Bước ra khỏi Âm Tử
Địa điểm: Âm Tử Tuyền Qua; Thần Nguyên Phế Địa; Xích Hỏa Tinh
Trọng tâm: Xác định Âm/Dương của môi trường → sống sót → tìm người dẫn đường → chốt Mệnh Cách

Chương: 12
Tên: Một ý chí trong dị địa
Địa điểm: Tây Hoàn Dị Địa; biển bia đá; Ách Thương
Trọng tâm: Giữ ý chí qua các vòng → truy dấu khuyết → dựng Mệnh Cung → tranh quyền trường lực

Chương: 13
Tên: Tinh hải và Đệ Ngũ Hồng Lô
Địa điểm: Hắc Mặc Tinh; Thần Nguyên Tinh Hải; Đệ Ngũ Hồng Lô
Trọng tâm: Đi tuyến tinh hải → quan sát nhiều thế lực → qua cửa lò → thử giới lực

Chương: 14
Tên: Chân giới hay điều ta tưởng
Địa điểm: Đệ Ngũ Chân Giới — lớp nhận thức; Minh Môn
Trọng tâm: So sánh các nguồn ký ức → kiểm tra chi tiết không thể biết → chọn điều cần chứng minh → cắt một liên kết giả

Chương: 15
Tên: Trở lại và Chúng Linh
Địa điểm: Đạo Thần Chân Giới; Chúng Linh Điện; Thiên Linh bộ
Trọng tâm: Bảo vệ thế lực → tiếp cận Chúng Linh Điện → phân biệt thân/hồn → thử thăng linh → trở lại giới lực

Chương: 16
Tên: Bốn cánh và bầu trời đối diện
Địa điểm: Tang Tương; các lớp Tam Hoang; Ám Thần/Nghịch Thánh
Trọng tâm: Đối chiếu bản đồ hai phía → xác định neo sinh linh → thử Hiên → vượt ranh giới nhận thức

Chương: 17
Tên: Cổ Táng và chín lần hiểu đạo
Địa điểm: Cổ Táng; Thất Nguyệt Tông; đường cảm ngộ
Trọng tâm: Vào lớp Cổ Táng → chứng minh nhận thức → chín lần cảm ngộ → đối chiếu giới hạn cũ

Chương: 18
Tên: Đạo Vô Nhai — bước đi tiếp
Địa điểm: Không gian kết chương Cổ Táng; Cổng Sơn Hải
Trọng tâm: Xem lại các mối liên hệ → hoàn chứng đạo cá nhân → ghi kết chương → xem cổng tiếp theo

Nhánh nghiên cứu Tu Mệnh và các trục bản địa

Tên: Tên mình gọi
Cảnh giới: Mệnh Cách
Điểm lĩnh hội: 50

Tên: Điều mình biết
Cảnh giới: Mệnh Cách
Điểm lĩnh hội: 50

Tên: Điều mình lựa chọn
Cảnh giới: Mệnh Cách
Điểm lĩnh hội: 50

Tên: Phần ký ức thiếu
Cảnh giới: Mệnh Khuyết
Điểm lĩnh hội: 100

Tên: Chứng cứ đối chiếu
Cảnh giới: Mệnh Khuyết
Điểm lĩnh hội: 100

Tên: Chấp nhận giới hạn
Cảnh giới: Mệnh Khuyết
Điểm lĩnh hội: 100

Tên: Neo thân
Cảnh giới: Mệnh Cung
Điểm lĩnh hội: 150

Tên: Neo ý chí
Cảnh giới: Mệnh Cung
Điểm lĩnh hội: 150

Tên: Liên hệ với người khác
Cảnh giới: Mệnh Cung
Điểm lĩnh hội: 150

Tên: Cấu trúc mệnh cung
Cảnh giới: Mệnh Cung
Điểm lĩnh hội: 150

Tên: Cảm nhận giới lực
Cảnh giới: Mệnh Giới
Điểm lĩnh hội: 250

Tên: Xác lập phạm vi
Cảnh giới: Mệnh Giới
Điểm lĩnh hội: 250

Tên: Giữ neo trong thử luyện
Cảnh giới: Mệnh Giới
Điểm lĩnh hội: 250

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Bản đồ và 66 hồ sơ địa điểm

Thiết kế mở rộng · Cầu Ma V1.1 & V3

Cầu Ma có 30 địa điểm nền, 16 khu bổ sung V2 và 20 khu V3. Mỗi khu trong danh mục là một nơi chơi, tuyến hoạt động hoặc khảo nghiệm. Tám bí cảnh V3 đã nằm trong tổng 20 khu của đợt này.

30 địa điểm nền

Địa điểm: Cổng Chuyển Sinh
Loại: Khu sinh hoạt
Chương: 00

Địa điểm: Ô Sơn Bộ Lạc
Loại: Khu sinh hoạt
Chương: 01

Địa điểm: Ô Long Sơn — đường hái dược
Loại: Khu thu thập
Chương: 01

Địa điểm: Hắc Viêm Phong
Loại: Khu thu thập
Chương: 02

Địa điểm: Hang Nguyệt Dực
Loại: Địa điểm bí cảnh
Chương: 02

Địa điểm: Phong Quyến Sơn
Loại: Khảo nghiệm
Chương: 03

Địa điểm: Đường di dời Ô Sơn
Loại: Trận cốt truyện
Chương: 03

Địa điểm: Rừng Nam Thần
Loại: Khu thu thập
Chương: 04

Địa điểm: Hàm Sơn Thành
Loại: Khu sinh hoạt
Chương: 04

Địa điểm: Hàm Sơn Xích
Loại: Khảo nghiệm
Chương: 05

Địa điểm: Thiên Hàn Tông — Đệ Cửu Phong
Loại: Khu sinh hoạt
Chương: 06

Địa điểm: Mộng trận Cửu Phong
Loại: Địa điểm bí cảnh
Chương: 06

Địa điểm: Thiên Lam Bích Chướng
Loại: Hoạt động chung
Chương: 07

Địa điểm: Chiến trường Man–Vu
Loại: Khu thu thập
Chương: 07

Địa điểm: Cửu Âm Giới
Loại: Địa điểm bí cảnh
Chương: 08

Địa điểm: Đại Ngu Thiên Cung
Loại: Địa điểm bí cảnh
Chương: 09

Địa điểm: Đông Hoang Tháp
Loại: Khảo nghiệm
Chương: 10

Địa điểm: Tử Hải — Cửu Phong còn lại
Loại: Trận cốt truyện
Chương: 10

Địa điểm: Âm Tử Tuyền Qua
Loại: Chuyển vùng
Chương: 11

Địa điểm: Thần Nguyên Phế Địa — Xích Hỏa Tinh
Loại: Khu thu thập
Chương: 11

Địa điểm: Tây Hoàn Dị Địa — biển bia đá
Loại: Địa điểm bí cảnh
Chương: 12

Địa điểm: Hắc Mặc Tinh
Loại: Khu sinh hoạt
Chương: 13

Địa điểm: Thần Nguyên Tinh Hải
Loại: Khu thu thập
Chương: 13

Địa điểm: Đệ Ngũ Hồng Lô
Loại: Địa điểm bí cảnh
Chương: 13

Địa điểm: Đệ Ngũ Chân Giới — lớp nhận thức
Loại: Trận cốt truyện
Chương: 14

Địa điểm: Đạo Thần Chân Giới
Loại: Khu sinh hoạt
Chương: 15

Địa điểm: Chúng Linh Điện
Loại: Khảo nghiệm
Chương: 15

Địa điểm: Tang Tương — hai phía bầu trời
Loại: Bản đồ vũ trụ
Chương: 16

Địa điểm: Cổ Táng — Thất Nguyệt Tông
Loại: Khu sinh hoạt
Chương: 17

Địa điểm: Cửa Đạo Vô Nhai
Loại: Khảo nghiệm
Chương: 18

16 khu bổ sung V2

Địa điểm: An Đông — lối lên bộ lạc
Hoạt động: Hàm Sơn. giao tiếp, luận bàn kiểm lực, trao đổi tin.

Địa điểm: Nhan Trì — đàn thử Man thuật
Hoạt động: Hàm Sơn. nối dấu/giữ thứ tự, chuẩn bị Khai Trần.

Địa điểm: Phổ Khương — đường tử khí
Hoạt động: Hàm Sơn. chọn lối và giữ nguồn hồi phục. alias Bồ Khương cùng thực thể.

Địa điểm: Thiên Hàn Động
Hoạt động: ba trạm hàn, điểm nghỉ và điều lực.

Địa điểm: Hoa viên Nhị sư huynh
Hoạt động: chăm cây, sinh–diệt, bảo vệ vườn. không cung điện/linh điền Tiên Nghịch.

Địa điểm: Vu Thành — khu hồng thạch
Hoạt động: giám định, mở đá, bảo quản mẫu. không giả bảo đảm theo màu vỏ.

Địa điểm: Táng Cốt Chi Địa
Hoạt động: khế ước và âm linh võ giả. chọn có che chở hoặc tự vượt.

Địa điểm: Di thể Chúc Cửu Âm — đường khảo cứu
Hoạt động: khoang áp lực, neo và mẫu theo quyền nhiệm vụ.

Địa điểm: Nam Trạch Đảo — nơi hẹn
Hoạt động: bảo vệ/truy kích và tuyến Vũ Huyên–Minh Long.

Địa điểm: Thiên Bảo Tinh — hành trình/tàn tích
Hoạt động: thời đoạn trước biến cố hoặc về sau. không hai trạng thái mâu thuẫn cùng cảnh.

Địa điểm: Chiến địa Tà tông — pháp bàn hội chiến
Hoạt động: phá nguồn tạo âm long, không farm bản thể Tô Minh.

Địa điểm: Tinh Hải — đường Sa Thổ
Hoạt động: thương lượng/chiến đấu. không coi cả chủng tộc mặc định thù địch.

Địa điểm: Hồng Lô — đường Oán Ngụy
Hoạt động: hộ tống, hắc hỏa, mở đường thoát.

Địa điểm: Thất Nguyệt — trận thứ mười lăm
Hoạt động: thử chính mình, đọc cấu trúc trận.

Địa điểm: Thế giới Chứng Đạo thụ
Hoạt động: lớp ngoài/giữa/trong. giúp đỡ có giới hạn theo lớp.

Địa điểm: Ba Mươi Ba Trời — hồi cuối
Hoạt động: cảm ngộ và hồi ức, không 33 cảnh giới mới.

20 khu V3

Mã: M01
Khu: Ô Long Sơn: dược lộ sau mưa
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Mang ba gói dược qua đường mưa, được phép mất tối đa một gói.

Mã: M02
Khu: Hắc Viêm: địa hỏa tầng thấp
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Giữ cửa xả và vượt ba nhịp nhiệt ở địa hỏa.

Mã: M03
Khu: Nam Thần: bờ suối mưa dài
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Hộ tống túi mẫu, giữ lực cho lần vượt suối cuối.

Mã: M04
Khu: Thiên Lam: tuyến cứu viện ngoài bích
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Cứu ba trạm tiếp tế trong 90 giây và giữ ít nhất hai trạm.

Mã: M05
Khu: Cửu Âm: đường ngoài Vu Thành
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Chọn thuê bảo hộ với phần thưởng tiền giảm 10% hoặc tự đi và làm thêm mục tiêu.

Mã: M06
Khu: Tử Hải: bờ neo Cửu Phong
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Giữ neo Cửu Phong khi sóng và vật trôi uy hiếp bến.

Mã: M07
Khu: Xích Hỏa: bãi lam thạch
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Tháo phong để bảo toàn mẫu lam thạch.

Mã: M08
Khu: Tây Hoàn: vành ngoài biển bia
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Đối chiếu hai manh mối tìm bia thật trong ba bia.

Mã: M09
Khu: Hắc Mặc: vành đai hộ hàng
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Đưa đủ hai thùng hàng qua vành đai trong 90 giây.

Mã: M10
Khu: Tinh Hải: đường qua vùng đàn
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Nhắm vào điểm hội tụ của đàn Sa Thổ hoặc chọn nhánh tương tác phù hợp.

Mã: M11
Khu: Đạo Thần: tuyến thu cấm
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Gỡ ba nguồn liên kết theo thứ tự công kích, khống chế hoặc hồi phục mà người chơi chọn.

Mã: M12
Khu: Thất Nguyệt: vòng ngoại sơn
Kiểu chơi: Thu thập lặp
Mục tiêu nổi bật: Xem trước và thích ứng với quy tắc đổi sau mỗi ba chu kỳ.

Mã: M13
Khu: Phong Quyến: dấu bước chưa quên
Kiểu chơi: Bí cảnh sáu phòng
Mục tiêu nổi bật: Giữ ổn định qua ba chặng áp lực trong 90 giây.

Mã: M14
Khu: Hàm Sơn: lối sau kiếm thuyền
Kiểu chơi: Bí cảnh sáu phòng
Mục tiêu nổi bật: Giữ ba neo, tìm khe ngắt lực hút.

Mã: M15
Khu: Thiên Môn: hỏa tầng hồi ức
Kiểu chơi: Bí cảnh sáu phòng
Mục tiêu nổi bật: Sống sót 75 giây và giữ ổn định hai neo.

Mã: M16
Khu: Đông Hoang: Bát Môn Tứ Quý
Kiểu chơi: Bí cảnh sáu phòng
Mục tiêu nổi bật: Đọc dấu bốn mùa, cắt nguồn vòng mùa trước hạn 90 giây.

Mã: M17
Khu: Xích Hỏa: đường Lục Đạo Phong
Kiểu chơi: Bí cảnh sáu phòng
Mục tiêu nổi bật: Giữ đúng trình tự sáu neo rồi mở lối thoát.

Mã: M18
Khu: Tây Hoàn: nhất bia nhất giới
Kiểu chơi: Bí cảnh sáu phòng
Mục tiêu nổi bật: Tranh quyền ý chí qua ba neo, giữ mức ổn định theo điều kiện của phiên thử.

Mã: M19
Khu: Tang Tương: đối ảnh hai bờ
Kiểu chơi: Bí cảnh sáu phòng
Mục tiêu nổi bật: Cắt hai liên kết giả và giữ một liên kết đúng.

Mã: M20
Khu: Cổ Táng: đạo tâm vạn tượng
Kiểu chơi: Bí cảnh sáu phòng
Mục tiêu nổi bật: Qua phòng bảo vệ, phòng phá nguồn, rồi phối hợp ba cơ chế đã học để tự chứng.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Bí cảnh, phòng thử và kẻ đối đầu

Thiết kế mở rộng · Cầu Ma V1.1 & V3

20 bí cảnh có kịch bản sáu phòng, tương ứng 120 phòng trong ba đợt thiết kế. Phần thưởng vượt lần đầu mở nghiên cứu hoặc quyền học. Lượt lặp có ngân sách riêng, dùng chung ba lượt thưởng mỗi ngày và giới hạn tích sáu lượt.

Bốn bí cảnh nền

Bí cảnh: Hang Nguyệt Dực
Chương: 02
Sáu phòng theo thứ tự: Rìa hang → Rễ cây → Khe trăng → Hốc đá → Bầy trong hang → Lối ra

Bí cảnh: Mộng trận Cửu Phong
Chương: 06
Sáu phòng theo thứ tự: Lời mời → Ba dấu → Thử dấu → Đảo hướng → Neo thực → Tỉnh mộng

Bí cảnh: Di tích Cửu Âm
Chương: 08
Sáu phòng theo thứ tự: Vào địa → Điều kiện khế → Đường cổ → Áp lực → Chứng cứ → Ra ngoài

Bí cảnh: Đệ Ngũ Hồng Lô
Chương: 13
Sáu phòng theo thứ tự: Ngoại lò → Ba cửa → Hồi ức → Chuẩn bị → Giới lực → Kết chuỗi

Tám bí cảnh V2

Bí cảnh: Thiên Hàn Động
Sáu chặng: đọc dấu → chọn khe gió → ba trụ hàn → nghỉ → tâm hàn → kết toán.

Bí cảnh: Táng Cốt
Sáu chặng: đọc khế → chọn nhận/tự vượt → đường cốt → nghỉ → cửa cổ linh → vật được giao.

Bí cảnh: Di thể Chúc Cửu Âm
Sáu chặng: khảo ngoài → chọn khoang → giữ Man Văn → bảo quản → áp lực mạch → mẫu niêm phong.

Bí cảnh: Pháp bàn Tà tông
Sáu chặng: tìm nguồn → chọn ưu tiên → âm long → chuẩn bị → ba nguồn cộng minh → rời trận.

Bí cảnh: Thiên Bảo
Sáu chặng: chọn thời đoạn → hai đường gió → người cản → nghỉ → phong bạo → ký ức/tàn tích.

Bí cảnh: Oán Ngụy
Sáu chặng: dấu hắc hỏa → cam kết che chở → hỏa lưu → nghỉ → hai lối cuối → rời cùng đối tượng.

Bí cảnh: Đại Ngu
Sáu chặng: bia ngoài → hai lời giải → cấm nối → nghỉ → chứng trước điện → nhật ký.

Bí cảnh: Chứng Đạo
Sáu chặng: lớp ngoài → dấu cửa → lối giữa → hộ tống dấu → tự chứng → rời cây.

Tám bí cảnh V3

Bí cảnh: Phong Quyến: dấu bước chưa quên
Sáu chặng theo thứ tự: Đọc ba cột dấu → Chọn lối thẳng hoặc vòng → Phá nhịp dồn lực của hồi ảnh → Hồi sinh lực hoặc Man lực → Giữ ổn định qua ba chặng trong 90 giây → Kết toán.

Bí cảnh: Hàm Sơn: lối sau kiếm thuyền
Sáu chặng theo thứ tự: Đọc dấu thạch → Chọn lối sáng hoặc lối tối thêm cấm → Đổi mục tiêu qua hai lớp ấn → Kiểm mảnh ký ức → Giữ ba neo và ngắt lực hút → Rời tổ địa.

Bí cảnh: Thiên Môn: hỏa tầng hồi ức
Sáu chặng theo thứ tự: Chọn góc nhìn hồi ức → Phân biệt hai dấu hỏa → Mở khe thoát nham → Giữ ký ức hoặc hồi lực → Sống 75 giây và ổn định hai neo → Thoát hồi ức.

Bí cảnh: Đông Hoang: Bát Môn Tứ Quý
Sáu chặng theo thứ tự: Ghi tám dấu → Chọn cửa theo mùa → Đối phó hiệu ứng Xuân và Hạ → Chọn nghỉ hoặc duy trì hiệu ứng Thu → Cắt nguồn vòng mùa Đông trong 90 giây → Kết toán.

Bí cảnh: Xích Hỏa: đường Lục Đạo Phong
Sáu chặng theo thứ tự: Đọc sơ đồ sáu neo → Chọn lối ổn định hoặc bảo toàn vật tư → Ngắt ba lần theo dấu → Khóa một neo phụ → Giữ tuần tự sáu neo trong 90 giây → Nhận dấu nghiên cứu.

Bí cảnh: Tây Hoàn: nhất bia nhất giới
Sáu chặng theo thứ tự: Chọn bia → Đối chiếu hai lời chỉ dẫn → Đối phó hồi ảnh sao một kỹ năng → Giữ chứng cứ hoặc hồi sức → Giữ 65% ổn định đến mốc 90 giây → Kết toán.

Bí cảnh: Tang Tương: đối ảnh hai bờ
Sáu chặng theo thứ tự: Quan sát hai phía bầu trời → Chọn neo ký ức → Nhận diện nguồn sát thương thật → Tắt lớp gây nhiễu → Cắt hai liên kết và giữ một liên kết → Kết toán.

Bí cảnh: Cổ Táng: đạo tâm vạn tượng
Sáu chặng theo thứ tự: Chọn quy tắc → Bảo vệ mục tiêu → Phá nguồn → Đổi một hiệu ứng lấy một neo → Tự phối hợp ba cơ chế → Kết toán.

16 đối đầu và khảo nghiệm nền

Tên: Hắc Sơn truy binh
Nơi gặp: Đường di dời Ô Sơn
Cách xử lý: Ngắt đòn trước khi lao. không bắt giết toàn bộ mới thắng.

Tên: Nguyệt Dực — bầy trong hang
Nơi gặp: Hang Nguyệt Dực
Cách xử lý: Để dành kỹ năng vào lúc lộ lõi. hồn thú chỉ được dùng theo luật skill.

Tên: Tất Đồ — hồi ức đối đầu
Nơi gặp: Đường di dời Ô Sơn
Cách xử lý: Người chơi giữ tuyến hỗ trợ. thắng objective không tuyên bố thấp cảnh thắng bản thể.

Tên: Áp lực Hàm Sơn Xích
Nơi gặp: Hàm Sơn Xích
Cách xử lý: Chọn giữ nhịp, dừng hoặc tiêu khí huyết. có auto rule preset.

Tên: Mộng trận Hổ Tử
Nơi gặp: Mộng trận Cửu Phong
Cách xử lý: Quan sát ký hiệu đã học. suy luận trước khi kích auto.

Tên: Vu thuật trận tuyến
Nơi gặp: Thiên Lam Bích Chướng
Cách xử lý: Chọn ưu tiên người thi thuật hoặc hộ vệ. boss chống khóa cứng.

Tên: Áp lực Chúc Cửu Âm
Nơi gặp: Cửu Âm Giới
Cách xử lý: Dùng tài nguyên khế ước đã công bố hoặc tuyến khó. không công thức pay-to-win.

Tên: Cửa Man Hồn
Nơi gặp: Tử Hải — Cửu Phong còn lại
Cách xử lý: Đặt ngưỡng hồi phục. giữ Man Văn không đứt.

Tên: Kinh Nam Tử — hồi ức truy kích
Nơi gặp: Thần Nguyên Phế Địa — Xích Hỏa Tinh
Cách xử lý: Sống tới cửa thoát, phản ứng đúng nguồn tấn công.

Tên: Ách Thương — tranh quyền ý chí
Nơi gặp: Tây Hoàn Dị Địa — biển bia đá
Cách xử lý: Chọn né/giữ/cắt liên hệ. năng lực đặc thù trong snapshot truyền thừa.

Tên: Cấm chế Đệ Ngũ Hồng Lô
Nơi gặp: Đệ Ngũ Hồng Lô
Cách xử lý: Chọn đúng cửa theo clue trước. thất bại không đốt đồ độc bản.

Tên: Liên kết duyên sai lệch
Nơi gặp: Đệ Ngũ Chân Giới — lớp nhận thức
Cách xử lý: Cắt đúng nguồn thay vì spam damage vào chủ thể.

Tên: Cửa thăng linh
Nơi gặp: Chúng Linh Điện
Cách xử lý: Chọn cấu hình trước, tuân budget một actor chính.

Tên: Đối diện ý chí vũ trụ
Nơi gặp: Tang Tương — hai phía bầu trời
Cách xử lý: Bảo vệ neo bằng thứ tự kỹ năng hoặc giải cấm.

Tên: Chín lần cảm ngộ
Nơi gặp: Cổ Táng — Thất Nguyệt Tông
Cách xử lý: Trả lời bằng hành động trong trận sau khi đọc chứng cứ. luyện tập không mất đồ.

Tên: Chứng đạo cá nhân
Nơi gặp: Cửa Đạo Vô Nhai
Cách xử lý: Không bắt thắng PvP hoặc phá tài sản người khác.

24 khảo nghiệm bổ sung V2

Khảo nghiệm: Kiểm lực An Đông
Mục tiêu: Phá khiên đúng nhịp.

Khảo nghiệm: Nối mạch Nhan Trì
Mục tiêu: Dựa vào manh mối để nối ba dấu.

Khảo nghiệm: Tử khí Phổ Khương
Mục tiêu: Di chuyển giữa hai lối luân phiên.

Khảo nghiệm: Hàn động
Mục tiêu: Giữ nhiệt.

Khảo nghiệm: Hoa viên
Mục tiêu: Bảo vệ ba chậu cây khỏi mộng nhiễu.

Khảo nghiệm: Hồng thạch
Mục tiêu: Mài, dò và mở mẫu.

Khảo nghiệm: Âm linh võ giả
Mục tiêu: Đối phó ba đòn liên hoàn.

Khảo nghiệm: Di thể Chúc Cửu Âm
Mục tiêu: Khảo khoang và mang chứng cứ ra ngoài.

Khảo nghiệm: Nam Trạch
Mục tiêu: Cầm cự đến cửa thoát.

Khảo nghiệm: Thiên Bảo
Mục tiêu: Vượt gió và nền rạn.

Khảo nghiệm: Âm long
Mục tiêu: Phá ba pháp bàn tạo nguồn.

Khảo nghiệm: Sa Thổ
Mục tiêu: Đọc lúc tản, tụ hoặc thương lượng.

Khảo nghiệm: Đàn Tinh Hải
Mục tiêu: Bảo vệ đoàn khảo sát.

Khảo nghiệm: Oán Ngụy
Mục tiêu: Giữ mục tiêu hộ tống sống sót.

Khảo nghiệm: Hồng Lô
Mục tiêu: Hộ hỏa.

Khảo nghiệm: Thánh Tinh Bào
Mục tiêu: Khảo tinh vị.

Khảo nghiệm: Bảo hồ lô
Mục tiêu: Xuất kiếm và thu ảnh.

Khảo nghiệm: Ảnh đối thủ Thất Nguyệt
Mục tiêu: Xử lý hồi ảnh học một kỹ năng.

Khảo nghiệm: Không Gian Tiên
Mục tiêu: Thao tác với neo.

Khảo nghiệm: Cửa ngoài Chứng Đạo
Mục tiêu: Vượt lớp cửa đầu.

Khảo nghiệm: Lớp giữa Chứng Đạo
Mục tiêu: Hộ tống dấu.

Khảo nghiệm: Lớp trong Chứng Đạo
Mục tiêu: Tự chứng.

Khảo nghiệm: Ba Mươi Ba Trời
Mục tiêu: Hoàn các cụm hồi ức.

Khảo nghiệm: Cửu Phong
Mục tiêu: Cùng giữ đường trước sóng và mộng nhiễu.

Vật phẩm giữa lượt được giữ tạm đến khi kết toán thắng. Gỡ bỏ lượt hoặc thua không mang phần tạm ra ngoài. Một lần vượt thủ công có thể mở bản vẽ hoặc hồ sơ để dùng trong các lượt sau.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Đồng hành, hồi ảnh và quan hệ sư môn

Thiết kế mở rộng · Cầu Ma V1.1 & V3

38 hồ sơ đồng hành gồm 4 hồ sơ nền, 4 bổ sung V2 và 30 vai trò V3. Chiêu trợ chiến có tác dụng theo thời đoạn của nhân vật. Hồi ảnh của người đã mất hoặc từng đối địch vẫn giữ thân phận trong truyện.

Tám vai trò V1 và V2

Đồng hành: Tiểu Hồng
Điểm nhận diện: Hỗ trợ phát hiện một điểm thảo dược trong hoạt động đã chọn. không tự chạy một farm song song.

Đồng hành: Ngốc Mao Hạc
Điểm nhận diện: Một màn biến hóa đánh lạc hướng hữu hạn trong trận. không trộm ví người chơi khác.

Đồng hành: Hổ Tử
Điểm nhận diện: Dùng Mộng trận — trợ chiến Hổ Tử. chiếm một slot trợ chiến tạm cũ.

Đồng hành: Xích Hỏa Hầu
Điểm nhận diện: Gợi lối qua một cấm chế đã gặp. chỉ xuất hiện trong nội dung thích hợp.

Đồng hành: Oán Ngụy
Điểm nhận diện: Bảo vệ và hộ tống trong tuyến Hồng Lô.

Đồng hành: Minh Long
Điểm nhận diện: Đi cùng tuyến Vũ Huyên tại Nam Trạch.

Đồng hành: Độc phong mang mật
Điểm nhận diện: Gắn với hoạt động nghiên cứu và bảo quản Phong Thần Mật.

Đồng hành: Nhị sư huynh
Điểm nhận diện: Gắn với hoa viên và việc đồng môn Cửu Phong.

Bộ ba nhiệm vụ trao lần lượt 15, 25 và 30 điểm tin cậy. Ở 40 điểm, hồ sơ phù hợp mở trợ chiến trong 3 giây, hồi 45 giây. Ở 70 điểm, có thể đặt hồi ảnh vào ô đồng hành thường trực nếu hồ sơ cho phép. Một danh tính chỉ giữ một vai trò trong cấu hình. Khi vào thử thách tự chứng, luật phòng quyết định người chơi có thể gọi trợ giúp hay không.

30 vai trò bổ sung V3

Hồ sơ: Mặc Tang
Mốc truyện hoặc thử thách: Ô Sơn • chương 01
Hỗ trợ: Hồi sinh lực và Man lực.

Hồ sơ: Lôi Thần
Mốc truyện hoặc thử thách: Ô Sơn • chương 03
Hỗ trợ: Đánh phối hợp, làm suy yếu thế thủ.

Hồ sơ: Bắc Lăng
Mốc truyện hoặc thử thách: Chương 03 • Ngưng Huyết hậu kỳ
Hỗ trợ: Bắn vào nguồn đang thi pháp.

Hồ sơ: Trần Hân
Mốc truyện hoặc thử thách: Ô Sơn • chương 03
Hỗ trợ: Tạo khiên và hỗ trợ hồi phục.

Hồ sơ: Ô Lạp
Mốc truyện hoặc thử thách: Chương 03 • đã xem biến cố
Hỗ trợ: Làm chậm mục tiêu.

Hồ sơ: Sơn Ngân
Mốc truyện hoặc thử thách: Chương 03 • chứng cứ phản bội
Hỗ trợ: Phát hiện nguồn nguy hiểm ẩn, giảm sát thương bẫy.

Hồ sơ: Diệp Vọng
Mốc truyện hoặc thử thách: Chương 03 • vượt Phong Quyến
Hỗ trợ: Giảm áp lực trong thử thách hoặc tạo khiên.

Hồ sơ: Hàn Phỉ Tử
Mốc truyện hoặc thử thách: Hàm Sơn • chương 05
Hỗ trợ: Đánh mục tiêu mang ấn, phá khiên.

Hồ sơ: Tử Xa
Mốc truyện hoặc thử thách: Cửu Phong • chương 06
Hỗ trợ: Ngắt niệm hoặc gây phá thế.

Hồ sơ: Thiên Tà Tử
Mốc truyện hoặc thử thách: Chương 06 • phép thử sư môn
Hỗ trợ: Giải một trạng thái và tạo khiên.

Hồ sơ: Đại sư huynh
Mốc truyện hoặc thử thách: Chương 10 • ký ức Cửu Phong
Hỗ trợ: Giảm sát thương của đòn kế tiếp.

Hồ sơ: Bạch Linh
Mốc truyện hoặc thử thách: Chương 03 • nhật ký riêng
Hỗ trợ: Loại manh mối giả hoặc giải trạng thái gây nhiễu.

Hồ sơ: Bạch Tố
Mốc truyện hoặc thử thách: Chương 10 • đúng thời đoạn
Hỗ trợ: Che chắn cho đối tượng cần bảo vệ.

Hồ sơ: Phương Thương Lan
Mốc truyện hoặc thử thách: Tử Hải • chương 10
Hỗ trợ: Hồi sinh lực và giảm sát thương nhận vào.

Hồ sơ: Vũ Huyên
Mốc truyện hoặc thử thách: Chương 10 • Nam Trạch
Hỗ trợ: Chuyển dấu nguy hiểm sang neo hợp lệ hoặc tạo khiên.

Hồ sơ: Hứa Tuệ
Mốc truyện hoặc thử thách: Tinh Hải • chương 13
Hỗ trợ: Kéo dài dấu do người chơi đặt trên mục tiêu.

Hồ sơ: Nam Cung Ngân
Mốc truyện hoặc thử thách: Chương 08 • ngoại lộ Vu Thành
Hỗ trợ: Tăng khiên cho đối tượng đang được bảo vệ.

Hồ sơ: Trạch Long Thân
Mốc truyện hoặc thử thách: Chương 08 • khế Âm linh
Hỗ trợ: Tấn công và phá thế.

Hồ sơ: Ly Hỏa
Mốc truyện hoặc thử thách: Chương 08 • ngoại lộ Vu Thành
Hỗ trợ: Gây sát thương Hỏa theo thời gian.

Hồ sơ: Kỷ Vân Hải
Mốc truyện hoặc thử thách: Chương 10 • chứng thực hồ sơ
Hỗ trợ: Làm suy giảm một hiệu ứng có lợi cấp nhẹ của địch.

Hồ sơ: Hòa Phong
Mốc truyện hoặc thử thách: Hàm Sơn mở hồ sơ, Thiên Môn mở vai trò đầy đủ
Hỗ trợ: Gây sát thương Hỏa, giảm chi phí kỹ năng Hỏa.

Hồ sơ: Chu Khang
Mốc truyện hoặc thử thách: Chương 12 • nhất bia nhất giới
Hỗ trợ: Ổn định neo hoặc hoàn Man lực.

Hồ sơ: Điền Lâm
Mốc truyện hoặc thử thách: Chương 11 • Lục Đạo Phong
Hỗ trợ: Vừa che chắn vừa gây sát thương.

Hồ sơ: Long Lệ
Mốc truyện hoặc thử thách: Chương 11 • Lục Đạo Phong
Hỗ trợ: Gỡ một phong ấn thích hợp hoặc tấn công.

Hồ sơ: Tôn Côn
Mốc truyện hoặc thử thách: Chương 11 • Lục Đạo Phong
Hỗ trợ: Gây sát thương theo thời gian và tăng kháng độc.

Hồ sơ: Tiền Thần
Mốc truyện hoặc thử thách: Chương 10 • hồi ức Tà tông
Hỗ trợ: Giảm chi phí kỹ năng kế tiếp.

Hồ sơ: Thiên Linh lão giả
Mốc truyện hoặc thử thách: Chương 15 • Chúng Linh
Hỗ trợ: Ổn định hai neo hoặc tạo khiên.

Hồ sơ: Cổ Thái
Mốc truyện hoặc thử thách: Cổ Táng • chương 17
Hỗ trợ: Che chắn khi mục tiêu đổi quy tắc.

Hồ sơ: Đạo Hàn
Mốc truyện hoặc thử thách: Chương 17 • Chứng Đạo
Hỗ trợ: Gỡ một nguồn khống chế phụ.

Hồ sơ: Tô Minh — Hồi ảnh chứng đạo
Mốc truyện hoặc thử thách: Hoàn chương 18
Hỗ trợ: Tấn công và phá thế trong bối cảnh cho phép trợ chiến.

16 tuyến quan hệ V2

Nhân vật: Mặc Tang
Ba chủ điểm nhiệm vụ: kho thuốc → khí huyết → đường về

Nhân vật: Lôi Thần
Ba chủ điểm nhiệm vụ: chia đồ → đường núi → lời hẹn

Nhân vật: Diệp Vọng
Ba chủ điểm nhiệm vụ: áp lực → thất bại → luận bàn

Nhân vật: Hàn Phỉ Tử
Ba chủ điểm nhiệm vụ: ba lối Hàm Sơn → chuẩn bị → giữ lời

Nhân vật: Thiên Tà Tử
Ba chủ điểm nhiệm vụ: tự nhìn → giữ quy tắc → giúp đồng môn

Nhân vật: Đại sư huynh
Ba chủ điểm nhiệm vụ: dấu nguy hiểm → thay nhau đỡ → tìm dấu đồng môn

Nhân vật: Nhị sư huynh
Ba chủ điểm nhiệm vụ: mầm cây → đêm trong vườn → sửa vườn

Nhân vật: Hổ Tử
Ba chủ điểm nhiệm vụ: dấu mộng → phá ảo → giữ phong

Nhân vật: Tử Xa
Ba chủ điểm nhiệm vụ: chân núi → báo tin → nghe đúng người

Nhân vật: Bạch Linh
Ba chủ điểm nhiệm vụ: dấu tuyết → điều chưa gọi tên → hồi ức

Nhân vật: Bạch Tố
Ba chủ điểm nhiệm vụ: người trước mặt → hai ký ức → giúp Cửu Phong

Nhân vật: Phương Thương Lan
Ba chủ điểm nhiệm vụ: khoảng yên → nơi về → lời không đòi đáp

Nhân vật: Vũ Huyên
Ba chủ điểm nhiệm vụ: Minh Long → truy kích → thân phận đúng chương

Nhân vật: Hứa Tuệ
Ba chủ điểm nhiệm vụ: nhận ra → cùng làm → lời trước đi

Nhân vật: Cổ Thái
Ba chủ điểm nhiệm vụ: luật trận → tầng15 → Chứng Đạo

Nhân vật: Đạo Hàn
Ba chủ điểm nhiệm vụ: giúp có giới hạn → tự đi → hoàn thử.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Pháp khí Cầu Ma và nguồn mở khóa

Thiết kế mở rộng · Cầu Ma V1.1 & V3

Bảy hồ sơ V2 và 30 pháp khí V3 có danh tính riêng. Cầu Ma dùng một ô pháp bảo kích hoạt. Một vật có hình nhẫn hoặc áo vẫn tuân theo loại ô đã quy định.

Bảy hồ sơ V2 gồm Hàm Sơn Chung, Ngũ Phương Ấn, Thánh Tinh Bào (ô áo), Bảo hồ lô, trường thương mang tên đối chiếu Life Inequity Spear, Phong thủy la bàn và Không Gian Tiên. Mảnh vật đen hoặc Nghịch Linh Châu có hồ sơ hồi ức, nghiên cứu riêng.

Vượt thử nguồn để lấy quyền học bản vẽ. Ba mức T1/T2/T3 lần lượt cần 6/10/16 dấu khảo chứng và 12/24/48 vật tư cùng nhóm tiến trình, cùng phí địa phương. Pháp khí trải qua Hiểu dụng, Điều khiển và Hợp dụng. Ở Hợp dụng chọn giảm 10% hồi chiêu hoặc tăng 10% hiệu quả.

Ký hiệu M01–M20 dẫn tới các khu mang cùng mã trong bài Bản đồ. Phỏng hiện chỉ quyền sử dụng theo bản chuyển thể. Các tên hoặc tình tiết còn chờ đối chiếu được ghi tại từng dòng.

30 pháp khí được thiết kế cho V3

Mã và pháp khí: A01 Phong Quyến Trấn Bộ Bài
Loại: Khảo luyện do game thiết kế
Nguồn mở: M13
Công dụng: Ổn định bước chân trong khảo nghiệm, tạo khiên ở ngoài thử thách.

Mã và pháp khí: A02 Ô Sơn Hộ Huyết Cốt Phiến
Loại: Khảo luyện do game thiết kế
Nguồn mở: chương 03 và bài điều khiển khí huyết V1
Công dụng: Giảm sinh lực phải trả cho một kỹ năng tự tiêu hao.

Mã và pháp khí: A03 Kiếm Thuyền — phù hiệu phỏng hiện
Loại: Phỏng hiện, chi tiết nguồn cần đối chiếu
Nguồn mở: M14
Công dụng: Đòn xuyên theo hàng, trúng tối đa ba mục tiêu.

Mã và pháp khí: A04 Hắc Viêm Tụ Hỏa Trản
Loại: Khảo luyện do game thiết kế
Nguồn mở: M02
Công dụng: Gây sát thương Hỏa ngay và thêm sát thương theo thời gian.

Mã và pháp khí: A05 Thanh Đồng Kiếm Phôi
Loại: Khảo luyện do game thiết kế
Nguồn mở: bài rèn/thử tại Hàm Sơn
Công dụng: Đánh một mục tiêu và phá một phần khiên còn lại.

Mã và pháp khí: A06 Nam Thần Tịnh Vũ Bình
Loại: Khảo luyện do game thiết kế
Nguồn mở: M03
Công dụng: Hồi sinh lực và giảm thời gian hiệu ứng áp lực mưa.

Mã và pháp khí: A07 Man Văn Định Hình Kính
Loại: Khảo luyện do game thiết kế
Nguồn mở: Khai Trần và bài giữ Man Văn
Công dụng: Tạo khiên và giữ một dấu của người chơi trước lần giải đầu.

Mã và pháp khí: A08 Dạ Lệnh — chiến bài phỏng hiện
Loại: Phỏng hiện, chi tiết nguồn cần đối chiếu
Nguồn mở: hồi ức Thiên Lam
Công dụng: Giảm sát thương lên mục tiêu nhiệm vụ ở gần hoặc lên người dùng.

Mã và pháp khí: A09 Thiên Lam Trấn Tuyến Kỳ
Loại: Khảo luyện do game thiết kế
Nguồn mở: M04
Công dụng: Tạo vùng bảo hộ và chống gián đoạn cho mục tiêu cần giữ.

Mã và pháp khí: A10 Thiết Phiến trong hồng thạch — phỏng hiện
Loại: Phỏng hiện, chi tiết nguồn cần đối chiếu
Nguồn mở: Khảo hồng thạch ở Vu Thành
Công dụng: Đánh tối đa ba mục tiêu và làm chậm.

Mã và pháp khí: A11 Hỏa Tầng Hồi Ảnh Luân
Loại: Khảo luyện do game thiết kế
Nguồn mở: M15
Công dụng: Chặn một đợt hỏa môi trường rồi phản kích vào nguồn.

Mã và pháp khí: A12 Đông Hoang Chung — phỏng hiện
Loại: Phỏng hiện, chi tiết nguồn cần đối chiếu
Nguồn mở: M06 và hồi ức chương 610 đã mở
Công dụng: Đánh bằng sóng chuông, phá thế tối đa ba mục tiêu.

Mã và pháp khí: A13 Tứ Quý Luân Bàn
Loại: Khảo luyện do game thiết kế
Nguồn mở: M16
Công dụng: Chọn một mùa trước trận để hồi máu, tấn công, hoàn lực hoặc tạo khiên.

Mã và pháp khí: A14 Huyết Chú Hồng Hoàn — phỏng hiện
Loại: Phỏng hiện từ truyện
Nguồn mở: hồi ức chương 661 và bài dấu nguyền
Công dụng: Đặt dấu nguyền để ba đòn của người sử dụng gây thêm sát thương.

Mã và pháp khí: A15 Thảo Kết Hồn Ngẫu — phỏng hiện
Loại: Phỏng hiện từ truyện
Nguồn mở: cùng hồi ức chương 661, bài nối dấu riêng
Công dụng: Nối vào một nguồn hỗ trợ của địch để chặn một lần kích hoạt.

Mã và pháp khí: A16 Lục Phong Định Trục
Loại: Khảo luyện do game thiết kế
Nguồn mở: M17
Công dụng: Ngắt một chu kỳ phong ấn và tạo khiên, hoặc đánh phá thế.

Mã và pháp khí: A17 Lam Thạch Dưỡng Thân Hạch
Loại: Khảo luyện do game thiết kế
Nguồn mở: M07
Công dụng: Hồi sinh lực theo thời gian.

Mã và pháp khí: A18 Giám Huyết Châu — mẫu khảo chứng
Loại: Phỏng hiện, chi tiết nguồn cần đối chiếu
Nguồn mở: hồi ức chương 788 và bài nhận diện
Công dụng: Lộ mục tiêu giả và tăng sát thương đòn kế tiếp.

Mã và pháp khí: A19 Bia Ảnh Thủ Tâm Thạch
Loại: Khảo luyện do game thiết kế
Nguồn mở: M18
Công dụng: Ổn định ba neo trong thử thách hoặc tạo khiên.

Mã và pháp khí: A20 Phân Ý Hồi Lưu Thạch Bản
Loại: Khảo luyện do game thiết kế
Nguồn mở: M08
Công dụng: Đổi ưu tiên mục tiêu, hoàn Man lực và tăng phá thế.

Mã và pháp khí: A21 Cửu Kiếm Hợp Hạp — bài phỏng hiện
Loại: Phỏng hiện, chi tiết nguồn cần đối chiếu
Nguồn mở: hồi ức Cửu Kiếm (Nine Swords) chương 797 và thử nguồn kiếm
Công dụng: Đánh chín lần trong giới hạn ba mục tiêu.

Mã và pháp khí: A22 Hắc Mặc Dẫn Lộ Ngọc
Loại: Khảo luyện do game thiết kế
Nguồn mở: M09
Công dụng: Bảo vệ hàng hộ tống và tăng sát thương lên kẻ chặn đường.

Mã và pháp khí: A23 Tinh Hải Hộ Hỏa Giáp Phiến
Loại: Khảo luyện do game thiết kế
Nguồn mở: M10 và hồi ức Hồng Lô
Công dụng: Hấp thụ sát thương Hỏa hoặc tạo khiên thường.

Mã và pháp khí: A24 Ngọc Giản Tinh Đồ — phỏng hiện
Loại: Phỏng hiện từ truyện
Nguồn mở: hồi ức chương 1031 và đối chiếu đường Hồng Lô
Công dụng: Chỉ ra nguồn ẩn, giảm sát thương từ nguồn đó.

Mã và pháp khí: A25 Hoang Đỉnh — phỏng hiện
Loại: Phỏng hiện, chi tiết nguồn cần đối chiếu
Nguồn mở: M11, Chúng Linh và hồi ức chương 1208
Công dụng: Tạo khiên rồi phát một xung kích khi khiên vỡ hoặc hết hạn.

Mã và pháp khí: A26 Đoạn Ý Mộc Kiếm — phỏng hiện
Loại: Phỏng hiện từ truyện
Nguồn mở: hồi ức chương 1227–1228 và khảo ý chí
Công dụng: Chém một mục tiêu và cắt một liên kết hỗ trợ.

Mã và pháp khí: A27 Tang Tương Đối Chiếu Kính
Loại: Khảo luyện do game thiết kế
Nguồn mở: M19
Công dụng: Giảm đòn kế tiếp và phản kích đúng nguồn.

Mã và pháp khí: A28 Thất Nguyệt Định Tắc Xích
Loại: Khảo luyện do game thiết kế
Nguồn mở: M12 và thử Thất Nguyệt
Công dụng: Giữ một quy tắc đã chọn, kháng gián đoạn và tăng phá thế.

Mã và pháp khí: A29 Minh Kiếm — phỏng hiện Đế Thiên
Loại: Phỏng hiện từ truyện
Nguồn mở: chương 17 và hồi ức Abyss Sword chương 591/680
Công dụng: Đánh đơn mục tiêu và xóa một khiên nhỏ.

Mã và pháp khí: A30 Vạn Tượng Quy Chân Đăng
Loại: Khảo luyện do game thiết kế
Nguồn mở: M20
Công dụng: Chọn giữ neo và khiên hoặc đánh nguồn tạo quy tắc.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Man thuật và 50 công pháp nghiên cứu

Thiết kế mở rộng · Cầu Ma V1.1 & V3

24 kỹ năng bản địa ở gói nền và 50 công pháp nghiên cứu V3 là hai danh mục. Công pháp chính mở biến thể cho kỹ năng đã biết. Công pháp phụ hưởng 50% nội tại định lượng và cùng họ chỉ có một quyển hoạt động.

24 kỹ năng nền

Kỹ năng: Điều khiển khí huyết
Loại: Chủ động
Chương: 01
Hiệu quả thiết kế: 120% A. tốn 10 lực. hồi 6s. một mục tiêu.

Kỹ năng: Huyết tuyến vi tế
Loại: Nội tại
Chương: 03
Hiệu quả thiết kế: Giảm 8% lực tiêu kỹ năng, không giảm yêu cầu cảnh giới.

Kỹ năng: Ô Huyết Trần
Loại: Chủ động
Chương: 03
Hiệu quả thiết kế: Tốn 10% HP hiện tại không thể tự giết. +20% A trong 6s. hồi 24s.

Kỹ năng: Trảm Tam Sát — sơ giải
Loại: Chủ động
Chương: 03
Hiệu quả thiết kế: 180% A. cắt một lớp hộ vệ 5s. hồi 15s. bản nâng cao dùng chung ability family.

Kỹ năng: Hỏa Man — Huyết Nguyệt
Loại: Chủ động
Chương: 02
Hiệu quả thiết kế: 150% A + cháy 20% A mỗi giây 4s. hồi 10s. thời tiết game không buộc canh giờ đời thật.

Kỹ năng: Thí Linh — linh thú đã ngã
Loại: Chủ động
Chương: 02
Hiệu quả thiết kế: Tiêu một corpseToken nguồn beast≤8s. đòn kế tiếp +40% A. hồi 18s. không có token thì bỏ qua.

Kỹ năng: Man Văn — quê nhà
Loại: Chủ động
Chương: 05
Hiệu quả thiết kế: Khiên 18% H trong 6s. hồi 24s. cùng nhóm giới hạn khiên hiện có.

Kỹ năng: Man Văn — người được giữ
Loại: Chủ động
Chương: 05
Hiệu quả thiết kế: Hồi 12% H và giảm đòn kế tiếp 15%. hồi 24s.

Kỹ năng: Phong Man — mượn gió
Loại: Chủ động
Chương: 06
Hiệu quả thiết kế: Đòn 140% A, chậm 15% 4s. hồi 12s. boss đổi slow thành breakDamage.

Kỹ năng: Tế Cốt — hộ thể
Loại: Nội tại
Chương: 07
Hiệu quả thiết kế: Giảm sát thương vào 6%. không cộng thêm sao Cổ Thần hoặc tất cả mạch TN.

Kỹ năng: Tế Cốt hư giáp
Loại: Pháp khí
Chương: 07
Hiệu quả thiết kế: Khiên 22% H trong 5s. hồi 30s. chiếm slot pháp khí kích hoạt.

Kỹ năng: Mộng trận — trợ chiến Hổ Tử
Loại: Trợ chiến
Chương: 06
Hiệu quả thiết kế: Hiện 3s. khóa một nguồn địch 2s. boss chuyển sang gián đoạn. hồi 45s.

Kỹ năng: Man Hồn — hiện tượng
Loại: Chủ động
Chương: 10
Hiệu quả thiết kế: Đòn 200% A, tạo khiên 10% H. hồi 24s.

Kỹ năng: Mệnh Cách — nhận bản mệnh
Loại: Nội tại
Chương: 11
Hiệu quả thiết kế: Một trong hai: hồi phục nhận vào+8% hoặc sát thương mục tiêu có ấn+6%.

Kỹ năng: Mệnh Khuyết — bù phần thiếu
Loại: Chủ động
Chương: 12
Hiệu quả thiết kế: Giải một debuff đã nhận diện trong journal. hồi 22s.

Kỹ năng: Mệnh Cung — chuyển thế
Loại: Chủ động
Chương: 12
Hiệu quả thiết kế: Đổi ưu tiên mục tiêu, hồi 15 lực, một lần mỗi 20s.

Kỹ năng: Mệnh Giới — giới lực
Loại: Chủ động
Chương: 12
Hiệu quả thiết kế: Vùng 6s: +8% sát thương, kháng gián đoạn một lần. hồi 30s.

Kỹ năng: Ách Thương — ảnh phân thân
Loại: Chủ động
Chương: 12
Hiệu quả thiết kế: 220% A. ổn định bia neo+15. hồi 35s. không thêm actor/idle/loot.

Kỹ năng: Tam Sát — trảm duyên
Loại: Chủ động
Chương: 14
Hiệu quả thiết kế: Ba event tổng 260% A, cắt một liên kết hỗ trợ 6s. hồi 30s. không xóa item thực.

Kỹ năng: Chưởng — nắm quy tắc
Loại: Nội tại
Chương: 13
Hiệu quả thiết kế: Một tag đã nghiên cứu gây+6% sát thương. chỉ một tag/preset.

Kỹ năng: Sinh — vòng trở lại
Loại: Chủ động
Chương: 15
Hiệu quả thiết kế: Sau 5s hoàn 10% H đã mất, cap10%H. hồi 30s. không hồi sinh vô hạn.

Kỹ năng: Diệt — đoạn trường lực
Loại: Chủ động
Chương: 15
Hiệu quả thiết kế: 240% A + vô hiệu một vùng phụ 4s. hồi 30s. không xóa bản đồ chung.

Kỹ năng: Tu linh — Man thân
Loại: Nội tại
Chương: 15
Hiệu quả thiết kế: Một budget: HP+6% hoặc attack+3%. không cộng mỗi lớp thành bốn lần.

Kỹ năng: Đạo thần — cảm ngộ
Loại: Chủ động
Chương: 17
Hiệu quả thiết kế: Một biến thể realm: 260% A hoặc khiên26%H. hồi32s. giá trị cần mô phỏng.

Người chơi đặt một công pháp chính và tối đa hai công pháp phụ sau khi mở ô. Kỹ năng chủ động dùng một trong bốn ô sẵn có. Bậc 1 mở nội tại, bậc 2 mở biến thể, bậc 3 thường cho chọn giảm hao lực hoặc giảm hồi chiêu. Riêng Thối Tán Dược Lý Sơ Biên cho chọn rút ngắn thời gian sản xuất hoặc giảm phụ phí của biến thể.

50 công pháp V3

Mã và tên: P01 Huyết Tuyến Vi Tức
Nhóm nghiên cứu: Khí huyết và nền Man sĩ
Nội tại bậc 1: Giảm 4% chi phí kỹ năng khí huyết.

Mã và tên: P02 Hỏa Man Tụ Diễm Thiên
Nhóm nghiên cứu: Khí huyết và nền Man sĩ
Nội tại bậc 1: Tăng 3 điểm phần trăm kháng Hỏa.

Mã và tên: P03 Huyết Nguyệt Dẫn Hỏa Lục
Nhóm nghiên cứu: Khí huyết và nền Man sĩ
Nội tại bậc 1: Tăng 4% sát thương Hỏa đúng môi trường.

Mã và tên: P04 Thối Tán Dược Lý Sơ Biên
Nhóm nghiên cứu: Khí huyết và nền Man sĩ
Nội tại bậc 1: Giảm 4% thời gian mẻ dược mới.

Mã và tên: P05 Phong Quyến Trụ Tâm Quyết
Nhóm nghiên cứu: Khí huyết và nền Man sĩ
Nội tại bậc 1: Giảm 4% lượng ổn định mất do áp lực.

Mã và tên: P06 Khai Trần Dẫn Lực Biên
Nhóm nghiên cứu: Khai Trần và Man Văn
Nội tại bậc 1: Tăng 6% Man lực tối đa.

Mã và tên: P07 Quê Nhà Man Văn Lục
Nhóm nghiên cứu: Khai Trần và Man Văn
Nội tại bậc 1: Tăng 4% hiệu quả khiên.

Mã và tên: P08 Nhân Duyên Man Văn Lục
Nhóm nghiên cứu: Khai Trần và Man Văn
Nội tại bậc 1: Tăng 4% lượng hồi phục nhận vào.

Mã và tên: P09 Hàm Sơn Phá Chướng Lục
Nhóm nghiên cứu: Khai Trần và Man Văn
Nội tại bậc 1: Tăng 6% sát thương lên khiên.

Mã và tên: P10 Phong Man Hành Khí Thiên
Nhóm nghiên cứu: Khai Trần và Man Văn
Nội tại bậc 1: Tăng 4 điểm phần trăm kháng làm chậm.

Mã và tên: P11 Tế Cốt Hộ Mạch Chú
Nhóm nghiên cứu: Man cốt và chiến tuyến
Nội tại bậc 1: Tăng 5% phòng ngự.

Mã và tên: P12 Vu Trận Quan Tức Lục
Nhóm nghiên cứu: Man cốt và chiến tuyến
Nội tại bậc 1: Tăng 4 điểm phần trăm kháng gián đoạn.

Mã và tên: P13 Cửu Âm Khế Linh Biên
Nhóm nghiên cứu: Man cốt và chiến tuyến
Nội tại bậc 1: Tăng 4% sát thương lên đối tượng nhiệm vụ của địch.

Mã và tên: P14 Âm Địa Bảo Tâm Quyết
Nhóm nghiên cứu: Man cốt và chiến tuyến
Nội tại bậc 1: Tăng 5 điểm phần trăm kháng suy hồn.

Mã và tên: P15 Thí Linh Dư Tức Lục
Nhóm nghiên cứu: Man cốt và chiến tuyến
Nội tại bậc 1: Giảm 6% chi phí Thí Linh.

Mã và tên: P16 Mộng Trận Quan Dấu Biên
Nhóm nghiên cứu: Mộng trận và Man Hồn
Nội tại bậc 1: Tăng 4% sát thương lên nguồn ảo ảnh.

Mã và tên: P17 Thủ Mộng Định Neo Quyết
Nhóm nghiên cứu: Mộng trận và Man Hồn
Nội tại bậc 1: Tăng 5% lượng ổn định neo nhận được.

Mã và tên: P18 Thiên Môn Hỏa Tức Biên
Nhóm nghiên cứu: Mộng trận và Man Hồn
Nội tại bậc 1: Tăng 4 điểm phần trăm kháng Hỏa.

Mã và tên: P19 Man Hồn Tam Hợp Thiên
Nhóm nghiên cứu: Mộng trận và Man Hồn
Nội tại bậc 1: Tăng 5% sinh lực.

Mã và tên: P20 Tử Hải Bất Tán Lục
Nhóm nghiên cứu: Mộng trận và Man Hồn
Nội tại bậc 1: Tăng 4 điểm phần trăm kháng đẩy lùi.

Mã và tên: P21 Cửu Phong Giữ Lời Biên
Nhóm nghiên cứu: Ký ức, chu kỳ và rèn thân
Nội tại bậc 1: Tăng 4% sát thương lên kẻ đang đánh đối tượng cần giữ.

Mã và tên: P22 Bát Môn Biện Vị Lục
Nhóm nghiên cứu: Ký ức, chu kỳ và rèn thân
Nội tại bậc 1: Tăng 3 điểm phần trăm chính xác.

Mã và tên: P23 Tứ Quý Luân Tức Thiên
Nhóm nghiên cứu: Ký ức, chu kỳ và rèn thân
Nội tại bậc 1: Giảm 4% thời gian chịu sát thương duy trì.

Mã và tên: P24 Lam Thạch Luyện Thân Ký
Nhóm nghiên cứu: Ký ức, chu kỳ và rèn thân
Nội tại bậc 1: Tăng 5% phòng ngự.

Mã và tên: P25 Mệnh Cách Tự Chứng Thiên
Nhóm nghiên cứu: Ký ức, chu kỳ và rèn thân
Nội tại bậc 1: Tăng 2 điểm phần trăm cho một nhánh đã có của Mệnh Cách.

Mã và tên: P26 Lục Phong Giải Kết Lục
Nhóm nghiên cứu: Phong cấm và bản thể địa phương
Nội tại bậc 1: Tăng 5% hiệu quả phá phong ấn.

Mã và tên: P27 Hư Ảnh Thôn Nạp Biên
Nhóm nghiên cứu: Phong cấm và bản thể địa phương
Nội tại bậc 1: Tăng 4% sát thương lên bóng được triệu hồi.

Mã và tên: P28 Phế Địa Giữ Nguồn Quyết
Nhóm nghiên cứu: Phong cấm và bản thể địa phương
Nội tại bậc 1: Giảm 4% chi phí khi Man lực dưới 30%.

Mã và tên: P29 Mệnh Giới Lập Neo Thiên
Nhóm nghiên cứu: Phong cấm và bản thể địa phương
Nội tại bậc 1: Tăng 4% sát thương giới lực.

Mã và tên: P30 Ách Thương Thủ Ý Biên
Nhóm nghiên cứu: Phong cấm và bản thể địa phương
Nội tại bậc 1: Tăng 5 điểm phần trăm kháng đồng hóa trong khảo nghiệm.

Mã và tên: P31 Bi Hải Chứng Tích Lục
Nhóm nghiên cứu: Tinh Hải và điều khiển trường
Nội tại bậc 1: Tăng 4% sát thương lên nguồn đã được kiểm chứng.

Mã và tên: P32 Nhất Bia Nhất Giới Thiên
Nhóm nghiên cứu: Tinh Hải và điều khiển trường
Nội tại bậc 1: Tăng 5% hiệu quả ổn định neo.

Mã và tên: P33 Hắc Mặc Hành Giới Lục
Nhóm nghiên cứu: Tinh Hải và điều khiển trường
Nội tại bậc 1: Tăng 5 điểm phần trăm kháng làm chậm.

Mã và tên: P34 Sa Hải Tản Tụ Biên
Nhóm nghiên cứu: Tinh Hải và điều khiển trường
Nội tại bậc 1: Tăng 3% sát thương diện rộng khi đánh tối đa ba mục tiêu.

Mã và tên: P35 Tinh Hải Phân Lưu Quyết
Nhóm nghiên cứu: Tinh Hải và điều khiển trường
Nội tại bậc 1: Tăng 4 điểm phần trăm kháng hút lực.

Mã và tên: P36 Tam Sát Trảm Liên Thiên
Nhóm nghiên cứu: Chưởng, Duyên, Sinh, Diệt
Nội tại bậc 1: Tăng 4% sát thương lên nguồn liên kết.

Mã và tên: P37 Sinh Tức Hồi Hoàn Lục
Nhóm nghiên cứu: Chưởng, Duyên, Sinh, Diệt
Nội tại bậc 1: Tăng 4% lượng hồi phục nhận vào.

Mã và tên: P38 Diệt Niệm Đoạn Trường Thiên
Nhóm nghiên cứu: Chưởng, Duyên, Sinh, Diệt
Nội tại bậc 1: Tăng 4% sát thương lên cấu trúc triệu hồi.

Mã và tên: P39 Chưởng Tắc Tự Định Biên
Nhóm nghiên cứu: Chưởng, Duyên, Sinh, Diệt
Nội tại bậc 1: Tăng 4% sát thương theo loại quy tắc đã chọn.

Mã và tên: P40 Man Thân Đồng Quy Ký
Nhóm nghiên cứu: Chưởng, Duyên, Sinh, Diệt
Nội tại bậc 1: Chọn tăng 5% sinh lực hoặc 2,5% công kích.

Mã và tên: P41 Chúng Linh Đối Chiếu Lục
Nhóm nghiên cứu: Chúng Linh và nhận thức vũ trụ
Nội tại bậc 1: Tăng 5 điểm phần trăm kháng suy hồn.

Mã và tên: P42 Thăng Linh Giữ Hồn Thiên
Nhóm nghiên cứu: Chúng Linh và nhận thức vũ trụ
Nội tại bậc 1: Tăng 5% hiệu quả ổn hồn nhận được.

Mã và tên: P43 Hiên Cảnh Chiếu Trường Biên
Nhóm nghiên cứu: Chúng Linh và nhận thức vũ trụ
Nội tại bậc 1: Tăng 4 điểm phần trăm kháng sát thương trường lực.

Mã và tên: P44 Bất Khả Ngôn Phản Chiếu Lục
Nhóm nghiên cứu: Chúng Linh và nhận thức vũ trụ
Nội tại bậc 1: Tăng 4% sát thương lên nguồn đã chứng.

Mã và tên: P45 Đạo Thần Định Ý Thiên
Nhóm nghiên cứu: Chúng Linh và nhận thức vũ trụ
Nội tại bậc 1: Tăng 5% phá thế.

Mã và tên: P46 Thất Nguyệt Quan Trận Lục
Nhóm nghiên cứu: Cổ Táng và tự chứng
Nội tại bậc 1: Tăng 5 điểm phần trăm kháng niệm phản chiếu.

Mã và tên: P47 Chứng Đạo Ngoại Viên Thiên
Nhóm nghiên cứu: Cổ Táng và tự chứng
Nội tại bậc 1: Tăng 4% hiệu quả bảo vệ mục tiêu nhiệm vụ.

Mã và tên: P48 Chứng Đạo Tự Hành Lục
Nhóm nghiên cứu: Cổ Táng và tự chứng
Nội tại bậc 1: Giảm 4% chi phí khi luật phòng cấm trợ chiến.

Mã và tên: P49 Cửu Trọng Cảm Ngộ Biên
Nhóm nghiên cứu: Cổ Táng và tự chứng
Nội tại bậc 1: Tăng 3 điểm phần trăm chính xác.

Mã và tên: P50 Quy Chân Tự Quyết Thiên
Nhóm nghiên cứu: Cổ Táng và tự chứng
Nội tại bậc 1: Giảm 4% sát thương từ quy tắc đã nhận diện.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Trang bị Cầu Ma và sáu bộ V2

Thiết kế mở rộng · Cầu Ma V1.1 & V3

94 định nghĩa trang bị gồm 16 món nền, 48 món thuộc sáu bộ V2 và 30 món lẻ V3. Tám vị trí trang bị có ngân sách công, thủ, sinh lực và Man lực riêng.

16 món nền

Tên trang bị: Cốt đao tập luyện
Vị trí: Vũ khí
Trần cường hóa thiết kế: +5

Tên trang bị: Cốt đao tập luyện — bản tinh chế
Vị trí: Vũ khí
Trần cường hóa thiết kế: +10

Tên trang bị: Áo vải Ô Sơn
Vị trí: Áo
Trần cường hóa thiết kế: +5

Tên trang bị: Áo vải Ô Sơn — bản tinh chế
Vị trí: Áo
Trần cường hóa thiết kế: +10

Tên trang bị: Băng trán vải
Vị trí: Đầu
Trần cường hóa thiết kế: +5

Tên trang bị: Băng trán vải — bản tinh chế
Vị trí: Đầu
Trần cường hóa thiết kế: +10

Tên trang bị: Hộ cổ tay da
Vị trí: Hộ tay
Trần cường hóa thiết kế: +5

Tên trang bị: Hộ cổ tay da — bản tinh chế
Vị trí: Hộ tay
Trần cường hóa thiết kế: +10

Tên trang bị: Đai đựng dược
Vị trí: Đai
Trần cường hóa thiết kế: +5

Tên trang bị: Đai đựng dược — bản tinh chế
Vị trí: Đai
Trần cường hóa thiết kế: +10

Tên trang bị: Giày đi núi
Vị trí: Giày
Trần cường hóa thiết kế: +5

Tên trang bị: Giày đi núi — bản tinh chế
Vị trí: Giày
Trần cường hóa thiết kế: +10

Tên trang bị: Vòng tay xương
Vị trí: Nhẫn
Trần cường hóa thiết kế: +5

Tên trang bị: Vòng tay xương — bản tinh chế
Vị trí: Nhẫn
Trần cường hóa thiết kế: +10

Tên trang bị: Mảnh khắc hộ thân
Vị trí: Ngọc bội
Trần cường hóa thiết kế: +5

Tên trang bị: Mảnh khắc hộ thân — bản tinh chế
Vị trí: Ngọc bội
Trần cường hóa thiết kế: +10

Sáu bộ V2, mỗi bộ có đủ tám vị trí

Bộ: Y phục luyện hàn
Hiệu ứng đủ sáu món: Đỡ đúng báo hiệu tạo khiên 6% sinh lực.
Trần cường hóa: +10

Bộ: Hành trang chiến tuyến
Hiệu ứng đủ sáu món: Chặn đòn đánh vào mục tiêu cần bảo vệ, hoàn 5 lực.
Trần cường hóa: +12

Bộ: Hành trang khảo cứu Cửu Âm
Hiệu ứng đủ sáu món: Tẩy đúng dấu tăng 8% sát thương đòn kế.
Trần cường hóa: +14

Bộ: Hành trang phế địa
Hiệu ứng đủ sáu món: Sau khi bị gián đoạn, giảm 20% thời gian gián đoạn kế tiếp trong 10 giây.
Trần cường hóa: +15

Bộ: Y phục du hành tinh hải
Hiệu ứng đủ sáu món: Đánh nguồn trường lực, hoàn 6 lực.
Trần cường hóa: +18

Bộ: Pháp y khảo nghiệm Cổ Táng
Hiệu ứng đủ sáu món: Đổi quy tắc mục tiêu, tăng 8% phá thế trong 4 giây.
Trần cường hóa: +20

Với 30 món lẻ V3, lần thắng đầu mở bản vẽ, sau đó có thể chọn đúng món để chế tạo. Bản cân bằng đặt thời gian chế tạo 20 phút. Trần cường hóa theo nhóm B02/B03/B04/B05/B07 lần lượt là +10/+12/+14/+15/+18. Cường hóa chỉ tăng chỉ số gốc.

30 món lẻ V3

Mã và tên: G01 Nam Thần Vũ Tỏa
Vị trí: Vũ khí
Hiệu ứng: Tăng 3% sát thương lên mục tiêu mang dấu ướt.

Mã và tên: G02 Hàm Sơn Bộ Hành Ngoa
Vị trí: Giày
Hiệu ứng: Tăng 3 điểm phần trăm kháng chậm.

Mã và tên: G03 Thiên Hàn Noãn Mạch Đai
Vị trí: Đai
Hiệu ứng: Giảm 4% chi phí Man lực ở môi trường hàn.

Mã và tên: G04 An Đông Thạch Văn Trâm
Vị trí: Đầu
Hiệu ứng: Tăng 2 điểm phần trăm chính xác.

Mã và tên: G05 Man Văn Hộ Ấn Bội
Vị trí: Ngọc bội
Hiệu ứng: Lần đầu khiên Man Văn vỡ, tạo khiên bằng 2% sinh lực tối đa.

Mã và tên: G06 Khảo Dược Tế Tác Hoàn
Vị trí: Nhẫn
Hiệu ứng: Tăng 3% Man lực tối đa.

Mã và tên: G07 Thiên Lam Trụ Tuyến Giáp
Vị trí: Áo
Hiệu ứng: Giảm 3% sát thương lên đối tượng đang được chủ nhân bảo vệ.

Mã và tên: G08 Nhan Trì Dẫn Cốt Uyển
Vị trí: Hộ tay
Hiệu ứng: Tăng 3% sát thương phá thế.

Mã và tên: G09 Cửu Âm Giữ Khế Quan
Vị trí: Đầu
Hiệu ứng: Tăng 3 điểm phần trăm kháng suy hồn.

Mã và tên: G10 Vu Thành Niêm Mẫu Đai
Vị trí: Đai
Hiệu ứng: Giảm 3% thời gian chịu sát thương duy trì.

Mã và tên: G11 Trấn Bộ Cốt Nhận
Vị trí: Vũ khí
Hiệu ứng: Sau khi đỡ đúng báo hiệu, đòn kế được thêm 5 điểm phá thế.

Mã và tên: G12 Táng Cốt Hồi Lộ Ngoa
Vị trí: Giày
Hiệu ứng: Tăng 3 điểm phần trăm kháng đẩy lùi.

Mã và tên: G13 Tử Hải Neo Phong Bội
Vị trí: Ngọc bội
Hiệu ứng: Tăng 3% lượng ổn định neo nhận được.

Mã và tên: G14 Cửu Phong Thủ Dạ Y
Vị trí: Áo
Hiệu ứng: Tăng 3% sinh lực theo ngân sách trang bị.

Mã và tên: G15 Đông Hoang Chuyển Mùa Uyển
Vị trí: Hộ tay
Hiệu ứng: Giảm 3% thời gian duy trì hiệu ứng bất lợi theo mùa.

Mã và tên: G16 Nam Trạch Hành Ảnh Hoàn
Vị trí: Nhẫn
Hiệu ứng: Tăng 3 điểm phần trăm kháng chậm.

Mã và tên: G17 Man Hồn Tụ Tượng Quan
Vị trí: Đầu
Hiệu ứng: Hoàn 2 Man lực khi dùng Man Hồn – hiện tượng, tối đa một lần mỗi 24 giây.

Mã và tên: G18 Thương Hải Đoạn Lưu Nhận
Vị trí: Vũ khí
Hiệu ứng: Tăng 3% sát thương lên nguồn trường lực.

Mã và tên: G19 Xích Hỏa Lam Tích Giáp
Vị trí: Áo
Hiệu ứng: Tăng 3% phòng ngự.

Mã và tên: G20 Phế Địa Tiết Lực Đai
Vị trí: Đai
Hiệu ứng: Giảm 3% chi phí khi Man lực dưới 25%.

Mã và tên: G21 Lục Phong Phân Kết Uyển
Vị trí: Hộ tay
Hiệu ứng: Tăng 3% hiệu quả phá phong ấn.

Mã và tên: G22 Tây Hoàn Hộ Ý Bội
Vị trí: Ngọc bội
Hiệu ứng: Tăng 3 điểm phần trăm kháng hỗn loạn.

Mã và tên: G23 Cấm Lộ Phá Ngưng Thương
Vị trí: Vũ khí
Hiệu ứng: Thêm sát thương cho đòn kế sau lần ngắt niệm hợp lệ, hồi nội bộ 20 giây.

Mã và tên: G24 Xích Hỏa Tàng Nhiệt Ngoa
Vị trí: Giày
Hiệu ứng: Giảm 3% sát thương Hỏa từ môi trường.

Mã và tên: G25 Hắc Mặc Hộ Hàng Đai
Vị trí: Đai
Hiệu ứng: Tăng 3% hiệu quả khiên cho mục tiêu nhiệm vụ.

Mã và tên: G26 Tinh Hải Phân Quang Trâm
Vị trí: Đầu
Hiệu ứng: Tăng 2 điểm phần trăm chính xác.

Mã và tên: G27 Hồng Lô Tị Diễm Y
Vị trí: Áo
Hiệu ứng: Tăng 3 điểm phần trăm kháng Hỏa.

Mã và tên: G28 Du Tinh Định Hướng Ngoa
Vị trí: Giày
Hiệu ứng: Tăng 3 điểm phần trăm kháng cưỡng chế di chuyển.

Mã và tên: G29 Tinh Hải Thủ Mạch Hoàn
Vị trí: Nhẫn
Hiệu ứng: Hoàn 5 Man lực khi bị hút lực lần đầu, hồi nội bộ 30 giây.

Mã và tên: G30 Ngoại Lò Giữ Neo Bội
Vị trí: Ngọc bội
Hiệu ứng: Tăng 3% thời gian khiên của chủ nhân, tối đa thêm 0,3 giây.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Tiền tệ, dược, nghề và vườn

Thiết kế mở rộng · Cầu Ma V1.1 & V3

Cầu Ma có thạch tệ ở đầu hành trình và tinh thạch ở các vùng phía sau. Các ví địa phương tách khỏi Tiên Nghịch. Trong thiết kế V3, B01–B04 dùng thạch tệ và B05–B10 dùng tinh thạch.

12 tài sản và vật tư nền

Tên: Thạch tệ Cầu Ma
Vai trò: Đơn vị trao đổi đầu Man tộc, sổ riêng với ví Tiên Nghịch.

Tên: Tinh thạch Cầu Ma
Vai trò: Tài nguyên/trao đổi giai đoạn tinh không. không tỷ giá tự động với thạch tệ.

Tên: Lô thảo dược đã giám định
Vai trò: Gộp nguyên liệu về UI. tên lô là ký hiệu game, không tên dược liệu tác giả.

Tên: Khoáng liệu bản địa
Vai trò: Trừu tượng sản xuất của game, không giả làm kỳ vật canon.

Tên: Vật liệu từ chuyến săn
Vai trò: Chi tiết thịt/da/xương theo loài đã khai báo, không rơi từ tất cả NPC.

Tên: Ô Long Tiên
Vai trò: Nhận qua điều kiện mưa tại tuyến hái dược. giữ nguồn sinh cảnh.

Tên: Thanh Trần Tán
Vai trò: Hỗ trợ hiệu quả vật dùng kèm. không dùng độc lập để cộng tu vi.

Tên: Sơn Linh Dược
Vai trò: Hỗ trợ tu luyện. công thức XP/band là của game.

Tên: Nam Ly Dược
Vai trò: Phục hồi tổn thương. không đan nhảy cảnh giới.

Tên: Vật tư nơi trú
Vai trò: Nguyên liệu gameplay cho kho/lò/trú sở. không tiền thứ ba.

Tên: Điểm lĩnh hội bản địa
Vai trò: Đơn vị UI cho nghiên cứu, không tiền có thể mua bán.

Tên: Mảnh vật đen — hồ sơ hồi ức
Vai trò: Vật đặc biệt của tuyến Tô Minh: player trải nghiệm qua truyền thừa. không mỗi người một bản thể canon.

Bốn công thức cơ bản

Thành phẩm: Thanh Trần Tán
Nguyên liệu: 3 × Lô thảo dược đã giám định
Phí / thời gian: 10 thạch tệ / 90 giây
Công dụng: Dùng kèm dược có chỉ định tăng 20% giá trị gốc của dược đó, một lần. không tăng số item để bán.

Thành phẩm: Sơn Linh Dược
Nguyên liệu: 5 × Lô thảo dược đã giám định
Phí / thời gian: 30 thạch tệ / 180 giây
Công dụng: Cộng 15 phút tốc độ Ngưng Huyết nền cố định lúc chế tạo. không vượt điều kiện Man Văn/cốt/hồn.

Thành phẩm: Nam Ly Dược
Nguyên liệu: 5 × Lô thảo dược đã giám định
Phí / thời gian: 30 thạch tệ / 180 giây
Công dụng: Giảm một đơn vị tổn thương gameplay hoặc hồi 20% H ngoài trận. không hoàn coin/XP đã chi.

Thành phẩm: Vật tư nơi trú
Nguyên liệu: 5 × Vật liệu từ chuyến săn
Phí / thời gian: 5 thạch tệ / 60 giây
Công dụng: Sản xuất vật tư sinh hoạt bằng vật liệu săn. không trực tiếp cộng lực chiến.

Vườn ươm ở nơi trú mở từ 2 đến 6 ô. Hoa viên Cửu Phong có việc chăm cây và công việc đồng môn. Phòng dưỡng mẫu Cửu Âm có 2 vị trí. Kho phong kín Tinh Hải dùng để bảo quản mẫu.
Mười hai thao tác mở rộng gồm giám định lô, ươm giống bản địa, chỉnh lý Long Diệp, dưỡng Quỷ Linh Hoa, chuẩn bị Hải tủy, quản lý Phong Thần Mật, chuẩn bị vật hộ hỏa, khảo lõi Tinh Hải, nghiên cứu Đoạt Linh, nghiên cứu Nạp Thần/Nghênh Thần, sửa neo và khảo Chứng Đạo thụ.
Chu kỳ thu thập V3 kéo dài 5 phút, sinh vật tư cùng nhóm vùng. Dấu khảo chứng dùng để chọn đồ cùng nhóm và đến từ lượt có thưởng. Lần vượt đầu cấp quyền nghiên cứu riêng.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Chiến tông môn, sự kiện và skin Cầu Ma

Thiết kế mở rộng · Cầu Ma V1.1 & V3

Thiết kế V2 có hai chiến trường dùng chung luật chiến tông môn và sáu sự kiện trao tám skin. Mỗi nhóm sự kiện giữ điểm riêng khi tổ chức lại.

Chiến tông môn

Hạng mục: Chiến trường
Quy tắc thiết kế: Thiên Lam có 13 điểm, Chứng Đạo có 17 điểm. Chỉ tấn công điểm có đường tiếp cận.

Hạng mục: Đăng ký
Quy tắc thiết kế: Một mùa kéo dài 14 ngày. Lập đội 5–20 người trong ngày 1–2, chốt đội cuối ngày 2.

Hạng mục: Các vòng
Quy tắc thiết kế: Sáu vòng bắt đầu vào ngày 3, 5, 7, 9, 11 và 13. Mỗi vòng kéo dài 24 giờ. Ngày 14 tổng kết.

Hạng mục: Lượt hành động
Quy tắc thiết kế: Mỗi người có sáu lượt mỗi vòng, dùng để đánh, trinh sát hoặc sửa.

Hạng mục: Tính điểm
Quy tắc thiết kế: Điểm có tiếp tế về doanh ghi điểm mỗi 30 phút. Vòng ngoài, giữa, trong lần lượt được 2, 4 và 6 điểm. Chiếm hợp lệ cộng 5 điểm một lần trong phiên chiếm.

Hạng mục: Phân thắng
Quy tắc thiết kế: So tổng điểm, sau đó điểm trong, rồi mục tiêu. Nếu vẫn ngang điểm, hai bên hòa.

Sáu sự kiện và nguồn nhận skin

Sự kiện: Cửu Phong Cầu Chân
Thời lượng mẫu: 14 ngày
Skin: Tô Minh · Cửu Phong Cầu Chân

Sự kiện: Hoa viên ngày về
Thời lượng mẫu: 7 ngày
Skin: Nhị sư huynh · Hoa Khai Dạ Tĩnh, Bạch Tố · Tử Hải Chờ Người

Sự kiện: Hồng Thạch kỳ hội
Thời lượng mẫu: 7 ngày
Skin: Man sĩ · Hồng Thạch Khảo Cứu

Sự kiện: Tử Hải giữ lời
Thời lượng mẫu: 7 ngày
Skin: Phương Thương Lan · Tĩnh Hải Quy Tâm, Vũ Huyên · Nam Trạch Phong Miên

Sự kiện: Dọc đường Tinh Hải
Thời lượng mẫu: 10 ngày
Skin: Hứa Tuệ · Tinh Hải Tri Âm

Sự kiện: Chứng Đạo thiên trình
Thời lượng mẫu: 14 ngày
Skin: Tô Minh · Cổ Táng Vấn Đạo

Hồng Thạch kỳ hội thiết kế mỗi lượt nhận một dấu. Ba nhiệm vụ cho tổng 39 dấu và 21 vé theo ngày đưa tổng đến 60, đủ đổi skin. Cơ hội ngẫu nhiên 1% trúng skin là phần thưởng riêng, độc lập với mốc đổi. Hai skin đặc biệt Tô Minh và những skin đặc biệt Vương Lâm, Lý Mộ Uyển có nguồn riêng.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất

Hình ảnh và âm thanh Cầu Ma

Thiết kế mở rộng · Cầu Ma V1.1 & V3

Cầu Ma giữ phong cách minh họa 2D bán hiện thực của Vấn Đạo, với gỗ, da, cốt, vải cũ và đá ướt ở Ô Sơn. Man Văn, huyết tuyến, mộng trận, duyên tuyến và ý chí có hiệu ứng riêng theo nội dung.

Các vùng và dấu hiệu nhận diện

Vùng: Ô Sơn và Hắc Viêm
Mỹ thuật và âm thanh: Rừng lạnh, gỗ cũ và đá ướt ở Ô Sơn. Vách bazan, khe địa hỏa và âm đá nứt ở Hắc Viêm.

Vùng: Nam Thần và Thiên Hàn
Mỹ thuật và âm thanh: Rừng mưa, suối và cầu rễ ở Nam Thần. Sắc ngà, lam lạnh và tiếng gió ở Thiên Hàn.

Vùng: Cửu Phong và Thiên Lam
Mỹ thuật và âm thanh: Vật dụng sinh hoạt và khoảng sáng ấm ở Cửu Phong. Đất tro, cờ, trống xa và hiệu cứu viện ở Thiên Lam.

Vùng: Cửu Âm và Tử Hải
Mỹ thuật và âm thanh: Bia, xương ngà và lam đen ở Cửu Âm. Sóng màu mực, bến gỗ và nhạc gợi đường về ở Tử Hải.

Vùng: Phế địa, Tây Hoàn và Tinh Hải
Mỹ thuật và âm thanh: Bụi đỏ và lam thạch ở phế địa. Đồng hoang bia đá và âm trầm ở Tây Hoàn. Các khối đá, khoảng trống và đàn sinh vật xa ở Tinh Hải.

Vùng: Tang Tương và Cổ Táng
Mỹ thuật và âm thanh: Dùng hai hình đối chiếu trên nền rộng ở Tang Tương. Sân khảo nghiệm có cấu trúc rõ và khoảng trống ở Cổ Táng.

Nhân vật chiến đấu nhìn ngang hơi chếch ba phần tư, đồng minh hướng phải và địch hướng trái. Ánh sáng mềm từ trên trái giữ vải, đá, gỗ và kim loại đọc được khi thu nhỏ. Nền đích 1920 × 1080, nhân vật thường 512 × 512, chân dung 512 × 768, icon vật phẩm 256 × 256 và icon trạng thái 128 × 128. Các con số là mục tiêu sản xuất.

Danh mục V3 mô tả 20 họ texture hiệu ứng và 12 họ khung giao diện. Hình tĩnh được bàn giao riêng với chữ, nút, animation, hiệu ứng và âm thanh chạy trong game. Hồ sơ sản xuất cũng ghi rõ những hình, âm thanh và thử nghiệm còn cần hoàn thiện.

Tài liệu đối chiếu
Cầu Ma V1.1 · hồ sơ nền
Cầu Ma V3 · bộ thiết kế hợp nhất
Cầu Ma V3 · hồ sơ hình ảnh
Cầu Ma · nhạc nền và âm thanh

Chuyên mục Đồ giám

Nhận diện tu sĩ, linh thú, yêu thú và vật phẩm.

Hình ảnh và cách nhận diện

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Nhân vật, linh thú và địa điểm trong wiki dùng hình của chính dự án. Phong cách 2D cổ phong bán hiện thực, nét vẽ gọn, ánh sáng mềm từ trên trái; bảng màu dùng mực xanh đen, ngọc xanh, vàng cổ, trắng ngà và điểm đỏ son.

Đồ hình kinh mạch thiền định · hình tham chiếu của hệ kinh mạch.

Chân dung nữ tu du hành.

Chân dung trưởng lão trong bộ hình nhân vật.

Linh Hồ Vân Vĩ · linh thú.

Lang vương trong bộ hình quái và boss.

Động phủ · bối cảnh sinh hoạt và tu luyện.

Sổ hình ảnh ngày 13/10 ghi trạng thái theo từng tài sản. Một icon đã tích hợp cho thấy đội phát triển đã đưa hình đó vào bộ asset. Trạng thái mở của tính năng hoặc tỷ lệ rơi là thông tin riêng.

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Tu sĩ, NPC và linh thú buổi đầu

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Sổ hình ảnh có hai tạo hình tu sĩ nhập môn, ba chân dung nhân vật đối thoại và bốn linh thú chiến đấu. Các ảnh đứng, ảnh thiền và khung chuyển động của cùng nhân vật được tính chung.

Nhân vật và chân dung

Tên: Nam tu sĩ nhập môn
Dấu hiệu nhận biết: Nam tu sĩ khoảng 23 tuổi, gương mặt điềm tĩnh, tóc đen buộc cao, áo vải xanh xám nhiều lớp gọn gàng, đai da nâu, ngọc bội nhỏ và kiếm sắt giản dị.

Tên: Nữ tu sĩ nhập môn
Dấu hiệu nhận biết: Nữ tu sĩ khoảng 22 tuổi, ánh mắt cương nghị, tóc đen búi nửa cài trâm gỗ, áo vải trắng ngà phối xanh mực gọn gàng để chiến đấu, đai vải xanh, kiếm sắt giản dị.

Tên: Trưởng lão tông môn
Dấu hiệu nhận biết: Trưởng lão tông môn khoảng 60 tuổi, tóc hoa râm búi gọn, mắt sáng nhưng mệt mỏi, áo xanh mực viền vàng cũ giản dị, tay cầm ngọc giản.

Tên: Nữ dược sư
Dấu hiệu nhận biết: Nữ dược sư khoảng 35 tuổi, áo vải xanh rêu xắn tay, tạp dề nhuộm màu thảo dược, tóc tết gọn, tay cầm bó linh thảo.

Tên: Lão thợ mộc
Dấu hiệu nhận biết: Lão thợ mộc phàm nhân khoảng 70 tuổi, lưng hơi còng, tay chai sạn cầm bào gỗ, áo nâu vá vai, râu bạc thưa.

Bốn linh thú

Tên: Linh Hồ Vân Vĩ
Dấu hiệu nhận biết: Hồ ly nhỏ màu trắng ngà, chóp tai xanh xám, một đuôi mềm với dấu vân ngọc ở cuối, mắt trong và cảnh giác.

Tên: Xích Vũ Hạc
Dấu hiệu nhận biết: Hạc thân mảnh cao, lông đỏ son chuyển cam ở đầu cánh, mào vàng cổ, chân đen dài, cổ uốn chữ S.

Tên: Huyền Giáp Quy
Dấu hiệu nhận biết: Rùa già thấp đậm, mai đá xám lam xếp tầng như vảy núi, mép mai bám rêu và vài tinh thể băng nhỏ, đầu nhăn hiền, mắt ngọc lam.

Tên: Lôi Ảnh Báo
Dấu hiệu nhận biết: Báo đen thon dài cơ bắp, đốm lông là các vệt hình tia sét màu tím lam nhạt, mắt vàng, đuôi dài cong lên sau lưng.

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Quái thường · Âm Triều Ảnh đến Kính Hải Nữ

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Tra cứu theo tên và hình dáng. Sổ mỹ thuật có 66 hình quái thường, gồm yêu thú, tu sĩ đối địch, khôi lỗi và các dị tượng ở giai đoạn sau.

Hình dạng của 22 đối thủ

Tên: Âm Triều Ảnh
Dấu hiệu nhận biết: Bóng nước hình người mảnh màu đen lam, thân như sóng dựng đứng, hai tay là hai lưỡi sóng mỏng sắc, bên trong lấm tấm điểm sao mờ.

Tên: Băng Lân Xà
Dấu hiệu nhận biết: Rắn thân dày cuộn hai vòng, vảy lam nhạt viền trắng như phiến băng xếp lớp, mào gai băng sau đầu, miệng hé thấy hơi lạnh.

Tên: Bào Tử Nga
Dấu hiệu nhận biết: Bướm đêm lớn, cánh nâu rêu có hoa văn mắt giả màu ngọc mờ, thân phủ lông tơ, râu lược dài.

Tên: Căn Yêu
Dấu hiệu nhận biết: Sinh vật bốn chân kết từ rễ cây xoắn, thân gầy, lưng mọc chồi non xanh, đầu như gốc rễ có hốc sáng vàng lục, hai roi rễ dài vươn trước.

Tên: Chiến Hồn
Dấu hiệu nhận biết: Hồn lính bán trong suốt màu đỏ gỉ, giáp da rách, không có chân mà tan thành khói, hai tay cầm song kiếm gãy mũi.

Tên: Cốt Tiễn Thủ
Dấu hiệu nhận biết: Bộ xương cung thủ, giáp ngực da mục, mũ sắt méo, giương cung dài, mũi tên có đầu sáng đỏ cam.

Tên: Đàm Thi
Dấu hiệu nhận biết: Thi quỷ gầy gò còng lưng, da xám lục loang bùn, tay dài quá gối với móng đen, quần áo vải mục.

Tên: Đằng yêu
Dấu hiệu nhận biết: Hình người gầy kết từ dây leo xanh sẫm và rễ khô, lõi ngực có đốm sáng xanh nhạt, tay là những dây roi dài.

Tên: Đạo Văn Thú
Dấu hiệu nhận biết: Kỳ lân nhỏ thân mực đen, trên da chạy các vạch văn tự trừu tượng sáng vàng, sừng đơn tụ sáng trắng.

Tên: Điện Vệ
Dấu hiệu nhận biết: Vệ binh thiên điện giáp vàng nhạt đã xỉn và sứt, mũ trụ chóp nhọn, áo choàng trắng ngà rách, khiên tròn khắc mây và trường đao.

Tên: Đoạn Tắc Linh
Dấu hiệu nhận biết: Khối đa diện đá đen lơ lửng với mặt nạ đá trắng ở giữa, quanh là các mảnh vuông xếp thành tường chắn phía trước.

Tên: Hàn Giáp Giải
Dấu hiệu nhận biết: Cua khổng lồ mai dày xám lam phủ sương muối, một càng to như khiên che trước thân, càng kia nhỏ sắc.

Tên: Hàn Vụ Bức
Dấu hiệu nhận biết: Dơi lớn sải cánh rộng, lông trắng xám, màng cánh xanh băng trong mờ có gân sẫm, tai nhọn dài, nanh nhỏ phủ sương giá.

Tên: Hỏa Tích
Dấu hiệu nhận biết: Thằn lằn thân dài, da đen than nứt lộ khe sáng cam như than hồng, diềm cổ xòe, họng phồng sáng chuẩn bị phun lửa.

Tên: Hư Ảnh Kỵ
Dấu hiệu nhận biết: Kỵ sĩ và ngựa đều là bóng đen viền sáng tím, thân bị cắt lệch thành ba lát so le như ảnh vỡ, tay cầm trường thương mảnh.

Tên: Hư Khuyển
Dấu hiệu nhận biết: Chó săn gầy cao chân, thân đen tím như bầu trời đêm có lấm tấm sao, không có mắt, hàm dài răng trắng bạc, đuôi tan thành khói sao.

Tên: Huyền Uyên Xà
Dấu hiệu nhận biết: Rắn đen dài không mắt, vảy hút sáng, dọc thân các đốm sao tím. Miệng mở không có răng mà là xoáy tối.

Tên: Huyết Kỳ Thủ
Dấu hiệu nhận biết: Lính vong linh to con mặc giáp nửa thân gỉ, hai tay dựng cây chiến kỳ đỏ sẫm rách tả tơi cao quá đầu. Chân cờ cắm xuống đất, dải cờ quấn quanh tay như đang truyền máu.

Tên: Không Minh Thú
Dấu hiệu nhận biết: Thú hình hươu không sừng, thân trong vắt như pha lê rỗng chỉ có đường viền sáng, bên trong phản chiếu cảnh ngược. Đứng nghiêng tĩnh lặng.

Tên: Khuy Thiên Nhãn
Dấu hiệu nhận biết: Một con mắt khổng lồ lơ lửng trong vòng đá vỡ xoay quanh, tròng mắt là xoáy tinh vân, phía dưới rủ các dây thần kinh sáng như tua.

Tên: Kiếp Hỏa Linh
Dấu hiệu nhận biết: Ngọn lửa xám trắng hình người thon, lõi đen, hai tay là hai lưỡi lửa mảnh, tàn tro bay ngược lên trên.

Tên: Kính Hải Nữ
Dấu hiệu nhận biết: Nữ nhân ngư áo lụa trắng lam trôi như trong nước, tóc dài bồng bềnh, hai tay nâng một tấm gương nước tròn phát sáng.

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Quái thường · Kính Tăng đến Quang Diễm Linh

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Tra cứu theo tên và hình dáng. Sổ mỹ thuật có 66 hình quái thường, gồm yêu thú, tu sĩ đối địch, khôi lỗi và các dị tượng ở giai đoạn sau.

Hình dạng của 22 đối thủ

Tên: Kính Tăng
Dấu hiệu nhận biết: Tu sĩ đầu trọc áo xám tro, mắt bịt dải vải, hai tay nâng trước ngực một tấm gương đồng tròn lớn bằng nửa thân.

Tên: Liệt Dương Điểu
Dấu hiệu nhận biết: Chim ba chân lông vàng cam rực, lông đuôi dài như tia nắng, mỏ đen, mắt trắng chói.

Tên: Liệt Không Trùng
Dấu hiệu nhận biết: Sâu khổng lồ thân đốt đen bóng chui ra từ một vết nứt không gian, đầu là vòng hàm ba cánh mở rộng, dựng cao chuẩn bị bổ xuống.

Tên: Liệt Ngân Hồn
Dấu hiệu nhận biết: Hồn người mảnh như một vết nứt sáng bạc dựng đứng, quanh là mảnh vụn đá trôi, hai tay dài mảnh như dây hút về phía trước.

Tên: Linh Tắc Sư
Dấu hiệu nhận biết: Sư tử đá nhỏ lơ lửng kiểu tượng trấn môn, bờm xoắn cuộn, miệng ngậm một viên ngọc bịt kín tiếng, mắt nhắm.

Tên: Lôi Trảo Ưng
Dấu hiệu nhận biết: Ưng lớn lông nâu sẫm, đầu cánh và đuôi chuyển tím lam, vuốt vàng to bất thường có vệt sáng lam ở móng.

Tên: Lợn rừng da đá
Dấu hiệu nhận biết: Lợn rừng da như đá phiến xám, vai u lớn, hai nanh cong mẻ, lưng mọc rêu và vài mảnh đá.

Tên: Lưu Ly Vệ
Dấu hiệu nhận biết: Vệ binh bằng lưu ly trong suốt lam lục, bên trong rỗng có nước chuyển động, mũ trụ kín, tay cầm chuông ngọc không lưỡi.

Tên: Mộc Bì Khôi
Dấu hiệu nhận biết: Khôi lỗi gỗ thấp đậm, thân là khúc cây cổ thụ vỏ nứt sâu phủ rêu, một tay to bằng gốc cây, tay kia mang tấm vỏ cây dày như khiên.

Tên: Nghi Ảnh
Dấu hiệu nhận biết: Bóng người xám khói không mặt, thân trên rõ dần tan xuống dưới, hai tay ôm đầu, quanh miệng là những vòng khói như lời nói bị bóp nghẹt.

Tên: Ngọc Khôi Lỗi
Dấu hiệu nhận biết: Khôi lỗi hình người bằng ngọc lục nhạt đục, khớp nối vàng cổ, thân dày vuông vức, ngực khảm phù văn mờ, nhiều vết nứt.

Tên: Nguyệt Ảnh Hồn
Dấu hiệu nhận biết: Hồn nữ mảnh mai bán trong suốt màu bạc lam, áo dài tay rộng tan dần thành khói ở gấu, tóc bay, mặt chỉ có đường nét mờ, tay giương cung ánh trăng không dây.

Tên: Nhai Viên
Dấu hiệu nhận biết: Vượn núi lông nâu xám, tay rất dài, ôm một tảng đá vách núi to giơ quá đầu chuẩn bị giáng xuống.

Tên: Nhận Khôi Lỗi
Dấu hiệu nhận biết: Khôi lỗi gỗ sơn đen khớp đồng, thân mảnh, bốn tay mỗi tay một lưỡi đao mỏng, mặt nạ trắng không biểu cảm nứt một đường.

Tên: Nhện rừng
Dấu hiệu nhận biết: Nhện rừng lớn cỡ con chó, thân nâu rêu, bụng có hoa văn ngọc mờ, tám chân mảnh có khớp rõ, hai nanh xanh nhạt.

Tên: Phế Khư Ảnh
Dấu hiệu nhận biết: Bóng người mảnh khảnh màu chàm sẫm, viền thân tan như mực loang, mắt là hai vệt trắng, một tay cầm đoản kiếm ngọc gãy.

Tên: Phế Thành Vệ
Dấu hiệu nhận biết: Vệ binh giáp nặng cổ xưa, giáp sắt xám xanh gỉ sét sứt mẻ, mũ trụ kín mặt chỉ hở khe mắt sáng bạc, khiên tháp cao nứt và chùy ngắn.

Tên: Phế Tinh Khôi
Dấu hiệu nhận biết: Khôi lỗi sứt mẻ bằng kim loại sao xám gỉ, mất một tay, lõi ngực là ngôi sao tắt leo lét, khói tro bay ra từ khớp.

Tên: Phong Thạch Khôi
Dấu hiệu nhận biết: Khôi lỗi đá núi xám tím, các khối đá lơ lửng ghép lỏng quanh lõi ngực sáng lam, vai rộng, hai tay đá to.

Tên: Phù Không Hạc
Dấu hiệu nhận biết: Hạc trắng thân bán trong suốt, lông cánh là các phiến sáng mỏng, mỏ dài sáng trắng, chân tan thành sương.

Tên: Phù Linh
Dấu hiệu nhận biết: Tinh linh nhỏ kết từ ba lá bùa giấy vàng cũ xoay quanh một đốm lửa cam, nét bùa đỏ son là các vạch trừu tượng không phải chữ đọc được.

Tên: Quang Diễm Linh
Dấu hiệu nhận biết: Tinh linh lửa trắng vàng hình người nhỏ không chân, lõi ngực rỗng tối như đang hút sáng vào, hai tay dài như lưỡi lửa vươn ra.

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Quái thường · Quỷ Đăng đến Yêu lang

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Tra cứu theo tên và hình dáng. Sổ mỹ thuật có 66 hình quái thường, gồm yêu thú, tu sĩ đối địch, khôi lỗi và các dị tượng ở giai đoạn sau.

Hình dạng của 22 đối thủ

Tên: Quỷ Đăng
Dấu hiệu nhận biết: Lồng đèn giấy cũ rách lơ lửng, bên trong là ngọn lửa hồn xanh lục có hình mặt mờ, tua vải dài bên dưới như tay.

Tên: Sa Phỉ
Dấu hiệu nhận biết: Cướp sa mạc gầy nhanh nhẹn, khăn quấn đầu và mặt màu đỏ sẫm, áo choàng ngắn màu cát rách mép, hai tay hai đoản đao cong.

Tên: Sơn tặc
Dấu hiệu nhận biết: Sơn tặc trưởng thành, áo vải thô nâu sẫm, khăn che nửa mặt, giáp da vai, cầm trường đao cũ sứt mẻ.

Tên: Thạch vệ
Dấu hiệu nhận biết: Tượng đá hình người thấp đậm, vai rộng, mặt là phiến đá khắc đơn giản, tay cầm khiên đá tròn nứt, khe nứt ánh ngọc mờ.

Tên: Thiên Lộ Ảnh
Dấu hiệu nhận biết: Bóng một lữ khách trùm áo choàng trắng xám, nón lá, không lộ mặt, ngón tay đặt lên môi ra dấu im lặng.

Tên: Thực Thạch Vệ
Dấu hiệu nhận biết: Tượng vệ binh bằng đá trắng ngà bóng như gương, cạnh vát phẳng phản chiếu ánh sáng, không mặt, tay cầm khiên phẳng sáng loáng hướng về người chơi.

Tên: Tinh Sư
Dấu hiệu nhận biết: Pháp sư gầy áo chàm sẫm thêu chòm sao bạc, mũ cao, mặt che mạng mỏng, hai tay nâng một hồn thiên nghi nhỏ bằng đồng đang sáng.

Tên: Tịnh Thủy Giao
Dấu hiệu nhận biết: Giao long nhỏ không sừng, vảy trong như thủy tinh lam nhạt nhìn thấy xương sáng bên trong, thân cuộn quanh một quả cầu nước làm khiên.

Tên: Tinh Uyên Vệ
Dấu hiệu nhận biết: Vệ binh giáp đen khảm sao, vai giáp rất lớn, cầm chùy cán dài đầu là khối thiên thạch, giơ cao hai tay chuẩn bị giáng.

Tên: Tinh Vân Lang
Dấu hiệu nhận biết: Sói thân kết từ mây tinh vân tím lam, khung xương sáng là các điểm sao nối nhau như chòm sao, mắt trắng.

Tên: Toái Tinh Thú
Dấu hiệu nhận biết: Thú bốn chân thân ghép từ mảnh tinh thể vỡ sắc cạnh màu tím khói, các mặt phẳng bóng như gương, lõi sáng trắng lộ qua khe.

Tên: Tuyết Viên
Dấu hiệu nhận biết: Vượn tuyết vai rất rộng, lông trắng dày, mặt và bàn tay da xám lam, hai tay nắm chặt giơ cao quá đầu chuẩn bị giáng chùy.

Tên: U Minh Điệt
Dấu hiệu nhận biết: Đỉa khổng lồ thân dày bóng nhớt màu đen tím, bụng đỏ sẫm, miệng tròn nhiều vòng răng.

Tên: U Quang Ngư
Dấu hiệu nhận biết: Cá biển sâu lơ lửng trong không trung, thân đen dẹt, hàm răng kim, cần câu trên đầu treo một quả cầu sáng trắng lam chói.

Tên: Vấn Đạo Giả
Dấu hiệu nhận biết: Tu sĩ trung niên áo vải trắng giản dị ngồi xếp bằng lơ lửng, trước mặt là một mặt nước phẳng dựng đứng như gương.

Tên: Vẫn Thạch Quy
Dấu hiệu nhận biết: Rùa mai là một khối thiên thạch đen rỗ cháy sém, khe nứt sáng cam, bốn chân có vuốt dài sắc bất thường, đầu nhỏ nhanh nhẹn vươn ra cắn.

Tên: Vân Xà
Dấu hiệu nhận biết: Rắn dài mảnh như dải mây, vảy trắng xám chuyển lam, bờm lông tơ như mây dọc sống lưng, không cánh, thân uốn lượn lơ lửng.

Tên: Vô Danh Kiếm Linh
Dấu hiệu nhận biết: Một thanh cổ kiếm sứt mẻ lơ lửng tự cầm lấy mình bằng một bàn tay khói, quanh lưỡi kiếm các sợi sáng đỏ nhạt hút vào.

Tên: Vô Diện Tăng
Dấu hiệu nhận biết: Tăng nhân cao gầy áo đen dài, đầu trọc, mặt phẳng trơn không ngũ quan, hai bàn tay khô héo chắp trước ngực tỏa khói xám làm héo úa.

Tên: Vô Thanh Vệ
Dấu hiệu nhận biết: Vệ binh đá trắng xám không miệng, giáp trơn không hoa văn, khiên chữ nhật lớn và kiếm thẳng. Mọi đường nét tĩnh và vuông.

Tên: Xích Sa Hạt
Dấu hiệu nhận biết: Bọ cạp cỡ con bê, giáp đỏ gạch dày nhiều đốt, hai càng to, đuôi cong cao quá lưng với ngòi đen tím nhỏ giọt độc.

Tên: Yêu lang
Dấu hiệu nhận biết: Yêu lang màu xám lam, thân thon cơ bắp, bờm hơi dựng, mắt ngọc nhạt, vuốt sẫm, vài vệt linh văn rất tiết chế trên vai.

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Boss khu vực và boss thế giới

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Những chi tiết như phiến băng quanh cổ Hàn Vụ Xà Mẫu, hạch ngọc trên ngực Trấn Sơn Thạch Linh hay thân cây rỗng của Cổ Mộc Tâm Ma giúp nhận ra đúng đối thủ.

22 boss

Tên: Âm Hư Hải Chủ
Dấu hiệu nhận biết: Thủy quái vương nửa người nửa giao long, thân trên là nam nhân da xám lam tóc dài như rong, mũ miện san hô đen, cầm đinh ba. Thân dưới là đuôi giao long cuộn.

Tên: Cổ Mộc Thụ Yêu
Dấu hiệu nhận biết: Cây cổ thụ sống khổng lồ, thân nghiêng, mặt người già khắc trong vỏ cây, hai cành lớn làm tay, tán lá sẫm thưa.

Tên: Dương Thực Đảo Vương
Dấu hiệu nhận biết: Cự nhân đá vàng nhạt bán trong suốt, nửa thân là đá thật nửa thân còn là ánh sáng chưa đặc lại, vương miện tia nắng, ngực có lõi mặt trời nhỏ.

Tên: Hàn Vụ Xà Mẫu
Dấu hiệu nhận biết: Mãng xà khổng lồ, nửa thân trước dựng cao, vảy trắng lam, cổ bành như mang rắn hổ kết bằng các phiến băng trong suốt tạo thành lớp khiên, vương miện gai băng, mắt lam lạnh.

Tên: Huyết Sa Tướng Quân
Dấu hiệu nhận biết: Tướng quân vong linh cưỡi trên xác chiến mã giáp sắt, giáp đen đỏ nhiều lớp, mũ trụ có sừng gãy một bên, áo choàng rách.

Tên: Không Huyền Uyên Chủ
Dấu hiệu nhận biết: Thực thể khoác áo choàng là chính vực sao. Bên trong áo không có thân mà là khoảng không sâu hút với một con mắt sáng duy nhất. Vai mang giáp gồm các vành sao xoay, một tay xương dài cầm lưỡi hái mảnh.

Tên: Không Kiếp Đài Chủ
Dấu hiệu nhận biết: Đạo nhân ngồi tĩnh tọa trên đài đá tròn, áo bào xám tro, tóc búi, mặt bình thản mắt nhắm. Sau lưng chín vòng tro tàn của chín kiếp xếp như hào quang, trước mặt một tấm gương đá đen lơ lửng.

Tên: Không Linh Đảo Tôn
Dấu hiệu nhận biết: Lão nhân tóc râu trắng dài ngồi câu trên một hòn đảo nhỏ lơ lửng có một cây tùng, áo vải thô xám, cần câu thả dây sáng xuống hư không. Dây câu hút linh lực.

Tên: Không Niết Liệt Chủ
Dấu hiệu nhận biết: Cự nhân thân nứt toác nhiều đường, trong khe nứt là hư không tím sẫm lấm tấm sao. Đầu đội mũ sừng, hai tay cầm hai nửa của một thanh cự kiếm gãy nối nhau bằng tia sáng.

Tên: Khuy Niết Tinh Quân
Dấu hiệu nhận biết: Tinh quân cao gầy áo bào dệt từ bầu trời sao, mặt che sau một đĩa tinh bàn tròn đục lỗ, sau lưng vòng hào quang gồm bảy mảnh tinh thể xếp thành giáp, hai tay cầm thước sao dài như kiếm.

Tên: Lạc Hà Lôi Bằng
Dấu hiệu nhận biết: Đại bàng khổng lồ có sải cánh rộng, lông đen tím, lông ống cánh viền sáng lam trắng, mào lông dựng, mỏ và vuốt vàng cổ.

Tên: Tàn Nguyệt Thủ Tướng
Dấu hiệu nhận biết: Tướng quân vong linh cao lớn, giáp vảy bạc xỉn phủ áo choàng rách màu chàm, mũ trụ có mào hình trăng khuyết, mặt là bóng tối với hai mắt bạc.

Tên: Thiên Khuyết Điện Chủ
Dấu hiệu nhận biết: Chủ điện uy nghi ngồi trên ngai đá mây vỡ lơ lửng, long bào trắng vàng cổ nhiều lớp, mũ miện có rèm ngọc che nửa mặt, bốn tay cầm kiếm, ấn ngọc, cờ lệnh và hồn thiên nghi.

Tên: Thủ Lộ Nhân
Dấu hiệu nhận biết: Người gác đường cao lớn khoác áo tơi dài màu tro, nón rộng vành, mặt khuất trong bóng chỉ thấy cằm râu bạc. Đứng chắn giữa một bậc thềm đá, hai tay chống một cây trượng gỗ thô.

Tên: Tiên Linh Tàn Niệm
Dấu hiệu nhận biết: Hư ảnh một tiên nhân ngồi kiết già lơ lửng, đạo bào trắng ngà rộng, tóc dài bạc, khuôn mặt bị che bởi quầng sáng nhạt.

Tên: Tịnh Niết Cung Chủ
Dấu hiệu nhận biết: Nữ cung chủ đoan nghiêm ngồi trên đài sen nước, xiêm y trắng lam nhiều tầng tan thành dòng nước ở gấu, mũ phượng ngọc, mắt nhắm.

Tên: Toái Niết Tinh Hài
Dấu hiệu nhận biết: Bộ hài cốt khổng lồ của một tinh thú, xương bằng tinh thể tím đen, giữa lồng ngực treo một ngôi sao vỡ làm đôi vẫn cháy, các mảnh xương vụn trôi quanh như vành đai.

Tên: Trấn Sơn Thạch Linh
Dấu hiệu nhận biết: Cự tượng đá cổ cao lớn, thân ghép từ phiến đá núi phủ rêu, hai tay to như cột, ngực có hạch ngọc xanh phát sáng nhẹ, vai mang mảnh cổng đá vỡ.

Tên: U Minh Thủ Hồn
Dấu hiệu nhận biết: Người giữ đầm cao gầy trùm áo tơi rơm và nón rộng vành che kín mặt, đứng trên mũi một con thuyền nan mục.

Tên: Vấn Tâm Phán Quan
Dấu hiệu nhận biết: Phán quan cao lớn áo quan dài màu chàm đen viền bạc, mũ cánh chuồn cổ, mặt là mặt nạ gương phẳng không có ngũ quan.

Tên: Vụ Lang Vương
Dấu hiệu nhận biết: Sói đầu đàn to gấp đôi yêu lang thường, lông xám bạc, bờm dài như sương, một mắt sẹo, nanh lớn lộ rõ, linh văn ngọc chạy dọc sống lưng.

Tên: Xích Sa Bạo Quân
Dấu hiệu nhận biết: Chiến tướng khổng lồ nửa người nửa bọ cạp. Thân trên là người vạm vỡ mặc giáp đồng đỏ gỉ, mũ trụ có sừng, tay cầm đại phủ. Thân dưới là thân bọ cạp sáu chân với đuôi ngòi lớn vươn cao sau vai.

3 boss thế giới

Tên: Cổ Mộc Tâm Ma
Dấu hiệu nhận biết: Thân cây vạn năm rỗng ruột, trong hốc là một trái tim gỗ đen đập với khuôn mặt méo mó hiện trên đó, rễ đen vươn như tay, tán cây khô không lá treo các lồng đèn bào tử tím.

Tên: Hư Không Thôn Thú
Dấu hiệu nhận biết: Cự thú thân như cá voi không mắt lơ lửng, da đen tím lấm tấm sao, hàm khổng lồ nhiều lớp răng mở ra một xoáy hư không, hai chi trước là vuốt lưỡi liềm dài.

Tên: Lôi Uyên Giao
Dấu hiệu nhận biết: Giao long khổng lồ vươn nửa thân lên từ vực, vảy đen lam, bờm và râu là tia sáng lam trắng, sừng nhánh như san hô sét, miệng há tụ cầu sét.

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Hóa thân thí luyện và đại kiếp

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Trong bản mô tả hình ảnh, có thử thách mang hình dáng của chính tu sĩ, cũng có thử thách hiện thành cánh cổng, cơn lốc hay những thân ảnh phàm nhân.

15 đối thủ thí luyện

Tên: Âm Hư Thí Luyện Ảnh
Dấu hiệu nhận biết: Bóng tu sĩ màu đen lam phủ lớp giáp băng mỏng, cầm trường kiếm bóng, quanh chân nước đen.

Tên: Đan Hỏa Phản Phệ
Dấu hiệu nhận biết: Ngọn lửa đan vàng cam hình thú dữ bốc lên từ một lò đan đồng nứt, mắt trắng, vuốt lửa vươn ra.

Tên: Đạo Kính Ảnh
Dấu hiệu nhận biết: Hình người bằng gương bạc lỏng, bề mặt phản chiếu, dáng tu sĩ đứng thế thủ kiếm. Đường nét tối giản, không mặt, vài mảnh gương vỡ trôi quanh vai.

Tên: Đạp Thiên Thí Luyện Ảnh
Dấu hiệu nhận biết: Bóng tu sĩ áo trắng xám rất giản dị, gần như người thật nhưng không có bóng đổ và không có mặt. Một tay nâng ngọn đèn nhỏ.

Tên: Dương Thực Thí Luyện Ảnh
Dấu hiệu nhận biết: Bóng tu sĩ bằng ánh sáng vàng nhạt nửa đặc nửa rỗng, ngực mang gương sáng, tay kết ấn.

Tên: Hồng Trần Chấp Niệm
Dấu hiệu nhận biết: Bóng mờ gồm ba dáng người phàm chồng lên nhau kết bằng khói đỏ nâu, tay níu về phía trước, quanh là những sợi chỉ đỏ quấn.

Tên: Không Huyền Thí Luyện Ảnh
Dấu hiệu nhận biết: Bóng tu sĩ áo choàng vực sao, bên trong áo là khoảng tối có một con mắt sáng, tay cầm kiếm đen.

Tên: Không Kiếp Thí Luyện Ảnh
Dấu hiệu nhận biết: Bóng tu sĩ bằng tro xám đang cháy âm ỉ, tàn tro bay ngược lên, vai quấn sét xám trắng.

Tên: Không Linh Thí Luyện Ảnh
Dấu hiệu nhận biết: Bóng tu sĩ chỉ có đường viền sáng trắng, bên trong trong suốt, trước ngực một vòng gương.

Tên: Không Niết Thí Luyện Ảnh
Dấu hiệu nhận biết: Bóng tu sĩ đen viền tím bị cắt lệch thành lát so le, khoác giáp mảnh hư không, cầm kiếm gãy.

Tên: Khuy Niết Thí Luyện Ảnh
Dấu hiệu nhận biết: Bóng tu sĩ dệt từ tinh vân tím lam, các điểm sao nối thành kinh mạch, tay cầm kiếm sao.

Tên: Tâm Ma
Dấu hiệu nhận biết: Bản sao tối của tu sĩ người chơi. Cùng dáng người và kiểu áo với người chơi nhưng toàn thân màu mực đen tím, mắt đỏ son, tóc xõa, viền thân bốc khói đen. Cầm kiếm bóng tối.

Tên: Tiên Linh Thí Khôi
Dấu hiệu nhận biết: Khôi lỗi ngọc trắng cao thanh mảnh hơn Ngọc Khôi Lỗi, khớp vàng, ngực khảm gương ngọc tròn, tay cầm kiếm ngọc.

Tên: Tịnh Niết Thí Luyện Ảnh
Dấu hiệu nhận biết: Bóng tu sĩ bằng nước trong, tóc và tay áo như dòng chảy, vai quấn tia sét mảnh.

Tên: Toái Niết Thí Luyện Ảnh
Dấu hiệu nhận biết: Bóng tu sĩ thân tinh thể nứt vỡ màu tím khói, một tay nâng lồng đèn sao tắt.

Ba hình tượng cửa ải

Tên: Chứng Đạo Ảnh
Dấu hiệu nhận biết: Một cánh cổng đá cao đơn sơ lơ lửng, trong khung cổng là dáng một người mặc áo trắng quay lưng lại nửa bước, ánh sáng nhạt tràn qua khe cổng.

Tên: Huyền Kiếp
Dấu hiệu nhận biết: Hóa thân của thiên kiếp. Một vòng xoáy mây đen đứng thẳng có chín vòng đồng tâm, ở giữa là một con mắt trời lạnh lùng. Từ vành ngoài vươn xuống chín sợi xích sáng mang chín màu nguyên tố.

Tên: Thiên Nhân Ngũ Suy
Dấu hiệu nhận biết: Hình tượng một thiên nhân đang suy tàn. Dáng người cao ngồi lơ lửng, hoa đội đầu héo rũ, xiêm y trắng ngả ố và rách dần, da nứt như sứ, hào quang sau lưng tắt mất nửa vòng, năm cánh hoa úa trôi quanh.

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Địa danh qua 25 cảnh chiến đấu

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Cảnh chiến đấu có các chi tiết nhận diện riêng. Cờ lệnh và giáo gãy thuộc Huyết Sa Chiến Trường, còn cung điện dưới biển sao là Tịnh Niết Thủy Cung.

Bối cảnh chiến đấu, đấu trường và cửa ải

Tên: Âm Hư Hải Vực
Dấu hiệu nhận biết: Mặt biển đen phẳng lặng dưới bầu trời không trăng, sao chìm sáng lờ mờ dưới mặt nước, sàn đấu là dải đá ngầm nổi. Xa xa các cột nước đen dựng đứng.

Tên: Bìa rừng Thanh Khê
Dấu hiệu nhận biết: Suối nhỏ, bãi cỏ phẳng, rừng trúc và cây cổ thụ trong sương mỏng, xa có mái nhà thôn và núi mờ.

Tên: Cổ Mộc Cấm Địa
Dấu hiệu nhận biết: Rừng cổ thụ khổng lồ, thân cây to như tháp phủ rêu, rễ nổi, dây phong ấn bằng thừng cũ treo bùa giấy rách giữa các thân cây. Ánh sáng lục lọt qua tán dày, bào tử sáng lơ lửng.

Tên: Đạp Thiên Chi Lộ
Dấu hiệu nhận biết: Con đường bậc thang đá trắng rộng chạy ngang rồi vươn lên xa vào ánh sáng nhạt, hai bên là khoảng không trắng xám không có gì, vài bậc đá vỡ trôi.

Tên: Đấu trường
Dấu hiệu nhận biết: Sân đấu tròn lát đá xám trong một tông môn, lan can đá thấp, khán đài bậc thang trống ở hậu cảnh, cờ phướn ngọc lam và đỏ son hai bên, hai trống lớn. Nắng chiều xiên.

Tên: Dương Thực Tinh Đảo
Dấu hiệu nhận biết: Mặt một hòn đảo đá vàng nhạt lơ lửng, các đảo khác trôi ở xa nối nhau bằng cầu ánh sáng, một ngôi sao trắng chói thấp sát chân trời, bóng đổ gắt và dài.

Tên: Hàn Vụ Cốc
Dấu hiệu nhận biết: Thung lũng hẹp giữa hai vách đá xám lam, sương lạnh trôi ngang tầm gối, mặt đất tuyết mỏng lẫn đá, xa xa hồ băng và các cột tinh thể băng lam nhạt. Trời trắng xám.

Tên: Huyết Sa Chiến Trường
Dấu hiệu nhận biết: Bãi chiến trường cũ cát đỏ sẫm, giáo gãy và cờ rách cắm rải rác ở hậu cảnh, bánh xe chiến xa vỡ, trời đỏ đục chiều tà, khói mỏng.

Tên: Không Huyền Tinh Uyên
Dấu hiệu nhận biết: Gờ đá hẹp bên miệng một vực sao không đáy, bên dưới là xoáy sao chậm, vách vực có các bậc đá xoắn ốc đi xuống, ánh sáng hắt từ dưới lên.

Tên: Không Kiếp Đạo Đài
Dấu hiệu nhận biết: Đài đá tròn rộng trơn nhẵn giữa khoảng không xám, chín cột đá thấp quanh rìa, tro mịn rơi rất chậm, không gió, không mây.

Tên: Không Linh Phù Đảo
Dấu hiệu nhận biết: Bãi cỏ sáng nhạt trên một đảo nổi yên bình, cây tùng và thác nước đổ vào hư không, nhiều đảo nhỏ trôi xa dần trong sương trắng.

Tên: Không Niết Liệt Cốc
Dấu hiệu nhận biết: Hẻm đá đen hai bên, không gian phía sau bị nứt thành các mảng so le như kính vỡ lộ hư không tím sẫm, đá vụn trôi ngược lên.

Tên: Khuy Niết Tinh Vực
Dấu hiệu nhận biết: Bệ đá phẳng trôi giữa dải tinh vân tím lam hồng, bụi sao trôi ngang, vài thiên thạch nhỏ ở xa, với dải sáng ngang đường chân trời.

Tên: Lạc Hà Sơn Mạch
Dấu hiệu nhận biết: Sống núi đá trơ trọi trên tầng mây, các đỉnh nhọn xa xa, mây dông tím sẫm cuộn, vài tia chớp nhỏ trong mây ở rất xa, ráng chiều cam mỏng sát chân trời.

Tên: Tàn Nguyệt Cổ Thành
Dấu hiệu nhận biết: Quảng trường lát đá nứt trong một tòa thành đổ, tường thành sập và cổng vòm gãy ở hậu cảnh, trăng khuyết lớn mờ sau mây mỏng, ánh bạc lam.

Tên: Thí Luyện Đài
Dấu hiệu nhận biết: Không gian nội tâm dùng cho thử thách đột phá. Sàn nước nông phẳng như gương phản chiếu, một vòng trận pháp sáng nhạt dưới mặt nước, hậu cảnh là màn sương mực loãng với vài cột đá mờ.

Tên: Thiên Khuyết Cổ Điện
Dấu hiệu nhận biết: Sân đá trắng trên tầng mây, cổng lầu hai tầng và hành lang cột vàng nhạt đã bạc màu ở hậu cảnh, cầu đá gãy vươn ra mây, trời xanh thẳm lấm tấm sao ban ngày.

Tên: Thiên Uyên
Dấu hiệu nhận biết: Miệng một vực lớn giữa núi, bờ vực đá rộng làm sàn đấu, mây dông xoáy phía trên, ánh sáng lạnh rọi từ tâm xoáy xuống, cột đá khắc phong ấn gãy đổ quanh bờ.

Tên: Tiên Linh Phế Khư
Dấu hiệu nhận biết: Sân điện tông môn đổ nát lát ngọc thạch nứt, cột ngọc gãy, bia đá vỡ, bậc thềm dẫn lên điện chính sụp mái ở xa, linh quang trắng lục nhạt còn vương như sương.

Tên: Tịnh Niết Thủy Cung
Dấu hiệu nhận biết: Đại sảnh cung điện dưới nước trong vắt, sàn ngọc lam, cột lưu ly, vòm trần thấy mặt biển sao phía trên, các tia sáng xuyên xuống, san hô trắng.

Tên: Toái Niết Phế Tinh
Dấu hiệu nhận biết: Bề mặt một ngôi sao vỡ. Nền đá đen nứt lộ khe sáng tím, các mảng vỏ sao trôi lơ lửng ở hậu cảnh, lõi sao vỡ đôi còn cháy ở xa.

Tên: U Minh Đàm
Dấu hiệu nhận biết: Đầm lầy tĩnh lặng, mặt nước đen phẳng như gương, bờ đất bùn nổi làm sàn đấu, cây chết trơ cành, sương lục mỏng, vài đốm lửa ma xanh ở rất xa.

Tên: Vấn Tâm Nhai
Dấu hiệu nhận biết: Mỏm đá bằng trên vách núi dựng đứng, một cây tùng cô độc, biển mây bên dưới, vách đối diện khắc lờ mờ các vạch cổ, trời rạng đông xám hồng.

Tên: Vân Thạch Sơn
Dấu hiệu nhận biết: Trời lạnh sáng dịu, núi tầng tầng xa trong sương, cổng đá cổ ở trung cảnh, sân đá phẳng cạnh cổng cổ.

Tên: Xích Sa Hoang Nguyên
Dấu hiệu nhận biết: Hoang mạc cát đỏ gạch, cồn cát lượn thấp, vài trụ đá phong hóa và xương thú lớn nửa vùi ở xa, trời vàng cam bụi, hơi nóng làm nhòe đường chân trời.

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Nguyên liệu, đan dược và trang bị cơ bản

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Biểu tượng giúp phân biệt đan dược, vật liệu vùng, chứng vật của boss và trang bị. Với các vật phẩm chỉ mới có yêu cầu vẽ, trạng thái được ghi ngay cạnh tên.

Đơn vị tiền và điểm

Tên: Linh thạch
Dấu hiệu nhận biết: Một viên linh thạch xanh ngọc bán trong, dạng tinh thể tự nhiên có mặt vỡ rõ, ánh sáng phát từ lõi rất nhẹ.

Tên: Điểm đấu trường
Dấu hiệu nhận biết: Đồng thẻ bài tròn bằng đồng đỏ, mặt khắc nổi hai thanh kiếm bắt chéo, dây tua đỏ son.

Tên: Điểm cảm ngộ
Dấu hiệu nhận biết: Một ngọn đèn dầu nhỏ bằng đồng với ngọn lửa trắng ngà hình giọt nước, quanh lửa một vòng sáng mảnh.

Tên: Cống hiến tông môn
Dấu hiệu nhận biết: Lệnh bài ngọc lam hình chữ nhật bo góc, khắc nổi hình núi ba đỉnh, dây tua vàng cổ.

Biểu tượng trang bị

Tên: Vũ khí
Dấu hiệu nhận biết: Một thanh kiếm thẳng lưỡi mảnh, chuôi quấn vải, đặt chéo.

Tên: Pháp y
Dấu hiệu nhận biết: Một bộ pháp y gấp gọn, cổ áo giao lĩnh, viền đơn giản.

Tên: Mũ và trâm
Dấu hiệu nhận biết: Một chiếc quan nhỏ buộc tóc kèm trâm.

Tên: Hộ oản
Dấu hiệu nhận biết: Một đôi hộ oản da có đai buộc.

Tên: Đai lưng
Dấu hiệu nhận biết: Một chiếc đai lưng cuộn tròn, khóa kim loại cũ.

Tên: Giày
Dấu hiệu nhận biết: Một đôi giày vải cổ cao mũi hơi cong.

Tên: Nhẫn
Dấu hiệu nhận biết: Một chiếc nhẫn trơn có một mặt đá nhỏ.

Tên: Ngọc bội
Dấu hiệu nhận biết: Một miếng ngọc bội tròn dẹt có dây tua.

Tên: Trận kỳ
Dấu hiệu nhận biết: Lá cờ tam giác nhỏ màu chàm trên cán ngắn có mũi nhọn để cắm đất, giữa cờ một vòng tròn trận pháp trừu tượng.

Tên: Quyền sáo
Dấu hiệu nhận biết: Một đôi găng sắt bọc tới cổ tay đặt chồng chéo, khớp ngón nổi, đai da.

Tên: Hồn đăng
Dấu hiệu nhận biết: Đèn lồng kim loại sáu mặt có quai xách, bên trong đốm lửa lam nhạt.

Tên: Pháp trượng
Dấu hiệu nhận biết: Trượng gỗ sẫm dài đặt chéo, đầu trượng ôm một viên châu lam, hai vòng đồng.

Vật phẩm có tên và mẫu hình cơ bản

Tên: Bạo Quân Tâm
Dấu hiệu nhận biết: Khối hạch hình trái tim bằng đá đỏ sẫm bọc mảnh giáp đồng gỉ, khe nứt sáng cam.
Hình ảnh: Đã tích hợp icon

Tên: Cổ Mộc Chi
Dấu hiệu nhận biết: Khối nhựa cây hổ phách sẫm còn dính mẩu vỏ cây, bên trong một chiếc lá nhỏ.
Hình ảnh: Đã tích hợp icon

Tên: Da thú
Dấu hiệu nhận biết: Một tấm da thú xám nâu cuộn lỏng, buộc dây gai, mép lông lộ ra.
Hình ảnh: Đã tích hợp icon

Tên: Đại Tụ Linh Đan
Dấu hiệu nhận biết: Viên đan lớn hơn màu ngọc lam đậm trong hộp gỗ sơn viền vàng cổ, hai vòng đan văn, làn linh khí rõ hơn Tụ Linh Đan.
Hình ảnh: Đã tích hợp icon

Tên: Đan đột phá Trúc Cơ
Dấu hiệu nhận biết: Một viên đan vàng cổ có ba đường vân xoáy, tỏa khí ngọc rất nhẹ, trông quý hơn hẳn Dưỡng Khí Đan.
Hình ảnh: Đã tích hợp icon

Tên: Dưỡng Khí Đan
Dấu hiệu nhận biết: Một viên đan tròn màu trắng ngà có vân xanh nhạt, đặt trên mảnh lá khô nhỏ.
Hình ảnh: Đã tích hợp icon

Tên: Hạch đá
Dấu hiệu nhận biết: Một hạch đá tròn nứt vỡ, lõi ngọc xanh sáng dịu lộ qua khe nứt.
Hình ảnh: Đã tích hợp icon

Tên: Hàn Tinh
Dấu hiệu nhận biết: Cụm ba tinh thể băng lam nhạt mọc từ một mẩu đá xám, mặt cắt sắc, lõi sáng trắng.
Hình ảnh: Đã tích hợp icon

Tên: Hộ Thân Trận Bàn
Dấu hiệu nhận biết: Đĩa trận nhỏ bằng sắt xám khảm đồng, mặt khắc vòng tròn đồng tâm và bốn chốt ngọc lam ở bốn hướng.
Hình ảnh: Đã lập yêu cầu vẽ

Tên: Hóa Thần Đan
Dấu hiệu nhận biết: Đan đột phá. Viên đan tím nhạt trên đế ngọc nhỏ, ba vòng đan văn, làn khói hình xoắn ốc.
Hình ảnh: Đã tích hợp icon

Tên: Hồi Nguyên Đan
Dấu hiệu nhận biết: Viên đan lục ngọc ấm trong hộp gỗ nhỏ mở nắp, một vòng đan văn, quanh viên đan một làn khí lục nhạt xoắn lên.
Hình ảnh: Đã lập yêu cầu vẽ

Tên: Hồn Lộ
Dấu hiệu nhận biết: Lọ sứ nhỏ cổ thon đựng sương lục nhạt phát sáng, nút gỗ, một giọt đọng ở miệng lọ.
Hình ảnh: Đã tích hợp icon

Tên: Huyết Thiết
Dấu hiệu nhận biết: Thỏi sắt thô đen với vân đỏ sẫm ngấm vào như mạch máu.
Hình ảnh: Đã tích hợp icon

Tên: Kết Kim Đan
Dấu hiệu nhận biết: Đan đột phá. Viên đan vàng kim trên đế ngọc nhỏ, ba vòng đan văn, làn linh khí mỏng.
Hình ảnh: Đã tích hợp icon

Tên: Linh thảo
Dấu hiệu nhận biết: Một gốc linh thảo ba lá xanh ngọc, gân lá sáng nhạt, rễ còn dính chút đất.
Hình ảnh: Đã tích hợp icon

Tên: Lôi Bằng Hạch
Dấu hiệu nhận biết: Viên hạch tím đen hình trứng, bên trong một tia sét lam trắng bị giam.
Hình ảnh: Đã tích hợp icon

Tên: Lôi Vũ
Dấu hiệu nhận biết: Một chiếc lông vũ lớn đen tím, sống lông sáng lam trắng, đầu lông toé hai tia điện rất nhỏ.
Hình ảnh: Đã tích hợp icon

Tên: Mảnh bản nguyên
Dấu hiệu nhận biết: Mảnh tinh thể không đều trong suốt, bên trong năm sợi sáng năm màu xoắn vào nhau.
Hình ảnh: Đã tích hợp icon

Tên: Nanh sói
Dấu hiệu nhận biết: Một chiếc nanh sói lớn màu ngà, cong, gốc nanh có linh văn ngọc mờ.
Hình ảnh: Đã tích hợp icon

Tên: Ngưng Anh Đan
Dấu hiệu nhận biết: Đan đột phá. Viên đan đỏ son nhạt trên đế ngọc nhỏ, ba vòng đan văn, bên trong thấp thoáng bóng một hài nhi ngồi rất nhỏ và trừu tượng.
Hình ảnh: Đã tích hợp icon

Tên: Phán Quan Kính
Dấu hiệu nhận biết: Gương đồng tròn nhỏ có tay cầm, mặt gương nứt một đường, viền chàm bạc.
Hình ảnh: Đã tích hợp icon

Tên: Tàn Nguyệt Phiến
Dấu hiệu nhận biết: Mảnh đá mỏng hình trăng khuyết màu bạc lam, mép vỡ, mặt phẳng ánh trăng.
Hình ảnh: Đã tích hợp icon

Tên: Tàn Niệm Ấn
Dấu hiệu nhận biết: Mảnh ngọc bia trắng ngà vỡ, trên mặt một phù văn trừu tượng sáng lục nhạt.
Hình ảnh: Đã tích hợp icon

Tên: Thiên Khuyết Thược
Dấu hiệu nhận biết: Chìa khóa cổ dài bằng vàng nhạt, đầu chìa hình đám mây, thân khảm một hạt ngọc lam.
Hình ảnh: Đã tích hợp icon

Tên: Thiết khoáng
Dấu hiệu nhận biết: Một khối thiết khoáng xám sẫm góc cạnh, có vân kim loại ánh lam.
Hình ảnh: Đã tích hợp icon

Tên: Thủ Hồn Đăng
Dấu hiệu nhận biết: Lồng đèn nhỏ bằng đồng xanh gỉ, bên trong đốm lửa hồn lục, quai cong.
Hình ảnh: Đã tích hợp icon

Tên: Thủ Tướng Ấn
Dấu hiệu nhận biết: Ấn tín bằng bạc xỉn, núm ấn hình trăng khuyết, mặt ấn quay nghiêng khuất.
Hình ảnh: Đã tích hợp icon

Tên: Thụ Yêu Chủng
Dấu hiệu nhận biết: Hạt cây to bằng nắm tay vỏ nâu sần, nứt một đường lộ mầm xanh lục sáng.
Hình ảnh: Đã tích hợp icon

Tên: Tị Lôi Phù
Dấu hiệu nhận biết: Lá bùa giấy vàng hình chữ nhật đứng, giữa vẽ một vòng tròn bao tia sét bị khóa bằng nét son trừu tượng, góc dưới buộc sợi chỉ lam.
Hình ảnh: Đã lập yêu cầu vẽ

Tên: Tiên Linh Đan
Dấu hiệu nhận biết: Đan đột phá. Viên đan trắng lục như ngọc trên đế ngọc nhỏ, ba vòng đan văn, hào quang trắng rất mỏng.
Hình ảnh: Đã tích hợp icon

Tên: Tiên Linh Ngọc
Dấu hiệu nhận biết: Miếng ngọc lục nhạt hình giọt nước, trong mờ, quầng sáng trắng rất mỏng sát mép.
Hình ảnh: Đã tích hợp icon

Tên: Tinh Thần Phiến
Dấu hiệu nhận biết: Mảnh sao rơi hình đa giác lệch màu chàm, mặt cắt lấm tấm điểm sáng vàng.
Hình ảnh: Đã tích hợp icon

Tên: Tụ Linh Đan
Dấu hiệu nhận biết: Viên đan lục nhạt trong một hộp gỗ nhỏ mở nắp, một vòng đan văn.
Hình ảnh: Đã tích hợp icon

Tên: Tướng Quân Kỳ
Dấu hiệu nhận biết: Lá cờ lệnh tam giác đỏ sẫm rách mép cuộn một phần quanh cán gãy, hoa văn trơn.
Hình ảnh: Đã tích hợp icon

Tên: Vấn Đỉnh Đan
Dấu hiệu nhận biết: Đan đột phá. Viên đan chàm sẫm điểm vàng trên đế ngọc nhỏ, ba vòng đan văn, đỉnh viên đan có một điểm sáng.
Hình ảnh: Đã tích hợp icon

Tên: Vấn Tâm Thạch
Dấu hiệu nhận biết: Viên đá xám tròn nhẵn như đá suối, giữa có một lỗ thủng tròn nhìn xuyên qua.
Hình ảnh: Đã tích hợp icon

Tên: Xà Mẫu Lân
Dấu hiệu nhận biết: Một chiếc vảy rắn lớn trắng lam hình khiên, mép trong suốt như băng.
Hình ảnh: Đã tích hợp icon

Tên: Xích Sa
Dấu hiệu nhận biết: Túi vải nhỏ mở miệng đựng cát đỏ gạch, vài hạt sáng cam như than hồng rơi ra.
Hình ảnh: Đã tích hợp icon

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Chiêu thức và kỹ năng pháp bảo

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Màu và hình giúp đọc nhanh bộ kỹ năng. Hồn Ấn có ngọn lửa xanh trong vòng tròn, Phá Trận Quyền là nắm đấm xuyên khiên, còn Thiên Lôi Giáng là cột sét từ trên cao.

26 biểu tượng chiêu thức

Tên: Cấm Ấn
Dấu hiệu nhận biết: Lá bùa giấy vàng dán chéo, trên bùa một vòng phong ấn đỏ son trừu tượng.

Tên: Chấn Sơn
Dấu hiệu nhận biết: Bàn chân dậm xuống đất, mặt đất nứt tỏa ra ba đường và đá bật lên.

Tên: Dẫn Điện
Dấu hiệu nhận biết: Ba điểm sáng nối với nhau bằng dây sét mảnh thành hình tam giác.

Tên: Dẫn Hồn
Dấu hiệu nhận biết: Bàn tay mảnh dẫn một đốm hồn lục nhạt có đuôi dài uốn lượn.

Tên: Đòn đánh cơ bản
Dấu hiệu nhận biết: Một đường chém đơn ngắn màu trắng ngà.

Tên: Hộ Mạch
Dấu hiệu nhận biết: Dáng người ngồi thiền tối giản, kinh mạch sáng lục chạy dọc thân.

Tên: Hồi Phong
Dấu hiệu nhận biết: Một vòng kiếm quang quét ngang hình lưỡi liềm rộng, gợi gió xoáy gợi đòn diện rộng.

Tên: Hồn Ấn
Dấu hiệu nhận biết: Dấu ấn tròn màu lục lam có hình ngọn lửa hồn ở giữa, in chìm lên nền tối.

Tên: Hồn Bạo
Dấu hiệu nhận biết: Đốm hồn nổ tung thành vòng sáng lục trắng với các mảnh hồn văng ra.

Tên: Kiếm Ấn
Dấu hiệu nhận biết: Một dấu ấn hình mũi kiếm khắc trong vòng tròn mảnh, phát sáng ngọc để đánh dấu mục tiêu.

Tên: Liên Hoàn Cấm
Dấu hiệu nhận biết: Ba lá bùa nối nhau bằng xích sáng thành vòng.

Tên: Lôi Tiễn
Dấu hiệu nhận biết: Một mũi tên bằng sét lam trắng bay chéo, đuôi phân nhánh ngắn.

Tên: Lôi Võng
Dấu hiệu nhận biết: Tấm lưới sét mắt cáo chụp xuống, các nút lưới sáng.

Tên: Nhất Tuyến Trảm
Dấu hiệu nhận biết: Một đường chém thẳng, sáng trắng ngà viền đỏ son rất mảnh gợi đòn kết liễu.

Tên: Nhiếp Phách
Dấu hiệu nhận biết: Bàn tay ma nắm chặt, giữa các ngón rò rỉ khói hồn bị bóp nghẹt.

Tên: Phá Cấm Bạo
Dấu hiệu nhận biết: Vòng trận pháp vỡ tung từ tâm, mảnh bùa cháy bay ra.

Tên: Phá Giáp
Dấu hiệu nhận biết: Mũi kiếm đâm vỡ một tấm giáp đá, mảnh vỡ bật ra gợi phá phòng ngự.

Tên: Phá Trận Quyền
Dấu hiệu nhận biết: Nắm đấm bọc sáng vàng cổ đấm vỡ một tấm khiên tròn.

Tên: Phản Chấn
Dấu hiệu nhận biết: Tấm khiên tròn có gai, một mũi tên đập vào bật ngược lại.

Tên: Phi Kiếm
Dấu hiệu nhận biết: Một thanh phi kiếm bạc ngọc lao chéo từ trái dưới lên phải trên, một vệt kiếm khí đơn rõ phía sau.

Tên: Phong Mạch
Dấu hiệu nhận biết: Hai sợi xích sáng lam bắt chéo khóa một điểm sáng ở giữa.

Tên: Thiên Lôi Giáng
Dấu hiệu nhận biết: Một cột sét lớn giáng thẳng từ mây xuống, chân cột tóe sáng.

Tên: Thiết Cốt
Dấu hiệu nhận biết: Cánh tay gập khoe cơ, bên trong thấy khung xương bằng sắt xám ánh kim.

Tên: Tĩnh Điện Hộ Thể
Dấu hiệu nhận biết: Quả cầu khiên trong suốt lam nhạt, mặt ngoài chạy các tia điện nhỏ.

Tên: Tụ Linh Trận
Dấu hiệu nhận biết: Trận đồ tròn nhìn hơi nghiêng với bốn cờ nhỏ ở bốn góc, linh khí bốc lên từ tâm.

Tên: U Ảnh
Dấu hiệu nhận biết: Bóng người mờ màu chàm bám sau lưng một hình người nhỏ sáng hơn.

5 kỹ năng pháp bảo

Tên kỹ năng: Dẫn Hồn Chiếu
Dấu hiệu nhận biết: Chiếc đèn lồng ở tâm tỏa các đốm hồn lục lam bay ra theo vòng xoáy.
Hình ảnh: Đã lập yêu cầu vẽ

Tên kỹ năng: Kiếm Hoàn Trảm
Dấu hiệu nhận biết: Vòng tròn gồm nhiều lưỡi kiếm sáng lam tỏa ra từ một quả cầu nhỏ ở tâm.
Hình ảnh: Đã tích hợp icon

Tên kỹ năng: Lôi Châu Chấn
Dấu hiệu nhận biết: Viên châu tím ở tâm phóng các nhánh sét ra tám hướng.
Hình ảnh: Đã tích hợp icon

Tên kỹ năng: Trấn Ấn
Dấu hiệu nhận biết: Chiếc ấn vuông đen khổng lồ giáng thẳng từ trên xuống, bên dưới vòng chấn động vàng cổ.
Hình ảnh: Đã tích hợp icon

Tên kỹ năng: Trận Bàn Phong Cấm
Dấu hiệu nhận biết: Đĩa trận chín ô phóng chín sợi xích sáng tỏa ra khóa xuống.
Hình ảnh: Đã lập yêu cầu vẽ

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Nội tại, ý cảnh và trạng thái chiến đấu

Hồ sơ hình ảnh · Sổ hình ảnh tích hợp

Một số tên xuất hiện ở cả nút thi triển lẫn thanh trạng thái. Chẳng hạn, Tụ Linh Trận dùng hình bốn lá cờ trên nút thi triển và hình mũi tên hướng lên ở biểu tượng trạng thái.

15 nội tại

Tên: Âm Hồn
Dấu hiệu nhận biết: Vầng trăng khuyết tối ôm một đốm hồn nhỏ.

Tên: Bất Động
Dấu hiệu nhận biết: Ngọn núi đá vững chãi, quanh chân núi gió và sóng rẽ sang hai bên.

Tên: Cấm Văn
Dấu hiệu nhận biết: Ngòi bút lông vẽ dở một vòng phong ấn đỏ son.

Tên: Cố Trận
Dấu hiệu nhận biết: Bốn cọc đá cắm quanh một nền vuông, nối nhau bằng tường sáng mỏng.

Tên: Cường Thể
Dấu hiệu nhận biết: Thân trên cơ bắp cách điệu màu đồng với quầng đỏ son ấm ở ngực.

Tên: Dư Chấn
Dấu hiệu nhận biết: Vòng chấn động đồng tâm lan ra từ một điểm nứt, vòng ngoài vỡ thành mảnh.

Tên: Hồn Lực
Dấu hiệu nhận biết: Ngọn lửa hồn lục lam cháy ổn định trong lòng hai bàn tay khum.

Tên: Kiếm Tâm
Dấu hiệu nhận biết: Một thanh kiếm thẳng đứng xuyên qua vòng tròn sáng, mũi kiếm lóe.

Tên: Kiếm Thể
Dấu hiệu nhận biết: Bóng người ngồi tĩnh tọa, một thanh kiếm dựng thẳng trùng với sống lưng gợi thân thể hòa với kiếm.

Tên: Lôi Tâm
Dấu hiệu nhận biết: Trái tim cách điệu bằng ngọc tím với một tia sét xuyên giữa.

Tên: Phản Kích
Dấu hiệu nhận biết: Bốn vạch chém xếp hàng, vạch thứ tư lớn và sáng vàng hơn hẳn.

Tên: Tật Phong
Dấu hiệu nhận biết: Ba vệt gió cong song song cuốn theo một chiếc lá.

Tên: Trận Tâm
Dấu hiệu nhận biết: La bàn trận pháp tròn nhiều vòng đồng tâm, tâm là một hạt ngọc lam.

Tên: Truy Hồn
Dấu hiệu nhận biết: Mũi kim dài kéo theo sợi chỉ sáng lục xuyên qua một đốm hồn.

Tên: Tụ Điện
Dấu hiệu nhận biết: Bình gốm cổ thắt eo chứa đầy tia sáng lam xoáy.

Bốn ý cảnh

Tên: Chân Giả ý cảnh
Dấu hiệu nhận biết: Hai khuôn mặt nạ chồng lệch, một đặc một trong suốt, cùng một đường nét.

Tên: Nhân Quả ý cảnh
Dấu hiệu nhận biết: Hai vòng khuyên móc vào nhau, một sáng một tối, một sợi chỉ đỏ mảnh xuyên qua cả hai.

Tên: Sát Lục ý cảnh
Dấu hiệu nhận biết: Lưỡi kiếm đỏ sẫm dựng đứng, quanh là mười vệt khí đỏ xếp thành vầng.

Tên: Sinh Tử ý cảnh
Dấu hiệu nhận biết: Vòng tròn chia đôi. Nửa là cành non nở hoa, nửa là cành khô trơ. Hai nửa nối liền thành một cành.

23 biểu tượng trạng thái

Tên: Ảo ảnh
Dấu hiệu nhận biết: Hai bóng người chồng lệch nhau, một nét liền một nét đứt.

Tên: Cấm Ấn
Dấu hiệu nhận biết: Lá bùa chữ nhật đứng có một vòng tròn ở giữa.

Tên: Cấm kỹ năng
Dấu hiệu nhận biết: Hình môi khép với một vạch chéo đè lên.

Tên: Chảy máu
Dấu hiệu nhận biết: Một giọt máu đỏ son với vết cắt chéo.

Tên: Choáng
Dấu hiệu nhận biết: Ba ngôi sao nhỏ xoay vòng.

Tên: Cuồng nộ
Dấu hiệu nhận biết: Đầu sói há miệng với hai vệt đỏ.

Tên: Dấu kiếm
Dấu hiệu nhận biết: Dấu mũi kiếm nhỏ trong vòng tròn.

Tên: Đóng băng
Dấu hiệu nhận biết: Bông tuyết sáu cánh nét dày màu lam trắng.

Tên: Hồi phục
Dấu hiệu nhận biết: Một mầm lá với dấu cộng nhỏ.

Tên: Hồn Ấn
Dấu hiệu nhận biết: Đốm lửa hồn nằm trong một vòng tròn.

Tên: Khiên
Dấu hiệu nhận biết: Tấm khiên tròn nguyên vẹn màu ngọc.

Tên: Làm chậm
Dấu hiệu nhận biết: Bàn chân bị sợi tơ quấn.

Tên: Nghiệp
Dấu hiệu nhận biết: Hai vòng khuyên móc vào nhau.

Tên: Nhiễm điện
Dấu hiệu nhận biết: Tia sét gãy khúc hình chữ Z.

Tên: Phá giáp
Dấu hiệu nhận biết: Tấm khiên nứt đôi.

Tên: Phản Chấn
Dấu hiệu nhận biết: Khiên tròn có bốn gai nhọn chĩa ra.

Tên: Sát khí
Dấu hiệu nhận biết: Lưỡi kiếm ngắn với ba vệt khí bốc lên.

Tên: Suy hồn
Dấu hiệu nhận biết: Đốm lửa hồn rũ xuống với mũi tên chỉ xuống.

Tên: Thiết Cốt
Dấu hiệu nhận biết: Khúc xương chéo bằng kim loại có ánh sáng ở khớp.

Tên: Thiêu đốt
Dấu hiệu nhận biết: Ngọn lửa ba lưỡi cam đỏ.

Tên: Tĩnh điện
Dấu hiệu nhận biết: Vòng tròn khiên với hai tia điện nhỏ bên trong.

Tên: Tụ Linh Trận
Dấu hiệu nhận biết: Vòng trận pháp tròn với mũi tên chỉ lên ở tâm.

Tên: U Ảnh
Dấu hiệu nhận biết: Bóng ma nhỏ có hai mắt tròn và đuôi nhọn.

Tài liệu đối chiếu
Sổ hình ảnh · trạng thái của từng asset

Chuyên mục Sự kiện

Ngoại trang, nhiệm vụ và bảng thưởng trong thiết kế.

36 ngoại trang và năm bộ chỉ số

Thiết kế sự kiện · Sự kiện & ngoại trang V3

Bản thiết kế sự kiện ngày 15/10/2026 sửa 24 ngoại trang V2 và thêm 12 ngoại trang nữ của bảy nhân vật. Chỉ bộ đang mặc cho chỉ số. Sở hữu thêm ngoại trang để đổi cách chơi hoặc diện mạo.

Năm bộ chỉ số

Bộ chỉ số: Nghịch Mệnh
Tác dụng khi mặc: Công +3% · sinh lực tối đa +2%

Bộ chỉ số: Hộ Đạo
Tác dụng khi mặc: Sinh lực tối đa +4% · phòng ngự +4%

Bộ chỉ số: Phá Chướng
Tác dụng khi mặc: Công +2% · phòng ngự +4%

Bộ chỉ số: Dưỡng Nguyên
Tác dụng khi mặc: Sinh lực tối đa +4% · linh lực tối đa trong trận +4%

Bộ chỉ số: Linh Động
Tác dụng khi mặc: Công +2% · sinh lực tối đa +2% · linh lực tối đa trong trận +2%

Giả sử tu sĩ có 1.000 công và 10.000 sinh lực trước khi mặc, bộ Nghịch Mệnh cho 1.030 công và 10.200 sinh lực. Các ngoại trang trong tủ, danh hiệu, khung, hào quang và lớp thay hình linh thú hay pháp bảo không cộng tiếp. Mộng Hồi Vân Uyển và Hành Trình Nghịch Mệnh dùng chỉ số mượn chuẩn hóa.

24 ngoại trang V2 theo cập nhật chỉ số V3

Ngoại trang: Tàng Phong Du Sĩ
Bộ chỉ số: Nghịch Mệnh
Nguồn nhận theo thiết kế: hoàn chuỗi Kiếm tu Nguyên Anh

Ngoại trang: Đoạn Giới Kiếm Quân
Bộ chỉ số: Nghịch Mệnh
Nguồn nhận theo thiết kế: hoàn Đoạn Giới Kiếm Trủng lần đầu ở độ khó chuẩn

Ngoại trang: Ngự Lôi Thanh Y
Bộ chỉ số: Phá Chướng
Nguồn nhận theo thiết kế: hoàn công pháp Ngự Lôi

Ngoại trang: Cửu Kiếp Lôi Tôn
Bộ chỉ số: Phá Chướng
Nguồn nhận theo thiết kế: vượt thử thách lôi ba cơ chế

Ngoại trang: Huyền Cốt Hành Giả
Bộ chỉ số: Hộ Đạo
Nguồn nhận theo thiết kế: hoàn ba bài luyện thể Nguyên Anh

Ngoại trang: Cổ Diệu Chiến Y
Bộ chỉ số: Hộ Đạo
Nguồn nhận theo thiết kế: hoàn Cổ Diệu Phế Thành và nhiệm vụ bộ Cổ Diệu

Ngoại trang: Tịch Hồn Đăng Khách
Bộ chỉ số: Linh Động
Nguồn nhận theo thiết kế: hoàn chuỗi khế hồn tự nguyện

Ngoại trang: Vô Sinh Huyền Y
Bộ chỉ số: Linh Động
Nguồn nhận theo thiết kế: hoàn Vô Sinh Mộng Vực và hồ sơ Tịch Diệt

Ngoại trang: Thiên Văn Bút Sĩ
Bộ chỉ số: Dưỡng Nguyên
Nguồn nhận theo thiết kế: giải sáu phòng Vạn Cấm Lưu Lang

Ngoại trang: Vạn Giới Trận Chủ
Bộ chỉ số: Dưỡng Nguyên
Nguồn nhận theo thiết kế: hoàn Quy Tắc Thiên Cung và nghiên cứu cấm chế

Ngoại trang: Cổ Mạch Sơ Tỉnh
Bộ chỉ số: Hộ Đạo
Nguồn nhận theo thiết kế: đạt Cổ Thần 1 sao

Ngoại trang: Thiên Trụ Hộ Y
Bộ chỉ số: Hộ Đạo
Nguồn nhận theo thiết kế: đạt Cổ Thần 4 sao

Ngoại trang: Thất Diệu Cổ Thể
Bộ chỉ số: Phá Chướng
Nguồn nhận theo thiết kế: đạt Cổ Thần 7 sao

Ngoại trang: Cửu Tinh Quy Nguyên
Bộ chỉ số: Phá Chướng
Nguồn nhận theo thiết kế: đạt Cổ Thần 9 sao

Ngoại trang: Nguyên Tiêu Đăng Y
Bộ chỉ số: Linh Động
Nguồn nhận theo thiết kế: đổi điểm hoạt động Nguyên Tiêu

Ngoại trang: Thanh Minh Sơn Hành
Bộ chỉ số: Dưỡng Nguyên
Nguồn nhận theo thiết kế: hoàn nhật ký Sơn Hành theo mùa

Ngoại trang: Trung Thu Nguyệt Bạch
Bộ chỉ số: Dưỡng Nguyên
Nguồn nhận theo thiết kế: đổi điểm hoạt động Trung Thu

Ngoại trang: Đông Chí Hàn Mai
Bộ chỉ số: Hộ Đạo
Nguồn nhận theo thiết kế: hoàn hoạt động giữ lửa mùa đông

Ngoại trang: Thủ Thành Huyền Giáp
Bộ chỉ số: Hộ Đạo
Nguồn nhận theo thiết kế: tham gia đủ 3 vòng chiến tông môn, không cần đứng top

Ngoại trang: Phá Trận Tiên Phong
Bộ chỉ số: Phá Chướng
Nguồn nhận theo thiết kế: đạt 30 điểm đóng góp mùa bằng nhiệm vụ hợp lệ

Ngoại trang: Tinh Lộ Quân Sư
Bộ chỉ số: Linh Động
Nguồn nhận theo thiết kế: hoàn 10 nhiệm vụ chiến thuật mùa

Ngoại trang: Vệ Đạo Tông Chủ
Bộ chỉ số: Nghịch Mệnh
Nguồn nhận theo thiết kế: đổi 300 huy hiệu mùa · mọi vai trò đều mua được

Ngoại trang: Một Đời Áo Vải
Bộ chỉ số: Dưỡng Nguyên
Nguồn nhận theo thiết kế: hoàn đủ ba hồi chương hóa phàm

Ngoại trang: Vương Lâm · Nghịch Mệnh
Bộ chỉ số: Nghịch Mệnh
Nguồn nhận theo thiết kế: duy nhất hoạt động Hành Trình Nghịch Mệnh · 500 điểm sự kiện, không bán trực tiếp

12 ngoại trang nữ của V3

Ngoại trang: Lý Mộ Uyển · Nhất Niệm Tương Phùng
Bộ chỉ số: Nghịch Mệnh
Nguồn nhận: 500 điểm Đồng Tâm từ Mộng Hồi Vân Uyển · không trong vòng quay, đấu giá, quà nạp hay shop linh thạch.

Ngoại trang: Hồng Điệp · Chu Tước Hồng Liên
Bộ chỉ số: Phá Chướng
Nguồn nhận: 300 điểm Chu Tước trong Chu Tước Hồng Liên.

Ngoại trang: Liễu Mi · Thiên Huyễn Nguyệt Sa
Bộ chỉ số: Linh Động
Nguồn nhận: 250 điểm Kính Tâm trong Huyễn Kính Vấn Tâm.

Ngoại trang: Mộc Băng Mi · Thanh Sương Thánh Y
Bộ chỉ số: Hộ Đạo
Nguồn nhận: 250 điểm Kính Tâm trong Huyễn Kính Vấn Tâm.

Ngoại trang: Lý Thiến Mai · Lam Điệp Vấn Đạo
Bộ chỉ số: Dưỡng Nguyên
Nguồn nhận: 220 điểm Hộ Đạo trong Vân Hải Hộ Đạo.

Ngoại trang: Tây Tử Phượng · Tinh Dạ Đồng Hành
Bộ chỉ số: Linh Động
Nguồn nhận: 220 điểm Hộ Đạo trong Vân Hải Hộ Đạo.

Ngoại trang: Lý Mộ Uyển · Đan Tâm Thanh Y
Bộ chỉ số: Dưỡng Nguyên
Nguồn nhận: 200 điểm Đan Hội trong Đan Hội Vân Tông.

Ngoại trang: Lữ Yên Phi · Vân Hải Trường Ca
Bộ chỉ số: Phá Chướng
Nguồn nhận: 200 điểm Đan Hội trong Đan Hội Vân Tông.

Ngoại trang: Liễu Mi · Nguyệt Ảnh Lưu Ly
Bộ chỉ số: Linh Động
Nguồn nhận: Thiên Cơ Bảo Luân: rơi 0,50% mỗi lượt hoặc đổi 80 Bảo Ấn.

Ngoại trang: Mộc Băng Mi · Hàn Cung Tịnh Nguyệt
Bộ chỉ số: Hộ Đạo
Nguồn nhận: Thiên Cơ Bảo Luân: rơi 0,50% mỗi lượt hoặc đổi 80 Bảo Ấn.

Ngoại trang: Lý Thiến Mai · Lam Mộng Tinh Hà
Bộ chỉ số: Dưỡng Nguyên
Nguồn nhận: Thiên Cơ Bảo Luân: rơi 0,50% mỗi lượt hoặc đổi 80 Bảo Ấn.

Ngoại trang: Hồng Điệp · Xích Diễm Thiên Vũ
Bộ chỉ số: Phá Chướng
Nguồn nhận: Thiên Cơ Bảo Luân: rơi 0,50% mỗi lượt hoặc đổi 80 Bảo Ấn.

Tài liệu đối chiếu
Tiên Nghịch V3 · sự kiện, ngoại trang và vòng quay

Sáu sự kiện V3 và hai hành trình độc quyền

Thiết kế sự kiện · Sự kiện & ngoại trang V3

Các cửa sổ dưới đây tính từ khi từng đợt được mở trên world. Đây là độ dài của thiết kế, không phải lịch chạy trong tháng. Người chơi từ Trúc Cơ có thể tham gia.

Sổ sự kiện

Sự kiện · bản đồ: Mộng Hồi Vân Uyển · Vân Uyển Mộng Cảnh
Thời lượng · cửa đổi: 14 ngày + 7 ngày đổi
Cách kiếm lượt và điểm: 7 chương × 30 +7 bài luyện × 20 · nhiệm vụ ngày chọn 1 trong 3, 15 điểm, tính nhiều nhất một nhiệm vụ/ngày.
Đổi trang phục: Lý Mộ Uyển · Nhất Niệm Tương Phùng — 500 Đồng Tâm

Sự kiện · bản đồ: Chu Tước Hồng Liên · Hồng Liên Đấu Đài
Thời lượng · cửa đổi: 7 ngày + 7 ngày đổi
Cách kiếm lượt và điểm: 10 bậc vượt lần đầu × 15 điểm · 2 lượt thử luyện/ngày × 25 điểm khi thắng. Luyện lại vô thưởng không mất lượt.
Đổi trang phục: Hồng Điệp · Chu Tước Hồng Liên — 300 Chu Tước

Sự kiện · bản đồ: Huyễn Kính Vấn Tâm · Thiên Huyễn Kính Các
Thời lượng · cửa đổi: 10 ngày + 7 ngày đổi
Cách kiếm lượt và điểm: Vượt lần đầu cả tuyến thưởng 60 điểm · mỗi run hoàn thành 30 điểm, 2 run miễn phí/ngày. Mỗi run chọn một trong hai tuyến, không nhân thưởng bằng đổi nhánh.
Đổi trang phục: Liễu Mi · Thiên Huyễn Nguyệt Sa — 250 Kính Tâm, Mộc Băng Mi · Thanh Sương Thánh Y — 250 Kính Tâm

Sự kiện · bản đồ: Vân Hải Hộ Đạo · Vân Hải Cổ Độ
Thời lượng · cửa đổi: 7 ngày + 7 ngày đổi
Cách kiếm lượt và điểm: 3 trận/ngày, 20 điểm/trận đủ điều kiện · 3/9/15 trận đạt mốc cộng 20/40/60. Điểm skin không phụ thuộc boss chung có chết.
Đổi trang phục: Lý Thiến Mai · Lam Điệp Vấn Đạo — 220 Hộ Đạo, Tây Tử Phượng · Tinh Dạ Đồng Hành — 220 Hộ Đạo

Sự kiện · bản đồ: Đan Hội Vân Tông · Vân Tông Đan Viện
Thời lượng · cửa đổi: 7 ngày + 7 ngày đổi
Cách kiếm lượt và điểm: 5 đề thi đầu × 30 điểm · 2 lượt hộ dược/ngày × 25 điểm. Không tiêu linh dược hiếm bắt buộc đột phá · không xây linh điền thứ hai.
Đổi trang phục: Lý Mộ Uyển · Đan Tâm Thanh Y — 200 Đan Hội, Lữ Yên Phi · Vân Hải Trường Ca — 200 Đan Hội

Sự kiện · bản đồ: Thiên Cơ Bảo Luân · Thiên Cơ Trân Các
Thời lượng · cửa đổi: 7 ngày + 7 ngày đổi
Cách kiếm lượt và điểm: 4 nhiệm vụ một lần mỗi run, mỗi nhiệm vụ 2 vé · mỗi vé cũng được một Bảo Ấn và một kết quả ngẫu nhiên.
Đổi trang phục: Liễu Mi · Nguyệt Ảnh Lưu Ly — 80 Bảo Ấn, Mộc Băng Mi · Hàn Cung Tịnh Nguyệt — 80 Bảo Ấn, Lý Thiến Mai · Lam Mộng Tinh Hà — 80 Bảo Ấn, Hồng Điệp · Xích Diễm Thiên Vũ — 80 Bảo Ấn

Hành Trình Nghịch Mệnh là sự kiện riêng từ V2 cho Vương Lâm · Nghịch Mệnh. Bảy chương gồm Người thiếu niên chọn đường, Một lời hứa giữa phàm trần, Kiếm ý trong cơn mưa, Bóng hồn không xiềng xích, Dấu sao trên cổ thể, Một niệm sinh tử và Tự bước qua cửa đạo. Sau mỗi lần vượt đầu, chương cho 30 điểm, bài luyện cho 20 điểm.

Hành Trình Nghịch Mệnh cùng Mộng Hồi Vân Uyển có cấu trúc 14 ngày, bảy ngày đổi sau khi kết thúc. Làm đủ bảy chương và bảy bài luyện được 350 điểm. Thêm mười nhiệm vụ ngày × 15 điểm là đủ 500 để lấy trang phục tương ứng. Có thể đạt tối đa 560 điểm miễn phí mỗi đợt. Vương Lâm · Nghịch Mệnh và Lý Mộ Uyển · Nhất Niệm Tương Phùng chỉ lấy ở hai sự kiện riêng.

Các hồi Mộng Hồi Vân Uyển và bài luyện tương ứng

Hồi: Dấu Hương Trong Sương
Biến cố và lựa chọn: Dược viên bị bóng mộng nuốt mất lối về · một đan bình còn giữ dấu linh tức. · Theo dấu dược hương / Theo dấu chân người giữ vườn
Mục tiêu thắng: Giữ đan bình không vỡ, hạ boss trong 120 giây.
Bài luyện: Đổi mục tiêu

Hồi: Lửa Đan Không Tắt
Biến cố và lựa chọn: Hai lò bị nối bằng cấm tuyến, tắt cả hai khiến dược linh tan. · Giữ lò trái / Giữ lò phải
Mục tiêu thắng: Ngắt ít nhất 2 lần tích lửa và kết thúc trước 120 giây.
Bài luyện: Ngắt niệm

Hồi: Hai Bóng Cùng Một Lời
Biến cố và lựa chọn: Kính mộng dựng hai ký ức khác nhau · không nhánh nào tự nhận là nguyên tác. · Tin vào vật chứng / Tin vào chuỗi hành động
Mục tiêu thắng: Đánh đúng ảnh thật theo auto target rule và phá lõi.
Bài luyện: Phá huyễn

Hồi: Giữ Một Mạch Sống
Biến cố và lựa chọn: Dược linh cạn khí · phải chia linh lực giữa tiến công và bảo hộ. · Bảo vệ mạch chính / Chia dòng dưỡng khí
Mục tiêu thắng: Mục tiêu bảo hộ còn sống khi hết 90 giây hoặc boss bị hạ.
Bài luyện: Bảo hộ

Hồi: Qua Bờ Chấp Niệm
Biến cố và lựa chọn: Hồn ảnh níu ký ức thành xiềng · cứu giúp không đòi thu phục NPC có tên. · Tháo từng khế / Phá cột neo
Mục tiêu thắng: Gỡ đủ 3 dấu/neo rồi hạ bóng mộng.
Bài luyện: Thanh tẩy

Hồi: Giữa Lửa Và Tro
Biến cố và lựa chọn: Một cơn cháy chỉ là phép thử trong mộng, không phá linh điền thật. · Dẫn lửa ra vòng ngoài / Ép lửa về lõi
Mục tiêu thắng: Thắng sau hai pha lửa · lựa chọn chỉ đổi cơ chế, không đổi điểm.
Bài luyện: Giữ linh lực

Hồi: Nhất Niệm Tương Phùng
Biến cố và lựa chọn: Người chơi chọn cách buông bỏ mê chướng · kết thúc trao ngoại hình, không cưới một NPC mới. · Giữ lời hẹn / Bước tiếp cùng ký ức
Mục tiêu thắng: Vượt cả ba pha trong 180 giây · xem hồi tưởng, nhận quyền đổi skin khi đủ 500 điểm.
Bài luyện: Tổng hợp đạo tâm

Boss sự kiện

Boss: Dược Sát Trùng Vương
Sự kiện: Mộng Hồi Vân Uyển
Cơ chế · cách xử lý: Mỗi 12 giây đẻ 2 ấu trùng · sát thương diện rộng hoặc ưu tiên ấu trùng làm mất khiên boss.

Boss: Cấm Đăng Thủ Vệ
Sự kiện: Mộng Hồi Vân Uyển
Cơ chế · cách xử lý: Chu kỳ 15 giây đổi giữa khiên và tích lửa · ngắt niệm 3 giây để tránh đợt lửa.

Boss: Song Ảnh Tâm Ma
Sự kiện: Mộng Hồi Vân Uyển
Cơ chế · cách xử lý: Hai mục tiêu cùng hiện · đánh ảnh giả 3 lần tạo khiên boss, dấu thật được công khai bằng icon.

Boss: Hàn Tủy Dược Linh
Sự kiện: Mộng Hồi Vân Uyển
Cơ chế · cách xử lý: Mỗi 18 giây hút 20% MP hiện tại · khiển kỹ năng sau lượt hút và giữ lá chắn cho mục tiêu.

Boss: Phệ Hồn Mộng Ảnh
Sự kiện: Mộng Hồi Vân Uyển
Cơ chế · cách xử lý: Dấu hồn cộng tối đa 3 · giải dấu hoặc hạ neo làm boss lộ lõi 5 giây.

Boss: Tàn Hỏa Đan Vệ
Sự kiện: Mộng Hồi Vân Uyển
Cơ chế · cách xử lý: HP 60% và 30% gọi cột lửa · cấm vòng lặp phản sát thương, trần DOT 3 lớp.

Boss: Tâm Chướng Vô Thanh
Sự kiện: Mộng Hồi Vân Uyển
Cơ chế · cách xử lý: 3 pha 70%/35%: soi ảnh, hút linh lực, bộc phát · mỗi pha có dấu nhận biết và cửa phản ứng.

Boss: Xích Dực Kiếp Linh
Sự kiện: Chu Tước Hồng Liên
Cơ chế · cách xử lý: Ba nhịp: giáp cánh ở 70% HP · tắt ba hỏa ấn ở 40% · đòn quạt cánh báo trước 3 giây.

Boss: Thiên Diện Kính Chủ
Sự kiện: Huyễn Kính Vấn Tâm
Cơ chế · cách xử lý: Mỗi 15 giây đổi giữa ảnh thật mang phù ngọc và gương phản · phá gương đúng mở 6 giây yếu điểm.

Boss: Vân Hải Phệ Tinh Thú
Sự kiện: Vân Hải Hộ Đạo
Cơ chế · cách xử lý: Ba pha chung 70%/35% · mỗi phiên 90 giây ghi damage theo phase snapshot · đòn hút MP báo trước 3 giây, phá tinh thể chặn.

Boss: Ôn Sát Dược Yêu
Sự kiện: Đan Hội Vân Tông
Cơ chế · cách xử lý: Cứ 20 giây gọi một bào tử ưu tiên đánh lò · hạ bào tử hoặc dùng khiên cho lò. Boss yếu khi ba bào tử bị ngăn.

Chu Tước Hồng Liên · mười bậc đài

Bậc: 1
Bài học: Nhận biết đòn báo trước
Điểm vượt lần đầu: 15

Bậc: 2
Bài học: Đổi mục tiêu hỏa ấn
Điểm vượt lần đầu: 15

Bậc: 3
Bài học: Phá khiên cánh
Điểm vượt lần đầu: 15

Bậc: 4
Bài học: Giữ MP qua đợt hút
Điểm vượt lần đầu: 15

Bậc: 5
Bài học: Giải một lớp thiêu
Điểm vượt lần đầu: 15

Bậc: 6
Bài học: Hai hỏa ấn đổi chỗ
Điểm vượt lần đầu: 15

Bậc: 7
Bài học: Phòng thủ nhịp quạt
Điểm vượt lần đầu: 15

Bậc: 8
Bài học: Đánh lõi sau ngắt
Điểm vượt lần đầu: 15

Bậc: 9
Bài học: Ba cơ chế xen nhau
Điểm vượt lần đầu: 15

Bậc: 10
Bài học: Vượt Xích Dực đủ hai pha
Điểm vượt lần đầu: 15

Huyễn Kính Vấn Tâm · sáu phòng

Phòng: Tiền Sảnh
Lựa chọn: Phá gương trái / Phá gương phải
Kết quả: Chọn buff khiên 8% H hoặc hồi 8% MP · không đổi thưởng

Phòng: Hành Lang Hai Bóng
Lựa chọn: Theo dấu trên ngọc / Theo dấu chân
Kết quả: Chọn cách hiển thị ảnh thật ở phòng 5, lưu vào run

Phòng: Tĩnh Kính Đài
Lựa chọn: Nghỉ hồi 25% HP / Khôi phục 25% MP
Kết quả: Chỉ chọn một, không rời run để lấy cả hai

Phòng: Lời Khế Không Chủ
Lựa chọn: Gỡ từng khế / Phá cột neo
Kết quả: Đổi đối tượng ưu tiên và số lớp dấu trong boss

Phòng: Thiên Diện Nội Điện
Lựa chọn: Đánh ảnh thật / Dùng cấm trận phá gương
Kết quả: Phải thắng boss · đường đi trước đó quyết định telegraph

Phòng: Minh Tâm Trân Các
Lựa chọn: Nhận điểm Kính Tâm / Xem lại nhật ký rồi nhận
Kết quả: Hai nút dùng cùng entitlement · chỉ cộng 30 điểm một lần

Vân Hải Hộ Đạo dùng boss chung Vân Hải Phệ Tinh Thú. Một lượt có đóng góp đạt điều kiện kéo dài 60 giây, hoặc boss chết sớm và người chơi đã tạo tác động có ích. Sau khi boss chết, tàn ảnh cho phép lấy điểm cá nhân.

Đan Hội Vân Tông · năm đề thi

Đề thi: Giữ Lửa
Yêu cầu: Giữ HP lò trên 40% qua 60 giây · khiên có cooldown
Điểm vượt lần đầu: 30

Đề thi: Dẫn Khí
Yêu cầu: Cân bằng dùng MP: không cạn MP trong 15 giây cuối
Điểm vượt lần đầu: 30

Đề thi: Trừ Sát
Yêu cầu: Ưu tiên ba bào tử theo dấu, tránh đánh lò mồi
Điểm vượt lần đầu: 30

Đề thi: An Dược
Yêu cầu: Giải dấu ôn sát trước đủ ba lớp
Điểm vượt lần đầu: 30

Đề thi: Hợp Đan
Yêu cầu: Vượt boss với ba nhịp tổng hợp · không tiêu nguyên liệu chế tạo thật
Điểm vượt lần đầu: 30

Lộ trình miễn phí nếu đã làm đủ phần điểm cố định

Hoạt động: Mộng Hồi Vân Uyển
Tối đa mỗi đợt: 560 Đồng Tâm
Số ngày cần để lấy đủ ngoại trang chính: 10

Hoạt động: Chu Tước Hồng Liên
Tối đa mỗi đợt: 500 Chu Tước
Số ngày cần để lấy đủ ngoại trang chính: 3

Hoạt động: Huyễn Kính Vấn Tâm
Tối đa mỗi đợt: 660 Kính Tâm
Số ngày cần để lấy đủ ngoại trang chính: 8

Hoạt động: Vân Hải Hộ Đạo
Tối đa mỗi đợt: 540 Hộ Đạo
Số ngày cần để lấy đủ ngoại trang chính: 6

Hoạt động: Đan Hội Vân Tông
Tối đa mỗi đợt: 500 Đan Hội
Số ngày cần để lấy đủ ngoại trang chính: 5

Tài liệu đối chiếu
Tiên Nghịch V3 · sự kiện, ngoại trang và vòng quay

Thiên Cơ Bảo Luân và 24 món giới hạn

Thiết kế sự kiện · Sự kiện & ngoại trang V3

Đây là vòng quay ngoại trang nữ của gói sự kiện V3. Mỗi lượt nhận chắc chắn một Bảo Ấn và một kết quả từ bảng dưới. Tích đủ 80 Bảo Ấn sẽ được tự chọn một trong bốn trang phục chưa sở hữu.

Giá mẫu là 500 linh thạch một lượt hoặc 5.000 cho mười lượt. Có tám vé miễn phí mỗi đợt. Trần 20 lượt/ngày và 120 lượt/đợt gồm cả vé. Với đủ tám vé, mốc đổi đầu tiên cần tối đa 36.000 linh thạch. Trúng sớm vẫn giữ ấn, ấn dư dùng lại khi cùng vòng quay trở lại.

Bảng kết quả cho một lượt

Phần thưởng: Liễu Mi · Nguyệt Ảnh Lưu Ly
Số lượng: 1
Tỷ lệ mỗi lượt: 0,5%

Phần thưởng: Mộc Băng Mi · Hàn Cung Tịnh Nguyệt
Số lượng: 1
Tỷ lệ mỗi lượt: 0,5%

Phần thưởng: Lý Thiến Mai · Lam Mộng Tinh Hà
Số lượng: 1
Tỷ lệ mỗi lượt: 0,5%

Phần thưởng: Hồng Điệp · Xích Diễm Thiên Vũ
Số lượng: 1
Tỷ lệ mỗi lượt: 0,5%

Phần thưởng: Thiên Cơ Tinh Bàn
Số lượng: 1
Tỷ lệ mỗi lượt: 2%

Phần thưởng: Huyền Giáp Tinh Văn
Số lượng: 1
Tỷ lệ mỗi lượt: 2%

Phần thưởng: Bảo Sắc
Số lượng: 20
Tỷ lệ mỗi lượt: 10%

Phần thưởng: Bảo Sắc
Số lượng: 8
Tỷ lệ mỗi lượt: 24%

Phần thưởng: Bảo Sắc
Số lượng: 3
Tỷ lệ mỗi lượt: 60%

Bốn nhiệm vụ vé miễn phí

Nhiệm vụ: Hoàn hướng dẫn xem tỷ lệ và bảng đổi một lần · không cần chi linh thạch
Vé nhận: 2

Nhiệm vụ: Vượt 3 trận farm hợp lệ ở vùng đã mở trong thời gian event
Vé nhận: 2

Nhiệm vụ: Vượt một thử luyện miễn phí của event đang mở hoặc thử luyện thường
Vé nhận: 2

Nhiệm vụ: Hoàn 3 nhiệm vụ ngày bất kỳ trong cửa sổ event, không cần liên tiếp
Vé nhận: 2

Skin trùng chuyển thành 120 Bảo Sắc, ngoại hình phụ trùng chuyển thành 30 Bảo Sắc. Bảo Sắc mua vật trang trí ở cửa đổi. Bảo Ấn dành riêng để đổi bốn skin. Khi đã có đủ cả bốn, hệ thống dừng mua lượt mới.

24 phần thưởng giới hạn

Phần thưởng: Dược Ngọc Tương Phùng
Loại: Ngoại hình pháp bảo
Sự kiện: Mộng Hồi Vân Uyển
Cách nhận: Hoàn 7 chương và 7 bài luyện

Phần thưởng: Hồng Liên Trấn Ấn
Loại: Ngoại hình pháp bảo
Sự kiện: Chu Tước Hồng Liên
Cách nhận: Đổi 60 điểm Chu Tước

Phần thưởng: Nguyệt Kính Lưu Ly
Loại: Ngoại hình pháp bảo
Sự kiện: Huyễn Kính Vấn Tâm
Cách nhận: Đổi 40 điểm Kính Tâm

Phần thưởng: Lam Vân Kiếm Châu
Loại: Ngoại hình pháp bảo
Sự kiện: Vân Hải Hộ Đạo
Cách nhận: Đổi 25 điểm Hộ Đạo

Phần thưởng: Đan Hà Lôi Đỉnh
Loại: Ngoại hình pháp bảo
Sự kiện: Đan Hội Vân Tông
Cách nhận: Đổi 25 điểm Đan Hội

Phần thưởng: Thiên Cơ Tinh Bàn
Loại: Ngoại hình pháp bảo
Sự kiện: Thiên Cơ Bảo Luân
Cách nhận: Đổi 200 Bảo Sắc hoặc quay trúng với tỷ lệ 2%

Phần thưởng: Ngọc Hoa Đồng Tâm
Loại: Hào quang
Sự kiện: Mộng Hồi Vân Uyển
Cách nhận: Đạt 500 điểm Đồng Tâm và hoàn chương 7

Phần thưởng: Hồng Liên Tịnh Hỏa
Loại: Hào quang
Sự kiện: Chu Tước Hồng Liên
Cách nhận: Đổi 60 điểm Chu Tước

Phần thưởng: Thanh Sương Kính Giới
Loại: Hào quang
Sự kiện: Huyễn Kính Vấn Tâm
Cách nhận: Đổi 40 điểm Kính Tâm

Phần thưởng: Tinh Luân Dạ Quang
Loại: Hào quang
Sự kiện: Thiên Cơ Bảo Luân
Cách nhận: Đổi 180 Bảo Sắc

Phần thưởng: Khung Một Lời Hẹn
Loại: Khung chân dung
Sự kiện: Mộng Hồi Vân Uyển
Cách nhận: Vượt chương 7 lần đầu

Phần thưởng: Khung Xích Điệp
Loại: Khung chân dung
Sự kiện: Chu Tước Hồng Liên
Cách nhận: Đổi 40 điểm Chu Tước

Phần thưởng: Khung Vân Hải
Loại: Khung chân dung
Sự kiện: Vân Hải Hộ Đạo
Cách nhận: Đổi 25 điểm Hộ Đạo

Phần thưởng: Khung Đan Tâm
Loại: Khung chân dung
Sự kiện: Đan Hội Vân Tông
Cách nhận: Đổi 25 điểm Đan Hội

Phần thưởng: Một Niệm Không Phụ
Loại: Danh hiệu
Sự kiện: Mộng Hồi Vân Uyển
Cách nhận: Hoàn cả 7 bài luyện

Phần thưởng: Chiếu Kiến Bản Tâm
Loại: Danh hiệu
Sự kiện: Huyễn Kính Vấn Tâm
Cách nhận: Đổi 40 điểm Kính Tâm

Phần thưởng: Đồng Hành Qua Vân Hải
Loại: Danh hiệu
Sự kiện: Vân Hải Hộ Đạo
Cách nhận: Đổi 25 điểm Hộ Đạo

Phần thưởng: Người Giữ Lửa Đan
Loại: Danh hiệu
Sự kiện: Đan Hội Vân Tông
Cách nhận: Đổi 25 điểm Đan Hội

Phần thưởng: Bình Phong Hồng Liên
Loại: Trang trí động phủ
Sự kiện: Chu Tước Hồng Liên
Cách nhận: Đổi 40 điểm Chu Tước

Phần thưởng: Trúc Kính Vấn Tâm
Loại: Trang trí động phủ
Sự kiện: Huyễn Kính Vấn Tâm
Cách nhận: Đổi 40 điểm Kính Tâm

Phần thưởng: Tiểu Đan Lâu
Loại: Trang trí động phủ
Sự kiện: Đan Hội Vân Tông
Cách nhận: Đổi 25 điểm Đan Hội

Phần thưởng: Tinh Đồ Thiên Cơ
Loại: Trang trí động phủ
Sự kiện: Thiên Cơ Bảo Luân
Cách nhận: Đổi 120 Bảo Sắc

Phần thưởng: Vân Vĩ Lam Tinh
Loại: Ngoại hình linh thú
Sự kiện: Vân Hải Hộ Đạo
Cách nhận: Đổi 25 điểm Hộ Đạo

Phần thưởng: Huyền Giáp Tinh Văn
Loại: Ngoại hình linh thú
Sự kiện: Thiên Cơ Bảo Luân
Cách nhận: Đổi 200 Bảo Sắc hoặc quay trúng với tỷ lệ 2%

Ngoại hình đã nhận được giữ vĩnh viễn và khóa giao dịch. Riêng các sự kiện V3 cho giữ điểm, vé, Bảo Ấn và Bảo Sắc theo nhóm sự kiện để dùng khi mở lại. Hành Trình Nghịch Mệnh giữ quy tắc kết thúc riêng của V2.

Tài liệu đối chiếu
Tiên Nghịch V3 · sự kiện, ngoại trang và vòng quay

Chuyên mục Nhật ký

Thông báo tháng 11 và mốc dự kiến của dự án.

Thông báo tháng 11/2026

Thông báo dự án · Trao đổi dự án · tháng 11

Các mốc dưới đây ghi lại nội dung do chủ dự án đưa ra để thông báo. Lịch dự kiến được giữ nguyên trạng thái đến ngày đối chiếu 14/11/2026. Giờ hiển thị là giờ Việt Nam.

Ngày: 04/11
Nội dung: Bảo trì từ 19:00, dự kiến 30 phút. Nội dung liên quan nâng cấp bang hội và bang chiến.
Trạng thái trong nguồn: Lịch dự kiến

Ngày: 05/11
Nội dung: Tỉ Võ Tông Môn, hiển thị thời gian online thành viên bang, sửa BXH bang, đổi Ấn và lựa chọn Bí Cảnh Sáu Phòng.
Trạng thái trong nguồn: Nội dung cập nhật dự kiến

Ngày: 06/11
Nội dung: Bảo trì 19:45–21:00, có thể kéo dài. Nội dung gồm xác thực Discord để nhập code, Đan Hội, cân bằng chỉ số và sửa lỗi.
Trạng thái trong nguồn: Khung giờ đã thông báo

Ngày: 09/11
Nội dung: Vòng quay siêu cấp giới hạn được thông báo dự kiến bắt đầu thứ Hai. Giờ cụ thể công bố trong game.
Trạng thái trong nguồn: Mốc dự kiến, chưa đối chiếu máy chủ

Ngày: 10–11/11
Nội dung: Đổi cách thể hiện sát thương Ma Tu và Ma Chướng, cập nhật giao diện Ma Tu/Cổ Thần, Luyện Sát Khí tối đa 4 lần, công pháp Đạp Thiên cho mọi phái và kỹ năng Luyện Thể cộng % Máu.
Trạng thái trong nguồn: Yêu cầu và nội dung cập nhật

Ngày: 12/11
Nội dung: Thuế Chợ 30% và hai bot Discord.
Trạng thái trong nguồn: Nội dung thông báo

Ngày: 13/11
Nội dung: Đấu Trường không cho dùng Đạo Lữ. Tông Môn Tỉ Võ cho dùng Đạo Lữ. “Thiên Đạo thức tỉnh quyền năng” xuất hiện dưới dạng lời hé lộ.
Trạng thái trong nguồn: Quy tắc do chủ dự án nêu

Ngày: 15–21/11
Nội dung: Đan Hội Vân Tông dự kiến diễn ra 7 ngày. Thể lệ tham gia và phần thưởng sẽ công bố khi mở.
Trạng thái trong nguồn: Lịch dự kiến tại ngày 14/11

Vòng quay siêu cấp trong thông báo ngày 09/11 chưa có bảng thưởng kèm theo. Bảng pháp bảo Tiên Nghịch, bảng ngoại trang Thiên Cơ Bảo Luân và Hồng Thạch kỳ hội ở Cầu Ma là ba thiết kế riêng.
`;
