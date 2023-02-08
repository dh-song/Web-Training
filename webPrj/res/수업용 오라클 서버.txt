CREATE TABLE MEMBER1211(
    ID  NUMBER,
    NAME    VARCHAR2(100),
    PWD     VARCHAR2(100),
    EMAIL   VARCHAR2(1000)
);
SELECT * FROM member;

DROP TABLE MEMBER1211;

INSERT INTO MEMBER VALUES(19, '송대현', '121', 'dhyn.song@gmail.com', 'SONG');

INSERT INTO MEMBER(ID,NICNAME) VALUES(19, 'SONG');

UPDATE MEMBER SET
ID = 19,
NAME = '송대현',
EMAIL = 'ssss@gmail.com'
WHERE NICNAME = 'SONG';

UPDATE MEMBER SET EMAIL = 'abc@gmail.com' WHERE NAME='송대현';

DELETE MEMBER WHERE NAME = '송대현';

select id || '(' || name || ')' from member;

select * from member where email is null;
select * from member where email is not null;

select id from member where id between 1 and 200;

select * from member where id in (11, 19, 24);
select * from member where id not in (11, 19, 24);

select * from member where name like '%성%';
select * from member where name like '_성_'; --자리 수 정하기


ROLLBACK;
COMMIT;

select id, name, nicname from member where name = '모재영';
select id, name, nicname from member where regexp_like (name, '^모'); --정규표현식 사용

select ROWNUM, member.* from member where rownum between 6 and 10;
select * from (select ROWNUM rnum, member.* from member) where rnum between 6 and 10;
-- 서브쿼리 where 절 rownum은 바깥 select로 인식이라 서브쿼리 별칭 사용

select distinct pwd from member;
--distinct -- 중복 제거
select * from member where length(name)>3; -- 함수
select * from member order by id asc, nicname desc; --정렬
select * from member where name like '박%' order by id asc;

UPDATE MEMBER SET
pwd = 1928
WHERE NAME = '송대현';
select count(id), age from member group by age;
select round(age,-1), count(id) from member group by age order by age;
select avg(age) from member where mod(id,2) =1; --id가 홀수에 나이 평균

INSERT INTO notice(title, writer_id, content) VALUES('호잇', 19 , '그것은 둘리');
select * from notice;
select 
(select name from member where id = writer_id) member_name,
writer_id, count(writer_id) from notice group by writer_id order by TO_NUMBER(writer_id);
--order by 절에서 숫자 정렬 1 10 2 20 방지 TO_NUMBER(칼럼명)
--실행 순서 from>group having select 후 order
-- from/where/group by/having(group by 후 조건)/order by 순서

select * from (select member.*, rownum rn from member order by reg_date desc) where rn between 11 and 20;
-- rownum은 1부터 시작이라 6부터는 표시가 안 됨. 그래서 서브쿼리 이용
select * from member;

select * from 
(select rownum rn, a.* from 
(select * from member order by reg_date desc) a) 
where rn between 11 and 20;
select * from member where age >= (select avg(age) from member) ;
select * from member;

select * from notice;
insert into notice(id, title, writer_id, content) values(66, '추가', 0, 'ㅇ나ㅓ릳ㄹ');
select writer_id, count(writer_id) a from notice group by writer_id;
select writer_id ,게시글수 from (select writer_id, count(writer_id) 게시글수 from notice group by writer_id) where 게시글수 = (select max(count(writer_id)) from notice group by writer_id);

select 남, 여 from (select avg(age) 남  from member where gender = 1), (select avg(age) 여 from member where gender = 2);
select gender , avg(age) from member group by gender;
-- a > all(여러 값 / 서브쿼리값 여러개 가능) any=하나라도

select m.id member_id, m.name member_name, n.id , n.title
from member m
    inner join notice n
    on n.writer_id = m.id; --이너 조인
    
select m.id , m.name , count(n.id)
from member m left outer join notice n
    on n.writer_id = m.id
    group by m.id , m.name; --조인
    
select n.id, n.title, n.writer_id, m.name, count(c.notice_id)
    from notice n
    left outer join member m on n.writer_id = m.id -- 아우터는 남은 부분 null로 표시
    left join "COMMENT" c on n.id = c.notice_id 
    group by n.id, n.title, n.writer_id, m.name; -- 3테이블 조인
    
select m.id, m.name, m.boss_id, b.name
    from member m
    left outer join member b on m.boss_id = b.id; --셀프조인

select * from member cross join notice; -- 멤버 레코드 하나당 노티스 모두
--union (통합검색)

select 'NOTICE' type, id, title from notice where title like '%안%'
union all--union 중복x all 중복O
select 'COMMENT' TYPE, id, content from "COMMENT" where content like '%재%';
--intersect 중복 보기
--minus 후 테이블 빼기
select 'NOTICE' type, id, title from notice where title like '%안%'
intersect
select 'COMMENT' TYPE, id, content from "COMMENT" where content like '%재%';

create view notice_view as --view
select n.id, n.title, n.writer_id, m.name, count(c.notice_id)
    from notice n
    left outer join member m on n.writer_id = m.id
    left join "COMMENT" c on n.id = c.notice_id 
    group by n.id, n.title, n.writer_id, m.name;
    
select * from notice_view;

select * from user_tables;
select * from user_tab_columns;

select age from member;

create view dd as
select * from notice_view where id = 30;
