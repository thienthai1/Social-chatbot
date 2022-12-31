interface ISocialPage {
	pageId: string
	name: string
}

interface ISocialPageList extends Array<ISocialPage> {}

export type { ISocialPage, ISocialPageList }
