# Components

[NavItem](#NavItem)

<a name="NavItem" id="NavItem"></a>

## NavItem

### API

#### Icon

The Nav Icon on the left position.

<div style="color:grey;">Type: React View</div>

#### noBorder

Whether to show bottom border. Default `false`

<div style="color:grey;">Type: Boolean</div>

#### onPress

It will be called when the nav pressed.

<div style="color:grey;">Type: Function</div>

### Example

```jsx
// some imports
function Demo() {
  const onPress = () => {
    console.log('onPress');
  };
  const Icon = props => (
    <Ionicon name="settings-outline" color="#1F65FF" size={16} {...props} />
  );
  return (
    <View style={{flex: 1, backgroundColor: '#eee'}}>
      <NavItem />
      <NavItem Icon={Icon} />
      <NavItem Icon={props => <View {...props} />} />
      <NavItem Icon={props => <View {...props} style={{width: 70}} />} />
      <NavItem noBorder />
      <NavItem>
        <Text>CHILDREN AREA</Text>
      </NavItem>
      <NavItem>
        <Text numberOfLines={1} ellipsizeMode="tail">
          {'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor doloribus, natus optio molestiae quis, corporis exercitationem, atque provident aperiam consequuntur! Placeat rem sunt, delectus nesciunt ducimus officiis minus itaque!'.toUpperCase()}
        </Text>
      </NavItem>
      <NavItem onPress={onPress} Icon={Icon}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text>CHILDREN</Text>
          <Button title="CLICK ME" />
        </View>
      </NavItem>
    </View>
  );
}
```
