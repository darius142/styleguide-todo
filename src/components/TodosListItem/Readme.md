Types of buttons:
Delete button:

```jsx
<button variant="raised" color="primary" className="delete-btn">
  Delete
</button>
```

Edit button:

```jsx
<button variant="raised" color="primary">
  Edit
</button>
```

Save button:

```jsx
<button variant="raised" color="secondary">
  Save
</button>
```

Cancel button:

```jsx
<button variant="raised" color="primary" className="cancel-btn">
  Cancel
</button>

```


### Card

### Import

`import Card from 'styleguide-todo';`

####

```jsx
<Card className={classes.card} >
	<CardContent>
	    <div className={"todo-" + (isCompleted ? "completed" : "not-completed") }>
	        {this.renderTask()}
	        {this.renderActionSection()}
	    </div>                   
	</CardContent>
</Card>
```

#### 
