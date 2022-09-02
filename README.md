1) exact писать не надо, все роуты сразу такие
2) Вместо <NavLink> используем <Link>
3) На смену <Switch> (его в ролике не использовали) пришёл <Routes>. Все <Route> нужно обернуть в компонент  <Routes>
4) Компонент в <Route> теперь передаём в пропсе element как компонент
Пример кода: 
<Routes>
            <Route path="/users" element={<UserPage/>}/>
            <Route path="/todos" element={<TodosPage/>}/>
            <Route path="/user/:id" element={<UserItemPage/>}/>
            <Route path="/todo/:id" element={<TodoItemPage/>}/>
            <Route path="*" element={<div>NotFound</div>}/>
</Routes>
5) Вместо useHistory используем useNavigate; 
Пример кода: 
const navigate = useNavigate();
navigate("/users");
