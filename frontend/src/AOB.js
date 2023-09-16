<div className="sidebar">
  {items.map((item) => (
    <SidebarItem key={index} {...item} item={item} />
  ))}
</div>;

//Inside Sidebar Item
if (item.childrens) {
  //Return sidebar with dropdowns
} else {
  //Return sidebar item without dropdowns
}
